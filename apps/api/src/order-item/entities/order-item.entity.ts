import {ObjectType, Field, Int, Float} from '@nestjs/graphql';
import { Product } from '../../product/entities/product.entity';
import { Order } from '../../order/entities/order.entity';

@ObjectType()
export class OrderItem {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Float)
  price: number;

  @Field(() => Product)
  product: Product;

  @Field(() => Order)
  order: Order;
}
