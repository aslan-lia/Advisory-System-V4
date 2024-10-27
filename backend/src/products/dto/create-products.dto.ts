import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cpeName: string;

  @IsInt()
  @IsNotEmpty()
  siteId: number;  // Pass site name to identify which site this product belongs to

  @IsString()
  @IsNotEmpty()
  customerName: string;  // Pass customer name to identify which customer this product belongs to
}
