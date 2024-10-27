// backend/src/sites/dto/create-site.dto.ts
import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateSiteDto {
  @IsString()
  siteAddress: string;

  @IsString()
  city: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsString()
  @IsOptional()
  zipCode: string;

  @IsString()
  country: string;

  @IsInt()
  customerId: number;  // Add customerName field
}
