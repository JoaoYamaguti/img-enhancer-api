import { Injectable, NestMiddleware, Req, Res } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { authConfig } from 'src/lib/auth.config';
import * as jwt from 'jsonwebtoken';
import { promisify } from 'util';

@Injectable()
class AuthMiddleware implements NestMiddleware {
  public async use(@Req() req, @Res() res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      console.log('cheguei');
      return res.status(400).json({ message: 'token does not provided' });
    }

    const [, token] = req.headers.authorization.split(' ');

    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);
      req.userId = decoded.id;
    } catch (error) {
      return res.status(401).json({ message: 'Not Authorized', error });
    }

    next();
  }
}

export default AuthMiddleware;
