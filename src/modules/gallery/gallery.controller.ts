import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import GalleryService from './gallery.service';

@Controller('gallery')
class GalleryController {
  public constructor(private galleryService: GalleryService) {}
  @Get()
  public async index(@Req() req, @Body('id') id: number, @Res() res: Response) {
    const service = await this.galleryService.index(req.userId);
    return res.status(service.statusCode).json(service.message);
  }
  @Post()
  public async create(
    @Body('filename') filename,
    @Body('caught_file') caught_file,
    @Body('new_file') new_file,
    @Res() res: Response,
  ) {
    const service = await this.galleryService.create(
      filename,
      caught_file,
      new_file,
    );
    return res.status(service.statusCode).json(service.message);
  }
}
export default GalleryController;
