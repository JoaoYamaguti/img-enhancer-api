import { Controller, Post } from '@nestjs/common';
import SessionService from './session.service';

@Controller('session')
class SessionController {
  public constructor(private sessionServices: SessionService) {}
  @Post()
  public async login(email: string, password: string) {
    return { ok: 'arrived' };
  }
}

export default SessionController;
