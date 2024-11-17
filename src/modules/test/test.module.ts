import { Module } from '@nestjs/common';
import TestController from './test.controller';
import TestService from './tes.service';

@Module({
  providers: [TestService],
  controllers: [TestController],
})
export default class TestModule {}
