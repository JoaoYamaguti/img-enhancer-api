import { Injectable } from '@nestjs/common';
@Injectable()
export default class TestService {
  public sum(num1: number, num2: number): number {
    return num1 + num2;
  }
}
