import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { authConfig } from 'src/lib/auth.config';

@Injectable()
class SessionService {
  public constructor(private prisma: PrismaService) {}
  public async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      return {
        statusCode: 404,
        message: 'email does not exists.',
      };
    }

    const { id, password_hash } = user;

    if (!(await bcrypt.compare(password, password_hash))) {
      return {
        statusCode: 401,
        message: 'password is incorrect.',
      };
    }

    return {
      statusCode: 200,
      message: {
        user,
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      },
    };
  }
}

export default SessionService;
