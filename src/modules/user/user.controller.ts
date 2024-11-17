import { Body, Controller, Delete, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import UserService from './user.service';
import { CreateUserReqDto } from './user.req.dto';

@Controller('/user')
class UserController {
  public constructor(private userServices: UserService) {}
  @Get()
  public async index(@Body('id') id: number, @Res() res: Response) {
    const service = await this.userServices.getUser(id);
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
  @Delete()
  public async delete(@Body('id') id, @Res() res: Response) {
    const service = await this.userServices.deleteUser(id);
    return res.status(service.statusCode).json(service.message);
  }
}

export default UserController;
