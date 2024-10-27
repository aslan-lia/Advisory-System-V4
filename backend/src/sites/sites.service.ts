// backend/src/sites/sites.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Site } from './schemas/sites.schema';
import { Customer } from '../customers/schemas/customers.schema';
import { CreateSiteDto } from './dto/create-sites.dto';

@Injectable()
export class SitesService {
  constructor(
    @InjectRepository(Site)
    private readonly siteRepository: Repository<Site>,
  ) {}

  async createSite(siteData: CreateSiteDto & { customer: Customer }): Promise<Site> {
    const site = this.siteRepository.create({ ...siteData, customer: siteData.customer });
    return this.siteRepository.save(site);
  }

  async findSitesByCustomerId(customerId: number): Promise<Site[]> {
    return this.siteRepository.find({ where: { customer: { id: customerId } } });
  }

  async findAllSites(customerId?: number): Promise<Site[]> {
    const query = this.siteRepository.createQueryBuilder('site').leftJoinAndSelect('site.customer', 'customer');
    if (customerId) {
      query.where('customer.id = :customerId', { customerId });
    }
    return query.getMany();
  }

  async findById(id: number): Promise<Site | null> {
    return this.siteRepository.findOne({
      where: { id },
      relations: ['customer'],  // Include the customer relation
    });
}
}
