import {ObjectType, Field, Int} from '@nestjs/graphql';
import {Order} from '../../order/entities/order.entity';
import {Payment} from '../../payment/entities/payment.entity';

@ObjectType()
export class User {
    @Field(() => Int)
    id: number;

    @Field()
    email: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    phone: string;

    @Field({nullable: true})
    avatarUrl?: string;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;

    // Relations
    @Field(() => [Order], {nullable: 'itemsAndList'})
    orders?: Order[];

    @Field(() => [Payment], {nullable: 'itemsAndList'})
    payments?: Payment[];
}
