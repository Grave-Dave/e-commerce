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
            take = DEFAULT_PAGE_COUNT,
            category = ''
        }: {
            skip?: number,
            take?: number
            category?: string
        }) {
        switch (category) {
            case 'Accessories': {
                return await this.prisma.product.findMany({
                    skip,
                    take,
                    where: {
                        OR: [
                            {category: {name: "Beds"}},
                            {category: {name: "Leashes"}},
                        ],
                    },
                    include: {
                        category: true,
                    },
                });
            }
            default: {
                return await this.prisma.product.findMany({
                    skip,
                    take,
                    where: {
                        category: category ? {name: category} : undefined,
                    },
                    include: {
                        category: true,
                    },
                });
            }
        }
    }

    async count(
        {
            category
        }: {
            category?: string
        }) {
        switch (category) {
            case 'Accessories': {
                return await this.prisma.product.count({
                    where: {
                        OR: [
                            {category: {name: "Beds"}},
                            {category: {name: "Leashes"}},
                        ],
                    }
                });
            }
            default: {
                return await this.prisma.product.count({
                    where: {
                        category: category ? {name: category} : undefined,
                    },
                })
            }
        }
    }
}
