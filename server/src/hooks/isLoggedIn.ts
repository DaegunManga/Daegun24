import { CustomError, ErrorType } from '@src/utils/errors/customError.class';
import { FastifyPluginCallback, FastifyReply, FastifyRequest } from 'fastify';
import { verify } from 'jsonwebtoken';
import fp from 'fastify-plugin';

export interface DecodedUserAccessToken {
  user_id: string;
  exp: number;
}

export interface DecodedUserRefreshToken extends DecodedUserAccessToken {
  token_id: string;
}

interface PluginConfig {
  throwError: boolean;
}

const isLoggedInHook: FastifyPluginCallback<PluginConfig> = (
  fastify,
  opts,
  done
) => {
  fastify.addHook(
    'preHandler',
    async (req: FastifyRequest, res: FastifyReply) => {
      const { access_token: accessToken, qid } = req.headers;

      if (!accessToken || !qid) {
        if (opts.throwError) {
          throw new CustomError({
            type: ErrorType.UNAUTHORIZED,
            message: 'Not loggedin',
          });
        }
        return;
      }

      try {
        let token = accessToken;
        if (token instanceof Array) {
          token = accessToken[0];
        }

        const decodedAccessToken = verify(
          token,
          process.env.ACCESS_JWT_SECRET
        ) as unknown as DecodedUserAccessToken;

        req.userId = decodedAccessToken.user_id;

        return req;
      } catch (err) {
        throw new CustomError({
          type: ErrorType.UNAUTHORIZED,
          message: 'Token Expired',
        });
      }
    }
  );

  done();
};

export default fp(isLoggedInHook);
