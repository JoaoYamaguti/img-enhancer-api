import { Module } from '@nestjs/common';
import UserService from './user.service';
import { PrismaService } from 'src/prisma.service';
import UserController from './user.controller';
import SessionService from '../session/session.service';

@Module({
  providers: [UserService, PrismaService, SessionService],
  controllers: [UserController],
})
export default class UserModule {}
