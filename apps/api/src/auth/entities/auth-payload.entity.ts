import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class AuthPayload {
    @Field()
    id: number

    @Field()
    email: string

    @Field()
    firstName: string

    @Field()
    lastName: string

    @Field({ nullable: true })
    avatar: string;

    @Field()
    accessToken: string
}