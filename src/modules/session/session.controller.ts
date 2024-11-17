import { Body, Controller, Post, Res } from '@nestjs/common';
import SessionService from './session.service';
import { Response } from 'express';

@Controller('session')
class SessionController {
  public constructor(private sessionServices: SessionService) {}
  @Post()
  public async login(
    @Body('email') email,
    @Body('password') password,
    @Res() res: Response,
  ) {
    const service = await this.sessionServices.login(email, password);
    return res.status(service.statusCode).json(service.message);
  }
}

export default SessionController;
