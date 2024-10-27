import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Site } from '../../sites/schemas/sites.schema';
import { Customer } from '../../customers/schemas/customers.schema';



@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cpeName: string;

  @ManyToOne(() => Site, (site) => site.products, { nullable: false })
  site: Site;

  @ManyToOne(() => Customer, (customer) => customer.sites, { nullable: false })
  customer: Customer;
}
