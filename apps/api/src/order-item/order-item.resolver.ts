import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderItemService } from './order-item.service';
import { OrderItem } from './entities/order-item.entity';
import { CreateOrderItemInput } from './dto/create-order-item.input';
import { UpdateOrderItemInput } from './dto/update-order-item.input';

@Resolver(() => OrderItem)
export class OrderItemResolver {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Query(() => [OrderItem], { name: 'orderItems' })
  findAll() {
    return this.orderItemService.findAll();
  }
}
