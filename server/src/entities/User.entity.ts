import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import bcrypt from 'bcrypt';
import RefreshTokenEntity from './RefreshToken.entity';
import GenerateToken from '@src/utils/generateToken.class';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  userId: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  password: string;

  @Column('int', { default: 1 })
  year: number;

  @Column('int', { default: 1, name: 'class' })
  classNo: number;

  @Column('timestamptz', { nullable: true })
  accepted: Date;

  @Column('timestamptz')
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column('timestamptz')
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async generateTokens() {
    const authToken = new RefreshTokenEntity();
    authToken.fk_user_id = this.userId;
    await authToken.save();

    const refreshToken = GenerateToken.generateRefreshToken({
      user_id: this.userId,
      token_id: authToken.id,
    });
    const accessToken = GenerateToken.generateAccessToken({
      user_id: this.userId,
    });

    return { refreshToken, accessToken };
  }

  refreshToken(
    tokenId: string,
    refreshTokenExp: number,
    originalRefreshToken: string
  ) {
    const now = new Date().getTime();
    const diff = refreshTokenExp * 1000 - now;
    let refreshToken = originalRefreshToken;

    if (diff < 1000 * 60 * 60 * 24 * 15) {
      refreshToken = GenerateToken.generateRefreshToken({
        user_id: this.userId,
        token_id: tokenId,
      });
    }
    const accessToken = GenerateToken.generateAccessToken({
      user_id: this.userId,
    });

    return { refreshToken, accessToken };
  }
}
