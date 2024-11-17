import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import * as bcrypt from 'bcrypt';

@Injectable()
class UserService {
  public constructor(private prisma: PrismaService) {}
  public async getUser(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    console.log(user);

    if (!user) {
      return { error: 'user id doesn`t found' };
    }

    return user;
  }
  public async createUser(name: string, email: string, password: string) {
    const userExists = await this.prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return { error: 'email is already in use.' };
    }

    const password_hash = await bcrypt.hash(password, 8);

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password_hash,
      },
    });
    return user;
  }
  public async deleteUser(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      return { error: 'User does not found' };
    }

    return this.prisma.user.delete({ where: { id } });
  }
}

export default UserService;
