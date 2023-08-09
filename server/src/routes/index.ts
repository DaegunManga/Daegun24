import { FastifyPluginAsync } from 'fastify';
import userRoute from './v1/user';

const rootRoute: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get('/ping', (req, res) => {
    return 'pong';
  });

  fastify.register(userRoute, { prefix: '/v1/user' });
};

export default rootRoute;
