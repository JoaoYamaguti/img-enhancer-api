import { Module } from '@nestjs/common';
import UserService from './user.service';
import { PrismaService } from 'src/common/database/prisma.service';
import UserController from './user.controller';

@Module({
  providers: [UserService, PrismaService],
  controllers: [UserController],
})
export default class UserModule {}
