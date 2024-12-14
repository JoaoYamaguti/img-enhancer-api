import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/database/prisma.service';
import * as bcrypt from 'bcrypt';
// import * as jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';

@Injectable()
class SessionService {
  public constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  public async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      return {
        statusCode: 404,
        message: ['email does not exists.'],
      };
    }

    const { id, name, password_hash, created_at } = user;

    if (!(await bcrypt.compare(password, password_hash))) {
      return {
        statusCode: 401,
        message: ['password is incorrect.'],
      };
    }

    return {
      statusCode: 200,
      message: {
        user: { id, name, email, created_at },
        token: this.jwtService.sign({ id }),
      },
    };
  }
}

export default SessionService;
