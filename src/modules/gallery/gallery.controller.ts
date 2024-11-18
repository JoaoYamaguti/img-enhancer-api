import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { query, Response } from 'express';
import GalleryService from './gallery.service';
import { CreateGalleryReqDto, CreatePageReqDto } from './gallery.req.dto';

@Controller('gallery')
class GalleryController {
  public constructor(private galleryService: GalleryService) {}
  @Get()
  public async index(
    @Req() req,
    @Query() query: CreatePageReqDto,
    @Res() res: Response,
  ) {
    const service = await this.galleryService.index(req.userId, query.page);
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
  @Delete(':id')
  public async delete(@Req() req, @Param('id') id, @Res() res: Response) {
    const service = await this.galleryService.delete(Number(id), req.UserId);
    return res.status(service.statusCode).json(service.message);
  }
}
export default GalleryController;
