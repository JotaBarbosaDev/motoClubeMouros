"use client";

import * as React from "react";
import {
    SidebarTrigger,
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Card, CardBody, CardFooter, Image, Button, Alert } from "@heroui/react";
import { Tabs, Tab } from "@heroui/tabs";

interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
}

export default function heroBar() {
    const list1 = Array.from({ length: 8 }, (_, index) => ({
        title: `Produto ${index}`,
        img: `https://loremflickr.com/200/200?random=${index}`,
        price: "5.50€",
    }));

    const list2 = Array.from({ length: 13 }, (_, index) => ({
        title: `Produto ${index}`,
        img: `https://loremflickr.com/200/200?random=${index}`,
        price: "5.50€",
    }));

    const list3 = Array.from({ length: 21 }, (_, index) => ({
        title: `Produto ${index}`,
        img: `https://loremflickr.com/200/200?random=${index}`,
        price: "5.50€",
    }));

    const [showAddMoney, setShowAddMoney] = React.useState(false);

    // Cart state where key is the product id.
    const [cart, setCart] = React.useState<
        Record<string, { product: Product; quantity: number }>
    >({});

    const [receivedAmount, setReceivedAmount] = React.useState(0);

    // Sums the value of the cart.
    const getTotal = () =>
        Object.values(cart).reduce(
            (total, { product, quantity }) => total + product.price * quantity,
            0
        );

    const getChange = () => receivedAmount - getTotal();

    // Adds a product to the cart. If it already exists, increments its quantity.
    const handleAddProduct = (product: Product) => {
        setCart((prev) => {
            if (prev[product.id]) {
                return {
                    ...prev,
                    [product.id]: { product, quantity: prev[product.id].quantity + 1 },
                };
            }
            return { ...prev, [product.id]: { product, quantity: 1 } };
        });
    };

    // Remove a product (decrements quantity or removes the entry)
    const removeProduct = (id: string) => {
        setCart((prev) => {
            const newCart = { ...prev };
            if (newCart[id]) {
                if (newCart[id].quantity > 1) {
                    newCart[id].quantity -= 1;
                } else {
                    delete newCart[id];
                }
            }
            return newCart;
        });
    };

    const handleCheckout = () => {
        console.log("Checkout pressed");
    };

    const handleAddMoney = (value: number) => {
        setReceivedAmount((prev) => prev + value);
        console.log("Add money", value);
    };

    const resetReceivedAmount = () => {
        setReceivedAmount(0);
        console.log("Reset amount");
    };

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <div className="p-4">
                    <header className="flex h-16 shrink-0 items-center gap-2">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                        </div>
                    </header>

                    <div className="flex gap-8 mt-4">
                        {/* Coluna da esquerda: Tabs e cards */}
                        <div className="flex-1">
                            <Tabs aria-label="Options">
                                <Tab key="photos" title="Cafetaria">
                                    <Card>
                                        <CardBody>
                                            <div className="flex flex-row gap-4 flex-wrap">
                                                {list1.map((item, index) => {
                                                    const product: Product = {
                                                        id: `cafetaria-${index}`,
                                                        name: item.title,
                                                        image: item.img,
                                                        price: parseFloat(item.price.replace("€", "")),
                                                    };
                                                    return (
                                                        <Card
                                                            key={product.id}
                                                            isPressable
                                                            shadow="sm"
                                                            onPress={() => handleAddProduct(product)}
                                                        >
                                                            <CardBody className="overflow-visible p-0">
                                                                <Image
                                                                    alt={item.title}
                                                                    className="w-full object-cover h-[140px]"
                                                                    radius="lg"
                                                                    shadow="sm"
                                                                    src={item.img}
                                                                    width="100%"
                                                                />
                                                            </CardBody>
                                                            <CardFooter className="text-small justify-between">
                                                                <b>{item.title}</b>
                                                                <p className="text-default-500">{item.price}</p>
                                                            </CardFooter>
                                                        </Card>
                                                    );
                                                })}
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Tab>
                                <Tab key="music" title="Bebidas">
                                    <Card>
                                        <CardBody>
                                            <div className="flex flex-row gap-4 flex-wrap">
                                                {list2.map((item, index) => {
                                                    const product: Product = {
                                                        id: `bebidas-${index}`,
                                                        name: item.title,
                                                        image: item.img,
                                                        price: parseFloat(item.price.replace("€", "")),
                                                    };
                                                    return (
                                                        <Card
                                                            key={product.id}
                                                            isPressable
                                                            shadow="sm"
                                                            onPress={() => handleAddProduct(product)}
                                                        >
                                                            <CardBody className="overflow-visible p-0">
                                                                <Image
                                                                    alt={item.title}
                                                                    className="w-full object-cover h-[140px]"
                                                                    radius="lg"
                                                                    shadow="sm"
                                                                    src={item.img}
                                                                    width="100%"
                                                                />
                                                            </CardBody>
                                                            <CardFooter className="text-small justify-between">
                                                                <b>{item.title}</b>
                                                                <p className="text-default-500">{item.price}</p>
                                                            </CardFooter>
                                                        </Card>
                                                    );
                                                })}
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Tab>
                                <Tab key="videos" title="Comida">
                                    <Card>
                                        <CardBody>
                                            <div className="flex flex-row gap-4 flex-wrap">
                                                {list3.map((item, index) => {
                                                    const product: Product = {
                                                        id: `comida-${index}`,
                                                        name: item.title,
                                                        image: item.img,
                                                        price: parseFloat(item.price.replace("€", "")),
                                                    };
                                                    return (
                                                        <Card
                                                            key={product.id}
                                                            isPressable
                                                            shadow="sm"
                                                            onPress={() => handleAddProduct(product)}
                                                        >
                                                            <CardBody className="overflow-visible p-0">
                                                                <Image
                                                                    alt={item.title}
                                                                    className="w-full object-cover h-[140px]"
                                                                    radius="lg"
                                                                    shadow="sm"
                                                                    src={item.img}
                                                                    width="100%"
                                                                />
                                                            </CardBody>
                                                            <CardFooter className="text-small justify-between">
                                                                <b>{item.title}</b>
                                                                <p className="text-default-500">{item.price}</p>
                                                            </CardFooter>
                                                        </Card>
                                                    );
                                                })}
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Tab>
                            </Tabs>
                        </div>

                        {/* Coluna da direita: Lista de Compras */}
                        <div className="w-80 h-full p-5 bg-white shadow-lg rounded-lg">
                            <h2 className="text-2xl font-semibold mb-4">Lista de Compragfjjgs</h2>
                            <ul>
                                {Object.values(cart).map(({ product, quantity }) => (
                                    <li
                                        key={product.id}
                                        className="flex justify-between items-center mb-2"
                                    >
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            className="w-10 h-10 object-cover rounded-md mr-2"
                                        />
                                        <div className="flex-1">
                                            <span className="block font-medium">
                                                {product.name} <strong>x{quantity}</strong>
                                            </span>
                                            <span className="text-gray-600">
                                                {(product.price * quantity).toFixed(2)}€
                                            </span>
                                        </div>
                                        <Button
                                            color="danger"
                                            onPress={() => removeProduct(product.id)}
                                        >
                                            Remover
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="text-xl font-semibold mt-4">
                                Total: {getTotal().toFixed(2)}€
                            </h3>
                            {receivedAmount > 0 && (
                                <>
                                    <h3 className="text-ms mt-4 text-gray-900">
                                        Recebido: <strong>{receivedAmount.toFixed(2)}€</strong>
                                    </h3>
                                    <h3
                                        className={`text-ms ${
                                            getChange() < 0 ? "text-red-500" : "text-gray-900"
                                        }`}
                                    >
                                        Troco: <strong>{getChange()}€</strong>
                                    </h3>
                                </>
                            )}
                            <Button
                                color="default"
                                className="mt-4 w-full"
                                onPress={handleCheckout}
                            >
                                Concluir Compra
                            </Button>

                            <Button
                                variant="bordered"
                                className="mb-4 w-full my-5"
                                onPress={() => setShowAddMoney(!showAddMoney)}
                            >
                                {showAddMoney ? "Esconder" : "Gerar Troco"}
                            </Button>
                            {showAddMoney && (
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4">
                                        Adicionar Dinheiro
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {[50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01].map(
                                            (value) => (
                                                <Button
                                                    key={value}
                                                    color="default"
                                                    onPress={() => handleAddMoney(value)}
                                                >
                                                    {value.toFixed(2)}€
                                                </Button>
                                            )
                                        )}
                                    </div>
                                    <Button
                                        color="danger"
                                        className="mt-4 w-full"
                                        onPress={resetReceivedAmount}
                                    >
                                        Resetar Dinheiro
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
