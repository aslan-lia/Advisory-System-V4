import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './schemas/products.schema';
import { CreateProductDto } from './dto/create-products.dto';
import { SitesService } from '../sites/sites.service';
import { CustomersService } from '../customers/customers.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly sitesService: SitesService, 
    private readonly customersService: CustomersService,
  ) {}

  // src/products/products.service.ts
async createProduct(createProductDto: CreateProductDto): Promise<Product> {
  const { name, cpeName, siteId, customerName } = createProductDto;

  // Find the customer by name
  const customer = await this.customersService.findByFullName(customerName);
  if (!customer) {
    throw new Error('Customer not found');
  }

  // Confirm the site belongs to this customer
  const site = await this.sitesService.findById(siteId);
  if (!site || site.customer.id !== customer.id) {
    throw new Error('Site does not belong to the specified customer');
  }

  // Create and save the product with the verified site and customer
  const product = this.productRepository.create({
    name,
    cpeName,
    site,
    customer,
  });

  // Save the product and return the saved entity
  return this.productRepository.save(product);
}

}
