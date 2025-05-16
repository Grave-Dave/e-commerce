import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {
  }
  async findAll() {
    return await this.prisma.order.findMany();
  }
}
