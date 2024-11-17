import { Body, Controller, Delete, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import UserService from './user.service';

@Controller('/user')
class UserController {
  public constructor(private userServices: UserService) {}
  @Get()
  public async index(@Body('id') id, @Res() res: Response) {
    const service = await this.userServices.getUser(id);
    return res.status(service.statusCode).json(service.message);
  }
  @Post()
  public async store(
    @Body('name') name,
    @Body('email') email,
    @Body('password') password,
    @Res() res: Response,
  ) {
    const service = await this.userServices.createUser(name, email, password);
    return res.status(service.statusCode).json(service.message);
  }
  @Delete()
  public async delete(@Body('id') id, @Res() res: Response) {
    const service = await this.userServices.deleteUser(id);
    return res.status(service.statusCode).json(service.message);
  }
}

export default UserController;
