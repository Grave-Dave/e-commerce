import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import {PrismaService} from "../prisma/prisma.service";

@Module({
  providers: [OrderResolver, OrderService, PrismaService],
})
export class OrderModule {}
