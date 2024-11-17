import { Module } from '@nestjs/common';
import SessionService from './session.service';
import { PrismaService } from 'src/common/database/prisma.service';
import SessionController from './session.controller';

@Module({
  providers: [SessionService, PrismaService],
  controllers: [SessionController],
})
export default class SessionModule {}
