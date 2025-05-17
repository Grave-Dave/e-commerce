export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
    category: Category;
    orderItems?: OrderItem[];
}

export type User = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
    orders?: Order[];
    payments?: Payment[];
}

export type Category = {
    id: number;
    name: string;
    products?: Product[];
}

export type Order = {
    id: number;
    total: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    items?: OrderItem[];
    payment?: Payment;
}

export type OrderItem = {
    id: number;
    quantity: number;
    price: number;
    product: Product;
    order: Order;
}

export type Payment = {
    id: number;
    amount: number;
    method: string;
    status: string;
    paidAt: Date;
    order: Order;
}
