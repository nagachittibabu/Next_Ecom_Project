"use client"
import { useItemContext } from "@/app/contextAPI/ItemsProvider";
import { useEffect, useState } from "react";
import Link from "next/link";
import { UseUserDetails } from "@/app/contextAPI/UserDetails";

export default function Header() {
    const [data, setData] = useState([]);
    const [quantity, setquantity] = useState(0)
    const [searchInput, setSearchInput] = useState("");
    const { product, error } = useItemContext();
    if (error) { return <div>Error fetching data: {error.message}</div>; }
    if (!product) { return <div>Loading...</div>; }
    const { userDetails } = UseUserDetails(); 
    const UserFetch = async () => {
        try {
            let response = await fetch("http://localhost:3000/api/users/1");
            let result = await response.json();
            setData([result.data]);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        UserFetch()
    }, [searchInput])
    const findProducts = (searchInput, product) => {
        const lowerSearchInput = searchInput.toLowerCase();
        const filteredProducts = [];
        if (searchInput) {
            product.forEach(category => {
                category.products.forEach(eachProduct => {
                    if (lowerSearchInput.split("").every(char => eachProduct.title.toLowerCase().includes(char))) {
                        eachProduct.category = category.category_name
                        filteredProducts.push(eachProduct);
                    }
                });
            });
        }
        return filteredProducts;
    };
    const result = findProducts(searchInput, product);
    useEffect(() => {
        data.map(ele => (
            setquantity(ele.bookings.length)
        )
        )
    }, [data])
    return (
        <div className="w-full bg-white border-b sticky top-0 right-0 z-50   widthfull ">
                <div className="w-full flex   lg:justify-between lg:items-center md:justify-between md:items-center sm:justify-between sm:items-center  lg:px-12 md:px-12 sm:px-16  between ">
                    <div className="flex items-center  pt-2">
                        <Link href="/">
                            <h1 className="lg:text-2xl md:text-3xl sm:text-xl lg:font-bold md:font-semibold sm:font-semibold ">
                                <span className="text-red-300 font-bold border border-grey-300 px-4 py-2 lg:text-3xl md:text-3xl sm:text-x">Ecom</span>Plus
                            </h1>
                        </Link>
                    </div>
                    <div className="flex items-center lg:w-5/12 md:w-1/3 sm:w-1/2 border relative">
                        <input
                            type="text"
                            className="pl-1 pr-4 py-2 w-full"
                            placeholder="Search for products"
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <i className="fa-solid fa-magnifying-glass py-3 px-3 text-red-300"></i>
                        {searchInput && (
                            <ul className="absolute left-0 top-full w-full bg-white border border-t-0 max-h-60 overflow-y-scroll z-10">
                                {result.length > 0 ? (
                                    result.map((item, index) => (
                                        <Link href={{
                                            pathname: `/details//${1} `,
                                            query: { category: item.category, product_id: item.id }
                                        }}  key={index} >
                                            <li className="p-2 hover:bg-gray-100 cursor-pointer bg-white ">
                                                {item.title}
                                            </li>
                                        </Link>

                                    ))
                                ) : (
                                    <li className="p-2 text-gray-500">No products found</li>
                                )}
                            </ul>
                        )}
                    </div>
                    <div className="flex items-center lg:order-2">
                        <div className="lg:text-2xl lg:semibold hide">{userDetails}</div>
                        <Link href="/Components/Wishlist">
                            <div className="border border-grey-300 m-2 lg:block hide">
                                <i className="fa-solid fa-heart text-red-300 p-3"></i><span className="pr-2">0</span>
                            </div>
                        </Link>
                        <Link href="/Cart">
                            <div className="border border-grey-300 m-2 lg:block ">
                                <i className="fa-solid fa-cart-shopping text-red-300 p-3"></i><span className="pr-2">{quantity}</span>
                            </div>
                        </Link>
                    </div>
                </div>
        </div>
    );
}
