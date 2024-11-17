import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import UserService from './user.service';
import { CreateUserReqDto } from './user.req.dto';

@Controller('/user')
class UserController {
  public constructor(private userServices: UserService) {}
  @Get(':id')
  public async index(@Param('id') id: number, @Res() res: Response) {
    const service = await this.userServices.getUser(Number(id));
    return res.status(service.statusCode).json(service.message);
  }
  @Post()
  public async store(@Body() body: CreateUserReqDto, @Res() res: Response) {
    const service = await this.userServices.createUser(
      body.name,
      body.email,
      body.password,
    );
    return res.status(service.statusCode).json(service.message);
  }
  @Delete(':id')
  public async delete(@Param('id') id, @Res() res: Response) {
    const service = await this.userServices.deleteUser(Number(id));
    return res.status(service.statusCode).json(service.message);
  }
}

export default UserController;
