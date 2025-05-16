import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import NavContainer from "@/components/NavContainer";
import Navbar from "@/components/Navbar";
import {CartProvider} from "@/lib/CartContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Pet E-shop",
    description: "Dawid Grabarz Hobby full-stack app",
};

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <CartProvider>
            <NavContainer>
                <Navbar/>
            </NavContainer>
            {children}
        </CartProvider>
        </body>
        </html>
    );
}
