import { UserEntity } from '@src/entities/User.entity';
import { CustomError, ErrorType } from '@src/utils/errors/customError.class';
import { IsNull, Not } from 'typeorm';
import { GetUserQuery } from './user.types';

export default class UserService {
  static async RegisterRequest(
    email: string,
    name: string,
    year: number,
    classNo: number,
    password: string
  ) {
    const user = await UserEntity.create({
      email,
      name,
      password,
      year,
      classNo,
    }).save();

    return { result: true, data: { user } };
  }

  static async GetUser(filter: GetUserQuery['filter']) {
    let users: UserEntity[] = [];
    if (filter === 'accepted') {
      users = await UserEntity.find({ where: { accepted: Not(IsNull()) } });
    } else if (filter === 'not-accepted') {
      users = await UserEntity.find({ where: { accepted: IsNull() } });
    } else {
      users = await UserEntity.find();
    }

    return {
      result: true,
      data: { users },
    };
  }

  static async AcceptUser(id: string) {
    const user = await UserEntity.findOne({ where: { userId: id } });

    if (!user) {
      throw new CustomError({
        type: ErrorType.NOT_FOUND,
        message: 'User not exists',
      });
    }

    user.accepted = new Date();
    await user.save();

    return {
      result: true,
      data: { user },
    };
  }

  static async DeleteUser(id: string) {
    const user = await UserEntity.findOne({ where: { userId: id } });

    if (!user) {
      throw new CustomError({
        type: ErrorType.NOT_FOUND,
        message: 'User not exists',
      });
    }

    await user.remove();

    return {
      result: true,
      data: { user },
    };
  }
}
