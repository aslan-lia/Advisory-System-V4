// app.module.ts
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module'; // Import only DatabaseModule
import { CustomersModule } from './customers/customers.module';
import { SitesModule } from './sites/sites.module';
import { ProductsModule } from './products/products.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    DatabaseModule,  // Database connection managed in DatabaseModule
    CustomersModule,
    SitesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
