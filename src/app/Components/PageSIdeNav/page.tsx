'use client'
import { useItemContext } from '@/app/contextAPI/ItemsProvider';
import React, { useState } from 'react';
import Link from '../../../../node_modules/next/link';
const SideNav: React.FC = () => {
    const [isMainCollapsed, setIsMainCollapsed] = useState<boolean>(false);

    const toggleMainCollapse = () => {
        setIsMainCollapsed(!isMainCollapsed);
    };
    const { product, error } = useItemContext();
    if (error) { return <div>Error fetching data: {error.message}</div>; }
    if (!product) { return <div>Loading...</div>; }
    return (
        <div className='lg:w-full md:w-3/4 sm:w-min  bg-white h-16 lg:text-lg md:text-base sm:text-sm"'>
            <div className='w-full relative pt-2 '>
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        toggleMainCollapse();
                    }}
                    className="relative w-full "
                >
                    <h1 className="bg-red-300 border w-full h-16 flex items-center justify-between lg:pl-8 md:pl-6 sm:pl-2">
                        Categories
                        <i className={`fa-solid fa-angle-down float-right pr-8 ${isMainCollapsed ? 'rotate-180 pl-8' : ""}`}></i>
                    </h1>
                </div>
                {isMainCollapsed && (
                    <ul className=" absolute left-0 top-full w-full  bg-white border border-t-0 h-max  z-10 ">
                        {product.map((ele: any) => (
                            <Link href={{
                                pathname: "/Products",
                                query: { category: ele.category_name }
                            }}>
                                <li className="p-2 hover:text-red-300 cursor-pointer  lg:text-lg md:text-base sm:text-sm">
                                    {ele.category_name}
                                </li>
                            </Link>
                        )
                        )}
                    </ul>
                )}
            </div>

        </div>
    );
};

export default SideNav;