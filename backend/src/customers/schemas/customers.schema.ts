import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Site } from '../../sites/schemas/sites.schema';
import { IsOptional } from 'class-validator';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  company: string;

  @Column()
  @IsOptional()
  phoneNumber: string;

  // Define the relationship with Site
  @OneToMany(() => Site, (site) => site.customer)
  sites: Site[];
}
