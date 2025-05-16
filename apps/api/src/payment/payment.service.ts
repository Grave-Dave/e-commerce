import { Injectable } from '@nestjs/common';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {
  }

  async findAll() {
    return await this.prisma.payment.createMany();
  }
}
