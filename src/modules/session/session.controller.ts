import { Body, Controller, Post, Res } from '@nestjs/common';
import SessionService from './session.service';
import { Response } from 'express';
import { CreateSessionReqDto } from './session.req.dto';

@Controller('session')
class SessionController {
  public constructor(private sessionServices: SessionService) {}
  @Post()
  public async login(@Body() body: CreateSessionReqDto, @Res() res: Response) {
    const service = await this.sessionServices.login(body.email, body.password);
    return res.status(service.statusCode).json(service);
  }
}

export default SessionController;
