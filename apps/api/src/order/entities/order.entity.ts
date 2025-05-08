import {ObjectType, Field, Int, Float} from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { OrderItem } from '../../order-item/entities/order-item.entity';
import { Payment } from '../../payment/entities/payment.entity';

@ObjectType()
export class Order {
  @Field(() => Int)
  id: number;

  @Field(() => Float)
  total: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => User)
  user: User;

  @Field(() => [OrderItem], { nullable: 'itemsAndList' })
  items?: OrderItem[];

  @Field(() => Payment, { nullable: true })
  payment?: Payment;
}
