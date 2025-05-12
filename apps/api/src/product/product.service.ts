import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {DEFAULT_PAGE_COUNT} from "../constants";

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {
    }

    async findAll(
        {
            skip = 0,
            take = DEFAULT_PAGE_COUNT
        }: {
            skip?: number,
            take?: number
        }) {
        return await this.prisma.product.findMany({
            skip,
            take,
            include: {
                category: true,
            },
        });
    }

    async count() {
        return await this.prisma.product.count()
    }
}
