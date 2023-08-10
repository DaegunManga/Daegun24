import isLoggedIn from '@src/hooks/isLoggedIn';
import { FastifyPluginAsync } from 'fastify';
import AuthService from './auth.service';
import { AdminLoginBody, LoginBody, RefreshTokenHeader } from './auth.types';

const authRoute: FastifyPluginAsync = async (fastify, opts) => {
  fastify.post<{ Body: AdminLoginBody }>('/admin-login', async (req, res) => {
    const { id, password } = req.body;

    return AuthService.AdminLogin(id, password);
  });

  fastify.post<{ Body: LoginBody }>('/login', async (req, res) => {
    const { email, password } = req.body;

    return AuthService.Login(email, password);
  });

  fastify.post<{ Headers: RefreshTokenHeader }>(
    '/refresh-token',
    async (req, res) => {
      const { qid } = req.headers;

      return AuthService.RefreshToken(qid);
    }
  );
};

export default authRoute;
