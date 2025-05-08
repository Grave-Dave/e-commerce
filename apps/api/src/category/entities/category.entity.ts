import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from '../../product/entities/product.entity';

@ObjectType()
export class Category {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Product], { nullable: 'itemsAndList' })
  products?: Product[];
}
