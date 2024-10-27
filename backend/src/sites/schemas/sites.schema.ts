import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Customer } from '../../customers/schemas/customers.schema';
import { Product } from '../../products/schemas/products.schema';

@Entity()
export class Site {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  siteAddress: string;

  @Column()
  city: string;

  @Column({nullable: true})
  state: string;

  @Column({nullable: true})
  zipCode: string;

  @Column()
  country: string;

  @ManyToOne(() => Customer, (customer) => customer.sites)
  customer: Customer;

  // Define the relationship with Product
  @OneToMany(() => Product, (product) => product.site)
  products: Product[];
}
