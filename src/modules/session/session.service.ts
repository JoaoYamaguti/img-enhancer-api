import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
class SessionService {
  public constructor(private prisma: PrismaService) {}
}

export default SessionService;
