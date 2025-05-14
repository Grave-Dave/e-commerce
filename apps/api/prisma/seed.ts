import {PrismaClient} from "../generated/prisma";
import {faker} from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {

    //users
    const usersData = Array.from({length: 10}).map(() => ({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: faker.location.streetAddress()
    }))

    await prisma.user.createMany({
        data: usersData,
    })

    const users = await prisma.user.findMany();

    //categories
    const categoriesData = Array.from(['Food', 'Toys', 'Beds', 'Leashes']).map((name) => ({
        name,
    }))

    await prisma.category.createMany({
        data: categoriesData
    });

    const categories = await prisma.category.findMany();

    //products
    const productsData = Array.from({length: 40}).map(() => ({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price({min: 10, max: 500})),
        stock: faker.number.int({min: 5, max: 100}),
        categoryId: faker.helpers.arrayElement(categories).id,
    }))

    await prisma.product.createMany({
        data: productsData,
    })

    const products = await prisma.product.findMany();

    //orders & payments
    for (const user of users) {
        const selectedProducts = faker.helpers.arrayElements(products, faker.number.int({ min: 1, max: 3 }));

        let total = 0;

        const orderItems = selectedProducts.map((product) => {
            const quantity = faker.number.int({ min: 1, max: 5 });
            const price = product.price;
            total += price * quantity;

            return {
                product: { connect: { id: product.id } },
                quantity,
                price,
            };
        });

        const order = await prisma.order.create({
            data: {
                user: { connect: { id: user.id } },
                total,
                items: {
                    create: orderItems,
                },
            },
        });

        await prisma.payment.create({
            data: {
                order: { connect: { id: order.id } },
                amount: total,
                method: faker.helpers.arrayElement(['credit_card', 'paypal', 'bank_transfer']),
                status: faker.helpers.arrayElement(['paid', 'pending', 'failed']),
                paidAt: new Date(),
            },
        });
    }

    console.log('🌱 Seeded successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
