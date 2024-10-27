// backend/src/sites/sites.controller.ts
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-sites.dto';
import { CustomersService } from '../customers/customers.service';

@Controller('sites')
export class SitesController {
  constructor(
    private readonly sitesService: SitesService,
    private readonly customersService: CustomersService,
  ) {}

  @Post()
  async createSite(@Body() createSiteDto: CreateSiteDto) {
    const { customerId, ...siteData } = createSiteDto;

    // Find the customer by full name
    const customer = await this.customersService.findById(customerId);
    if (!customer) {
      throw new Error('Customer not found');
    }

    // Pass the found customer along with the site data to be saved
    return this.sitesService.createSite({ ...siteData, customer, customerId });
  }

  @Get()
  async getSites(@Query('customerId') customerId?: string) {
    const customerIdNumber = customerId ? parseInt(customerId, 10) : undefined;
    return this.sitesService.findAllSites(customerIdNumber);
  }
}