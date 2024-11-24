import { Injectable, NestMiddleware, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Response } from 'express';

@Injectable()
class AuthMiddleware implements NestMiddleware {
  public constructor(private jwtServices: JwtService) {}
  public async use(@Req() req, @Res() res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(400).json({ message: 'token does not provided' });
    }

    const [, token] = req.headers.authorization.split(' ');

    try {
      const decoded = await this.jwtServices.verifyAsync(token);
      req.userId = decoded.id;
    } catch (error) {
      return res.status(401).json({ message: 'Not Authorized', error });
    }

    next();
  }
}

export default AuthMiddleware;
