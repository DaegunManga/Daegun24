import { sign } from 'jsonwebtoken';

export default class GenerateToken {
  static generateAccessToken(payload: TokenPayload) {
    return sign(payload, process.env.ACCESS_JWT_SECRET, {
      expiresIn: '15m',
      subject: 'access_token',
      issuer: 'daegun24.dgmanga.kr',
    });
  }

  static generateRefreshToken(payload: TokenPayload) {
    return sign(payload, process.env.REFRESH_JWT_SECRET, {
      expiresIn: '30d',
      subject: 'refresh_token',
      issuer: 'daegun24.dgmanga.kr',
    });
  }
}

type TokenPayload = string | Buffer | object;
