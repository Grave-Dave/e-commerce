import { Injectable } from '@nestjs/common';
import { CreateOrderItemInput } from './dto/create-order-item.input';
import { UpdateOrderItemInput } from './dto/update-order-item.input';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class OrderItemService {

  constructor(private prisma: PrismaService) {
  }

  async findAll() {
    return await this.prisma.orderItem.createMany();
  }
}
