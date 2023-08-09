import { FastifyPluginAsync } from 'fastify';
import UserService from './user.service';
import {
  AcceptUserQuery,
  DeleteUserQuery,
  GetUserQuery,
  RegisterRequestBody,
} from './user.types';

const userRoute: FastifyPluginAsync = async (fastify, opts) => {
  fastify.post<{ Body: RegisterRequestBody }>(
    '/register-request',
    async (req) => {
      const { email, name } = req.body;
      const emailSplit = email.split('');
      const year = parseInt(`${emailSplit[4]}${emailSplit[5]}`, 10);
      const classNo = parseInt(`${emailSplit[6]}${emailSplit[7]}`, 10);

      return UserService.RegisterRequest(name, year, classNo);
    }
  );

  fastify.get<{ Querystring: GetUserQuery }>('/get-users', async (req) => {
    const { filter } = req.query;

    return UserService.GetUser(filter);
  });

  fastify.post<{ Querystring: AcceptUserQuery }>(
    '/accept-user',
    async (req) => {
      const { id } = req.query;

      return UserService.AcceptUser(id);
    }
  );

  fastify.delete<{ Querystring: DeleteUserQuery }>('/delete', async (req) => {
    const { id } = req.query;

    return UserService.DeleteUser(id);
  });
};

export default userRoute;
