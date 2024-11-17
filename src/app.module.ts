import { Module } from '@nestjs/common';
import TestModule from './modules/test/test.module';
import UserModule from './modules/user/user.module';
import SessionModule from './modules/session/session.module';

@Module({
  imports: [TestModule, UserModule, SessionModule],
})
export class AppModule {}
