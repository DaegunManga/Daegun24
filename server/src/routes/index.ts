import { FastifyPluginAsync } from 'fastify';

const rootRoute: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get('/ping', (req, res) => {
    return 'pong';
  });
};

export default rootRoute;
