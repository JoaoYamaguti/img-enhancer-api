import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/database/prisma.service';

@Injectable()
class GalleryService {
  public constructor(private prisma: PrismaService) {}

  public async index(userId: number, page: number) {
    console.log(page);
    const gallery = await this.prisma.gallery.findMany({
      where: { user_id: userId },
      take: 6,
      skip: 6 * (page - 1),
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

  public async delete(id: number, userId: number) {
    const image = await this.prisma.gallery.findUnique({
      where: { id, user_id: userId },
    });

    if (!image) {
      return {
        statusCode: 404,
        message: 'image does not found.',
      };
    }

    await this.prisma.gallery.delete({ where: { id } });

    return {
      statusCode: 200,
      message: 'image deleted.',
    };
  }
}
export default GalleryService;
