'use client'
import Footer from "../ReusableComponents/Footer/page";
import Header from "../ReusableComponents/Header/page";
import ProductCard from "../ReusableComponents/ProductCard/page";
import ServiceCard from "../ReusableComponents/Services/page";
import { useItemContext } from "../contextAPI/ItemsProvider";
import ProductsPage from "../Products/page";
import { useEffect, useState } from "react";
import PageNavbar from "../ReusableComponents/PagesNavigation/page";
import CarouselComponent from "../ReusableComponents/carousel";
import { UseUserDetails } from "../contextAPI/UserDetails";
import Homecard from "../ReusableComponents/HomeCategory/page";

const Ecommerce = ({ username }: { username: String }) => {
    const { setUserDetails } = UseUserDetails()
    useEffect(() => {
        setUserDetails(username)
    }, [setUserDetails]);

    const [categoryName, setCategoryName] = useState("")
    const { product, error } = useItemContext();
    if (error) { return <div>Error fetching data: {error.message}</div>; }
    if (!product) { return <div>Loading...</div>; }
    const CategoryHandle = (category: string) => {
        setCategoryName(category);
        <ProductsPage value={categoryName} />
    }
    return (
        <div className="w-full px-0 mx-0">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full h-max fixed top-0 right-0 z-50 shadow mb-12">
                    <Header />
                </div>

                <div className="w-full  items-center body mt-14 px-0  mx-0 container ">
                    <div className="w-full ">
                        <PageNavbar />
                    </div>
                    <div className="w-[95%] flex items-center justify-center  ">
                        <CarouselComponent />
                    </div>
                    <div className="lg:px-12 md:px-10 sm:px-0">
                        <div className="w-full flex flex-wrap fontsmall">
                            <ServiceCard service={"Quality Product"} icon={"<i fa-solid fa-check"} />
                            <ServiceCard service={"Free Shipping"} icon={"fa fa-shipping-fast text-primary "} />
                            <ServiceCard service={"14-Days Return"} icon={"fas fa-exchange-alt text-primary m-0 "} />
                            <ServiceCard service={"24/7 Support"} icon={"fa fa-phone-volume text-primary m-0"} />
                        </div>
                        <div className="w-full flex flex-wrap bg-white gap-y-10 justify-center items-center p-4">
                            <div className="flex justify-center items-center h-2 m-10 w-full text-center">
                                <h1 className="text-4xl font-bold leading-loose">Categories</h1>
                            </div>
                            {product ? (
                                product.map((item: any,index:any) => {
                                    return (
                                        <div className="lg:w-1/3 md:w-1/2 sm:w-1/2 half flex flex-wrap justify-between  h-max " onClick={() => CategoryHandle(item.category_name)} key={index}>
                                            <Homecard category={item.category_name} imagepath={item.products[0].image} />
                                        </div>
                                    )
                                })
                            ) : <div><h1>Loading...</h1></div>}
                        </div>
                        <div className="w-full bg-white rounded-md shadow-md ">
                            <div className="flex justify-center items-center h-11 m-10 w-full text-center">
                                <h1 className="text-4xl font-bold leading-loose">Trendy Products</h1>
                            </div>
                            <div className="w-full h-[150vh] overflow-y-scroll mb-12">
                                {product.map((element:any,index:any) => {
                                    return (
                                        <div className="w-full flex flex-wrap justify-center items-center" key={index}>
                                            {element.products.map((e:any,i:any) => {
                                                return (
                                                    <div className="lg:w-1/3 lg:h-[650px] md:w-1/2 sm:w-1/2 half" key={i}>
                                                        <ProductCard imagepath={e.image} title={e.title} price={e.price} description={e.description} category={element.category_name} product_id={e.id} key={e.id} />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full ]">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Ecommerce