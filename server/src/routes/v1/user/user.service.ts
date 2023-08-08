import { UserEntity } from '@src/entities/User.entity';
import { IsNull, Not } from 'typeorm';
import { GetUserQuery } from './user.types';

export default class UserService {
  static async RegisterRequest(name: string, year: number, classNo: number) {
    const user = await UserEntity.create({ name, year, classNo }).save();

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

  static async AcceptUser(id?: string, name?: string) {}
}
