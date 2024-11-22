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
        { id: 1, name: 'Café', price: .65, image: 'https://i.em.com.br/6L8tTUsN-zLZoXMm1AFXfJmS1cg=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/10/03/1570587/ilustracao_1_17925.jpg' },
        { id: 2, name: 'Pão de Deus', price: 2, image: 'https://europastry.com/pt/wp-content/uploads/sites/6/2023/03/image-removebg-preview-73.png' },
        {id: 11, name: 'Pastel de Nata', price: 1, image: 'https://www.panidor.pt/zArchives/Products/131/Photos/pastel_nata_fre_ref155098%20copy.png'},
        {id: 16, name: 'Croissant', price: 1.5, image: 'https://www.delifrance.com/media/catalog/product/cache/ed41ce533cfbede5bade0f10745f47a1/1/9/19477_1.jpg'}
    ],
    bebidas: [
        { id: 3, name: 'Coca Cola', price: 2, image: 'https://maissabor.pt/cdn/shop/products/3200000216_COCA-COLA_LATA_33CL_1f1313f6-ef7c-4df0-ad1f-48058002b580_1024x1024@2x.jpg' },
        { id: 4, name: 'Suco de Laranja', price: 3, image: 'https://pt.rc-cdn.community.thermomix.com/recipeimage/31fg2kvg-79bae-258946-d2857-nj3hy0rw/ef53e9e1-72d2-4ea8-9310-d47efd3b038b/main/sumo-revigorante-de-laranja-manga-e-cenoura-com-espinafres.png' },
        { id: 12, name: 'Água', price: 1, image: 'https://static.staples.pt/resources/medias/shop/products/thumbnails/shop-image-342/shop-607629--1.jpg' },
        { id: 18, name: 'Ice Tea', price: 1.5, image: 'https://tomas.ltd/wp-content/uploads/2023/11/0003871_ice-tea-lipton-pessego-lata-33cl_550.jpeg' }
    ],
    comida: [
        { id: 5, name: 'Hambúrguer', price: 5, image: 'https://cdn.awsli.com.br/2500x2500/2744/2744742/produto/269001231/foto-hamb-rguer-qfk004osha.png' },
        { id: 6, name: 'Pizza', price: 8, image: 'https://donnapizzeria.pt/wp-content/uploads/2022/05/pizza-1.png' },
        { id:13, name: 'Cachorro Quente', price: 3, image: 'https://as2.ftcdn.net/v2/jpg/04/53/95/99/1000_F_453959932_r16ZZ64l1DRtRVZbqUDLDeJpZ5u4Mm38.jpg'},
        { id: 17, name: 'Tosta Mista', price: 2, image: 'https://i.pinimg.com/736x/15/14/6a/15146a52e2f8c784d239191c0d30dd11.jpg' }
    ],
    snack: [
        { id: 7, name: 'Batata Frita', price: 2, image: 'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw926dc0dd/images/col/737/7379477-hero.png' },  
        { id: 8, name: 'Amendoim', price: 1, image: 'https://img.freepik.com/fotos-premium/uma-pilha-de-amendoins-com-a-palavra-amendoim-ao-lado_667286-791.jpg' },
        { id: 14, name: 'Bolachas', price: 1, image: 'https://i0.wp.com/www.ateti.pt/loja/wp-content/uploads/2021/03/Bolacha_Digestiva_Vieira_12un._Ate_Ti.jpg' },
        { id: 19, name: 'Pipocas', price: 1.5, image: 'https://static6.depositphotos.com/1008244/609/v/600/depositphotos_6097085-stock-illustration-popcorn-in-a-striped-tub.jpg' }
    ],
    bebidasAlcoolicas: [
        { id: 9, name: 'Cerveja', price: 1.5, image: 'https://www.madeinmarket.eu/cdn/shop/products/6876536_cerveja-com-alcool-mini-super-bock-20cl_550.png' },
        { id: 10, name: 'Vinho', price: 3, image: 'https://brilato.pt/image/cache/catalog/RIEDEL2013/RIEDEL_2017/6416-60-riedel-vinum-port-brilato-600x800.png' },
        { id: 15, name: 'Gin', price: 5, image: 'https://cdn.tescoma.com/content/images/product/copo-de-gin-tonic-charlie-640-ml_147406.jpg' },
        { id: 20, name: 'Whisky', price: 8, image: 'https://www.ecopack.pt/WebRoot/Store/Shops/3699-200805/5F45/4C81/49F4/E576/B9D3/25E6/6498/24DC/M711-PC-Copo_Plastico_WHISKY_INQUEBRAVEL-slide1_ml.jpg'}
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
            toast.error("A lista de compras está vazia!");
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

