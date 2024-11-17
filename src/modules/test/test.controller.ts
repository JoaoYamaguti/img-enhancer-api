import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import TestService from './tes.service';
import { Response } from 'express';
@Controller('/test')
class TestController {
  public constructor(private testService: TestService) {}
  @Get()
  public index() {
    return 'hello world!';
  }
  @Get('/index2')
  public index2() {
    return 'hello world2!';
  }

  @Post()
  public store(@Body() body, @Query() query) {
    return query;
  }
  @Post('/sum')
  public sum(@Body('num1') num1, @Body('num2') num2, @Res() res: Response) {
    return res.json({ res: this.testService.sum(num1, num2) });
  }
}

export default TestController;
