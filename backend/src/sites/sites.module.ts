// sites/sites.module.ts
import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesController } from './sites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './schemas/sites.schema';
import { CustomersModule } from '../customers/customers.module'; // Import CustomersModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Site]),
    CustomersModule, // Add CustomersModule to imports
  ],
  controllers: [SitesController],
  providers: [SitesService],
  exports: [SitesService],
})
export class SitesModule {}
