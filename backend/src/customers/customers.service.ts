// src/customers/customers.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './schemas/customers.schema';
import { CreateCustomerDto } from './dto/create-customers.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(customer);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async findByFullName(fullName: string): Promise<Customer | null> {
    return await this.customerRepository.findOne({ where: { fullName } });
  }

  async findById(id: number): Promise<Customer | null> {
    return this.customerRepository.findOne({ where: { id } });
  }

}
