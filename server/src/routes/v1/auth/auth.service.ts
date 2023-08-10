import { UserEntity } from '@src/entities/User.entity';
import { CustomError, ErrorType } from '@src/utils/errors/customError.class';
import { compare } from 'bcrypt';
import { decode } from 'jsonwebtoken';

export default class AuthService {
  static AdminLogin(id: string, password: string) {
    // TODO: Add Database
    if (id !== process.env.SU_ID || password !== process.env.SU_PW) {
      throw new CustomError({
        type: ErrorType.UNAUTHORIZED,
        message: 'Incorrect id or password for su',
      });
    }

    return {
      result: true,
    };
  }

  static async Login(email: string, password: string) {
    const user = await UserEntity.findOne({ where: { email } });

    if (!user || !user.updatedAt) {
      throw new CustomError({
        type: ErrorType.UNAUTHORIZED,
        message: 'User not found or Not accecpted',
      });
    }

    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new CustomError({
        type: ErrorType.UNAUTHORIZED,
        message: 'Password incorrect',
      });
    }

    const tokens = await user.generateTokens();

    return { result: true, data: { tokens } };
  }

  static async RefreshToken(refreshToken: string) {
    if (!refreshToken) {
      throw new CustomError({
        type: ErrorType.BAD_REQUEST,
        message: 'Token not found',
      });
    }

    const decoded = decode(refreshToken) as {
      user_id: string;
      token_id: string;
      exp: number;
    };

    const { user_id: userId, token_id: tokenId, exp } = decoded;

    const user = await UserEntity.findOne({ where: { userId } });

    if (!user) {
      throw new CustomError({
        type: ErrorType.UNAUTHORIZED,
        message: 'Invalid Token',
      });
    }

    const tokens = user.refreshToken(tokenId, exp, refreshToken);

    return {
      result: true,
      data: { tokens },
    };
  }
}
