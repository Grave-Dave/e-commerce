import {join} from 'node:path';

import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PrismaModule} from './prisma/prisma.module';
import {ProductModule} from './product/product.module';
import {UserModule} from './user/user.module';
import {CategoryModule} from './category/category.module';
import {OrderModule} from './order/order.module';
import {OrderItemModule} from './order-item/order-item.module';
import {PaymentModule} from './payment/payment.module';
import {AuthModule} from './auth/auth.module';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), "src/graphql/schema.gql")
        }),
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        PrismaModule,
        ProductModule,
        UserModule,
        CategoryModule,
        OrderModule,
        OrderItemModule,
        PaymentModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
