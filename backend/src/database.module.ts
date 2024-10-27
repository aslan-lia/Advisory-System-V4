// src/database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Customer } from './customers/schemas/customers.schema';
import { Site } from './sites/schemas/sites.schema';
import { Product } from './products/schemas/products.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),  // Load .env variables
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [Customer, Site, Product],  // Add all relevant entities
        synchronize: true,  // For development only
      }),
    }),
  ],
  exports: [TypeOrmModule],  // Export TypeOrmModule for use in other modules
})
export class DatabaseModule {}
