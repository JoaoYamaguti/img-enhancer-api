import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import * as bcrypt from 'bcrypt';

@Injectable()
class UserService {
  public constructor(private prisma: PrismaService) {}
  public async getUser(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      return { statusCode: 400, message: 'user id doesn`t found' };
    }

    return { statusCode: 200, message: user };
  }
  public async createUser(name: string, email: string, password: string) {
    const userExists = await this.prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return { statusCode: 400, message: 'email is already in use.' };
    }

    const password_hash = await bcrypt.hash(password, 8);

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password_hash,
      },
    });
    return { statusCode: 201, message: user };
  }
  public async deleteUser(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      return { statusCode: 400, message: 'User does not found' };
    }

    this.prisma.user.delete({ where: { id } });

    return { statusCode: 200, message: 'User Deleted.' };
  }
}

export default UserService;
