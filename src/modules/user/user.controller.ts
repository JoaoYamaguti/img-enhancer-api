import { Body, Controller, Delete, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import UserService from './user.service';
import { CreateUserReqDto } from './user.req.dto';

@Controller('user')
class UserController {
  public constructor(private userServices: UserService) {}

  @Post()
  public async store(@Body() body: CreateUserReqDto, @Res() res: Response) {
    const service = await this.userServices.createUser(
      body.name,
      body.email,
      body.password,
    );
    return res.status(service.statusCode).json(service);
  }

  @Delete('')
  public async delete(@Req() req, @Res() res: Response) {
    const service = await this.userServices.deleteUser(req.userId);
    return res.status(service.statusCode).json(service);
  }
}

export default UserController;
