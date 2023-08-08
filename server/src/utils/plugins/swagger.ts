import { FastifyPluginAsync } from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';

const SwaggerPlugin: FastifyPluginAsync = async (fastify, opts) => {
  fastify.register(swagger, {
    swagger: {
      info: {
        title: 'Daegun24',
        description: 'Testing the Daegun24 swagger API',
        version: `${process.env.VERSION}`,
      },
      host: 'localohost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'user', description: 'User related end-point' },
        { name: 'code', description: 'Code Related end-points' },
      ],
      definitions: {
        User: {
          type: 'object',
          required: ['id', 'email'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            nickname: { type: 'string', maxLength: 8 },
            name: { type: 'string', maxLength: 5 },
            email: { type: 'string', format: 'email' },
          },
        },
      },
    },
  });

  fastify.register(swaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next();
      },
      preHandler: function (request, reply, next) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });
};

export default SwaggerPlugin;
