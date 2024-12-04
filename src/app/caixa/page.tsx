"use client";

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"



const products = {
    cafetaria: [
        { id: 1, name: 'Café', price: .60, image: 'https://i.em.com.br/6L8tTUsN-zLZoXMm1AFXfJmS1cg=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/10/03/1570587/ilustracao_1_17925.jpg' },
    ],
    bebidas: [
        { id: 3, name: 'Coca Cola', price: 1, image: 'https://maissabor.pt/cdn/shop/products/3200000216_COCA-COLA_LATA_33CL_1f1313f6-ef7c-4df0-ad1f-48058002b580_1024x1024@2x.jpg' },
        { id: 4, name: '7Up', price: 1, image: 'https://maissabor.pt/cdn/shop/products/3200000707_SEVEN-UP-LATA-33CL_95fc48ef-67ab-4aac-8c85-68e1551fc249_1024x1024@2x.png?v=1612805448' },
        { id: 12, name: 'Água', price: 1, image: 'https://static.staples.pt/resources/medias/shop/products/thumbnails/shop-image-342/shop-607629--1.jpg' },
    ],
    comida: [
        { id: 5, name: 'Hambúrguer', price: 5, image: 'https://cdn.awsli.com.br/2500x2500/2744/2744742/produto/269001231/foto-hamb-rguer-qfk004osha.png' },
        { id: 6, name: 'Pizza', price: 8, image: 'https://donnapizzeria.pt/wp-content/uploads/2022/05/pizza-1.png' },
        { id:13, name: 'Cachorro Quente', price: 3, image: 'https://as2.ftcdn.net/v2/jpg/04/53/95/99/1000_F_453959932_r16ZZ64l1DRtRVZbqUDLDeJpZ5u4Mm38.jpg'},
        { id: 17, name: 'Tosta Mista', price: 2, image: 'https://i.pinimg.com/736x/15/14/6a/15146a52e2f8c784d239191c0d30dd11.jpg' }
    ],
    snack: [
        { id: 7, name: 'Batata Frita', price: 1, image: 'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw926dc0dd/images/col/737/7379477-hero.png' },  
        { id: 8, name: 'Amendoim', price: .20, image: 'https://i.ibb.co/JqJJPQn/DALL-E-2024-12-03-16-53-18-A-hyper-realistic-image-of-a-small-saucer-with-shelled-peanuts-on-a-rusti.webp' },
        { id: 19, name: 'Croissant Chocolate Un', price: 0.6, image: 'https://s2.minipreco.pt/medias/hf0/hd9/8996564664350.jpg' }
    ],
    bebidasAlcoolicas: [
        { id: 9, name: 'Cerveja', price: 1, image: 'https://www.madeinmarket.eu/cdn/shop/products/6876536_cerveja-com-alcool-mini-super-bock-20cl_550.png' },
        { id: 11, name: 'Martini', price: 0.8, image: 'https://www.gourmetencasa-tcm.com/19675-thickbox_default/martini-rosso-6cl.jpg' },
        { id: 10, name: 'Martini c/Cerveja', price: 1.5, image: 'https://i.ibb.co/1m7h7mQ/DALL-E-2024-12-03-16-45-01-A-hyper-realistic-image-of-a-tall-glass-of-beer-with-a-frothy-head-placed.webp' },
        { id: 15, name: 'Porto', price: 1, image: 'https://e-dega.com/feghozyw/2020/04/calice-viticole-215ml-vinho-do-porto-e-licorosos.jpg' },
        { id: 20, name: 'Whisky', price: 2, image: 'https://www.ecopack.pt/WebRoot/Store/Shops/3699-200805/5F45/4C81/49F4/E576/B9D3/25E6/6498/24DC/M711-PC-Copo_Plastico_WHISKY_INQUEBRAVEL-slide1_ml.jpg'}
    ],
};

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const CaixaPage: React.FC = () => {
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [receivedAmount, setReceivedAmount] = useState<number>(0);
    const [showAddMoney, setShowAddMoney] = useState<boolean>(false);

    const addProduct = (product: Product) => {
        setSelectedProducts([...selectedProducts, product]);
    };

    const removeProduct = (productId: number) => {
        const index = selectedProducts.findIndex(p => p.id === productId);
        if (index !== -1) {
            const newSelectedProducts = [...selectedProducts];  
            newSelectedProducts.splice(index, 1);
            setSelectedProducts(newSelectedProducts);
        }
    };  

    const getTotal = () => {
        return selectedProducts.reduce((total, product) => total + product.price, 0).toFixed(2);
    };

    const handleCheckout = () => {
        if (selectedProducts.length === 0) {
            toast.warning("A lista de compras está vazia!");
            
            return;
        }
        toast("Compra concluída!");
        setSelectedProducts([]);
        setShowAddMoney(false);
        setReceivedAmount(0);
    };

    const groupedProducts = selectedProducts.reduce((acc: { [key: number]: { product: Product, quantity: number } }, product) => {
        if (acc[product.id]) {
            acc[product.id].quantity += 1;
        } else {
            acc[product.id] = { product, quantity: 1 };
        }
        return acc;
    }, {});

    const handleAddMoney = (value: number) => {
        setReceivedAmount(receivedAmount + value);
    };

    const getChange = () => {
        return (receivedAmount - parseFloat(getTotal())).toFixed(2);
    };

    const resetReceivedAmount = () => {
        setReceivedAmount(0);
    };

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
            <div className="p-4"></div>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">
                            Bar
                        </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                        <BreadcrumbPage>Caixa</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                    </Breadcrumb>
                </div>
                </header>
                <div className="flex items-start py-4 p-5 flex-col-reverse sm:flex-row">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    {(Object.keys(products) as (keyof typeof products)[]).map((category) => (
                    <div key={category} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                        <div className="flex flex-wrap">
                        {products[category].map((product: Product) => (
                            <Card key={product.id} className="m-2 p-4 w-40 bg-white shadow-lg rounded-lg flex flex-col items-center">
                            <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-md mb-2" />
                            <h3 className="text-lg font-medium text-center">{product.name}</h3>
                            <p className="text-gray-600 text-center">{product.price.toFixed(2)}€</p>
                            <Button variant="default" className="mt-auto w-full" onClick={() => addProduct(product)}>Adicionar</Button>
                            </Card>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>

                <div className="w-80 ml-5 p-5 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Lista de Compras</h2>
                    <ul>
                    {Object.values(groupedProducts).map(({ product, quantity }) => (
                        <li key={product.id} className="flex justify-between items-center mb-2">
                        <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded-md mr-2" />
                        <div className="flex-1">
                            <span className="block font-medium">{product.name} <strong>x{quantity}</strong></span>
                            <span className="text-gray-600">{product.price.toFixed(2)}€</span>
                        </div>
                        <Button variant="destructive" onClick={() => removeProduct(product.id)}>Remover</Button>
                        </li>
                    ))}
                    </ul>
                    <h3 className="text-xl font-semibold mt-4">Total: {getTotal()}€</h3>
                    {receivedAmount > 0 && (
                    <>
                        <h3 className="text-ms mt-4 text-gray-900">Recebido: <strong>{receivedAmount.toFixed(2)}€</strong></h3>
                        <h3 className={`text-ms ${parseFloat(getChange()) < 0 ? 'text-red-500' : 'text-gray-900'}`}>Troco: <strong>{getChange()}€</strong></h3>
                    </>
                    )}
                    <Button variant="default" className="mt-4 w-full" onClick={handleCheckout}>Concluir Compra</Button>
                    <Toaster />
                    <Button variant="outline" className="mb-4 w-full my-5" onClick={() => setShowAddMoney(!showAddMoney)}>
                    {showAddMoney ? 'Esconder' : 'Gerar Troco'}
                    </Button>
                    {showAddMoney && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Adicionar Dinheiro</h2>
                        <div className="flex flex-wrap gap-2">
                        {[50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01].map((value) => (
                            <Button
                            key={value}
                            variant="default"
                            onClick={() => handleAddMoney(value)}
                            >
                            {value.toFixed(2)}€
                            </Button>
                        ))}
                        </div>
                        <Button variant="destructive" className="mt-4 w-full" onClick={resetReceivedAmount}>Resetar Dinheiro</Button>
                    </div>
                    )}
                </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default CaixaPage;

