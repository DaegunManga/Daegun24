import { FastifyPluginAsync } from 'fastify';
import UserService from './user.service';
import { GetUserQuery, RegisterRequestBody } from './user.types';

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

  fastify.post('/accept-user', async (req) => {});
};

export default userRoute;
