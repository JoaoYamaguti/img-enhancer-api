import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGalleryReqDto {
  @IsString()
  @IsNotEmpty()
  filename: string;

  @IsString()
  @IsNotEmpty()
  caught_file: string;

  @IsString()
  @IsNotEmpty()
  new_file: string;
}

export class CreatePageReqDto {
  @IsNumber()
  @IsNotEmpty()
  page: number;
}
