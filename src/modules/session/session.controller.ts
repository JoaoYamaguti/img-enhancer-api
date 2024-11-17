import { Body, Controller, Post } from '@nestjs/common';
import SessionService from './session.service';

@Controller('session')
class SessionController {
  public constructor(private sessionServices: SessionService) {}
  @Post()
  public async login(@Body('email') email, @Body('password') password) {
    return this.sessionServices.login(email, password);
  }
}

export default SessionController;
