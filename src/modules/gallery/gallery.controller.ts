import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import GalleryService from './gallery.service';
import { CreateGalleryReqDto } from './gallery.req.dto';

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
    @Req() req,
    @Body() body: CreateGalleryReqDto,
    @Res() res: Response,
  ) {
    const service = await this.galleryService.create(
      req.userId,
      body.filename,
      body.caught_file,
      body.new_file,
    );
    return res.status(service.statusCode).json(service.message);
  }
}
export default GalleryController;
