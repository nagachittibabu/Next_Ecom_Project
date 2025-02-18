"use client"
import { useItemContext } from "@/app/contextAPI/ItemsProvider"
import Footer from "@/app/ReusableComponents/Footer/page"
import Header from "@/app/ReusableComponents/Header/page"
import PageNavbar from "@/app/ReusableComponents/PagesNavigation/page"
import ProductCard from "@/app/ReusableComponents/ProductCard/page"

const ShopPage = () => {
    const { product, error } = useItemContext();
    if (error) { return <div>Error fetching data: {error.message}</div>; }
    if (!product) { return <div>Loading...</div>; }

    return (
        <div>
            <Header />
            <PageNavbar />
            <div className=" w-full ">
                    <div className="">
                        {product.map(element => {
                            return (
                                <div className="flex flex-wrap w-full">
                                    {element.products.map(e => {
                                        return (
                                            <div className="w-1/3">
                                                <ProductCard imagepath={e.image} title={e.producttitle} price={e.price} description={e.description} category={e.category_name} product_id={e.id}/>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            )
                        })}
                    </div>
            </div>
            <Footer />
        </div>
    )
}
export default ShopPage