import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/database/prisma.service';

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

  public async create(
    userId: number,
    filename: string,
    caught_file: string,
    new_file: string,
  ) {
    const image = await this.prisma.gallery.create({
      data: {
        user_id: userId,
        filename,
        caught_file,
        new_file,
      },
    });

    if (!image) {
      return { statusCode: 400, message: 'failed' };
    }
    return { statusCode: 200, message: image };
  }
}
export default GalleryService;
