// dto/create-customer.dto.ts
import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  company: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;
}
