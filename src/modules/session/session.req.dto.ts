import { IsEmail, IsString } from 'class-validator';

export class CreateSessionReqDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
