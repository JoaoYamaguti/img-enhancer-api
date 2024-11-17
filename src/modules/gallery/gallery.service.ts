import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
class GalleryService {
  public constructor(private prisma: PrismaService) {}

  public async index(userId: number) {
    const gallery = await this.prisma.gallery.findMany({
      where: { user_id: userId },
    });
    return {
      statusCode: 200,
      message: gallery,
    };
  }

  public async create(filename: string, caught_file: string, new_file: string) {
    return { statusCode: 200, message: 'ok' };
  }
}
export default GalleryService;
