"use client"
import React from "react";
import { useItemContext } from "../contextAPI/ItemsProvider";
import Footer from "../ReusableComponents/Footer/page";
import Header from "../ReusableComponents/Header/page";
import PageNavbar from "../ReusableComponents/PagesNavigation/page";
import ProductCard from "../ReusableComponents/ProductCard/page";

export default function ProductsPage({ searchParams }: {
    searchParams: {
        category: string;
    }
}) {
    const { product, error } = useItemContext();
    if (error) { return <div>Error fetching data:{error.message}</div>; }
    if (!product) { return <div>Loading...</div>; }
    let productData = product.filter((ele: any) => ele.category_name === searchParams.category).map((ele: any) => ele.products).flat();


    return (
        <>
            <Header />
            <div className="py-2">
            <PageNavbar  />
            </div>
            <div className="w-full flex flex-wrap">
                {productData.map((e: any) => {
                    return (
                        <div className="lg:w-1/3 md:w-1/2 sm:w-full">
                            <ProductCard imagepath={e.image} title={e.title} product_id={e.id} price={e.price} description={e.description} category={searchParams.category} />
                        </div>
                    )
                })

                }
            </div>
            <Footer />

        </>
    )
}