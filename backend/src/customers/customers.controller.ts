// src/customers/customers.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customers.dto';
import { Customer } from './schemas/customers.schema';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async createCustomer(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.customersService.createCustomer(createCustomerDto);
  }

  @Get()
  async getAllCustomers(): Promise<Customer[]> {
  return this.customersService.findAll();
}
}
