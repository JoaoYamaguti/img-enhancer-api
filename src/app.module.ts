import { Module } from '@nestjs/common';
import TestModule from './modules/test/test.module';
import UserModule from './modules/user/user.module';

@Module({
  imports: [TestModule, UserModule],
})
export class AppModule {}
