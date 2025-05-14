import {Resolver, Query, Mutation, Args, Int, Context} from '@nestjs/graphql';
import {UseGuards} from "@nestjs/common";
import {ProductService} from './product.service';
import {Product} from './entities/product.entity';
import {CreateProductInput} from './dto/create-product.input';
import {UpdateProductInput} from './dto/update-product.input';
import {JwtAuthGuard} from "../auth/guards/jwt-auth/jwt-auth.guard";

@Resolver(() => Product)
export class ProductResolver {
    constructor(private readonly productService: ProductService) {
    }

    // @UseGuards(JwtAuthGuard)
    @Query(() => [Product], {name: 'products'})
    findAll(
        @Context() context,
        @Args('skip', {nullable: true}) skip?: number,
        @Args('take', {nullable: true}) take?: number,
        @Args('category', {nullable: true}) category?: string,
    ) {
        const user = context.req.user
        console.log({user})

        return this.productService.findAll({skip, take, category});
    }

    @Query(() => Int, {name: 'productCount'})
    count(
        @Args('category', {nullable: true}) category?: string,
    ) {
        return this.productService.count({category})
    }
}
