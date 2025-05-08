import {ObjectType, Field, Int, Float} from '@nestjs/graphql';
import { Category } from '../../category/entities/category.entity';
import { OrderItem } from '../../order-item/entities/order-item.entity';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  stock: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Category)
  category: Category;

  @Field(() => [OrderItem], { nullable: 'itemsAndList' })
  orderItems?: OrderItem[];
}
