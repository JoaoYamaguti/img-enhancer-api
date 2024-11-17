import { Body, Controller, Delete, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import UserService from './user.service';

@Controller('/user')
class UserController {
  public constructor(private userServices: UserService) {}
  @Get()
  public async index(@Body('id') id, @Res() res: Response) {
    return res.json(await this.userServices.getUser(id));
  }
  @Post()
  public async store(
    @Body('name') name,
    @Body('email') email,
    @Body('password') password,
    @Res() res: Response,
  ) {
    return res.json(await this.userServices.createUser(name, email, password));
  }
  @Delete()
  public delete(@Body('id') id) {
    return this.userServices.deleteUser(id);
  }
}

export default UserController;
