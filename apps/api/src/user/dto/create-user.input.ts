import {IsEmail} from "class-validator";
import {InputType, Int, Field} from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    password: string;

    @Field()
    @IsEmail()
    email: string;

    @Field()
    phone: string;

    @Field()
    address: string

    @Field({ nullable: true })
    avatar?: string;
}
