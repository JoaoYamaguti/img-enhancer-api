import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserReqDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
