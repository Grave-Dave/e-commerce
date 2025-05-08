import {ObjectType, Field, Int, Float} from '@nestjs/graphql';
import { Order } from '../../order/entities/order.entity';

@ObjectType()
export class Payment {
  @Field(() => Int)
  id: number;

  @Field(() => Float)
  amount: number;

  @Field()
  method: string; // e.g. 'credit_card', 'paypal'

  @Field()
  status: string; // e.g. 'paid', 'pending', 'failed'

  @Field(() => Date)
  paidAt: Date;

  @Field(() => Order)
  order: Order;
}
