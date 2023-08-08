import fastify, {
  FastifyInstance,
  FastifyLoggerInstance,
  FastifyServerOptions,
} from 'fastify';
import { IncomingMessage, ServerResponse, Server as HTTPServer } from 'http';
import fastifyCors, { FastifyCorsOptions } from '@fastify/cors';

import { CustomError, ErrorType } from './utils/errors/customError.class';
import rootRoute from './routes';

export default class Server {
  private readonly app: FastifyInstance<
    HTTPServer,
    IncomingMessage,
    ServerResponse,
    FastifyLoggerInstance
  >;
  private corsOptions: FastifyCorsOptions;

  constructor(options?: FastifyServerOptions) {
    this.app = fastify(options);
    this.corsSetup(process.env.CORS_WHITELISTS);

    const server = this.app.server;

    try {
      void this.app.register(fastifyCors, this.corsOptions);
      void this.app.register(rootRoute, { prefix: '/' });
    } catch (err) {
      this.app.log.error(err);
      process.exit(1);
    }
  }

  async start(port: string | number) {
    try {
      await this.app.listen({
        port: port as number,
      });
    } catch (err) {
      this.app.log.error(err);
      process.exit(1);
    }
  }

  corsSetup(whitelists: string) {
    const whiltelist = whitelists.split(',');

    if (whitelists === '*') {
      this.corsOptions = {
        origin: true,
        credentials: true,
      };
      return;
    }

    const CORS_ERROR = new CustomError({
      type: ErrorType.FORBIDDEN,
      message: 'Cors not allowed',
    });

    this.corsOptions = {
      origin: (origin, cb) => {
        if (!origin) throw CORS_ERROR;
        if (whiltelist.indexOf(origin) !== -1) {
          cb(null, true);
        } else {
          throw CORS_ERROR;
        }
      },
      credentials: true,
    };
  }

  get instance(): typeof this.app {
    return this.app;
  }
}
