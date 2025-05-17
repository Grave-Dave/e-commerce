import {IsString, MinLength} from "class-validator";
import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class SignInInput {
    @Field()
    email: string

    @Field()
    @IsString()
    @MinLength(1)
    password: string
}
