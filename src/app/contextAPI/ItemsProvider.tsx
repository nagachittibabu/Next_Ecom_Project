"use client";
import React, { useContext, useEffect, useState, createContext, ReactNode } from "react";
interface Product {
    id: string;
    category_name: string;
    products: Array<{
      id: string;
      title: string;
      price: number;
      description: string;
      image: string;
    }>;
  }
  
  interface ItemsContextValue {
    product: Product[];
    error: string;
  }
  
const ItemsContext = createContext<ItemsContextValue | undefined>(undefined);

interface ItemsProviderProps {
  children: ReactNode;
}

export default function ItemsProvider({ children }: ItemsProviderProps) {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState("");

    const fetchData = async () => {
        try {
            const products = await fetch(`http://localhost:3000/api/items`);
            const items = await products.json();
            let response = items.products;

            if (response) {
                setProduct(response);
            }
        } catch (error: any) {
            console.error("Error fetching dataaadsfasdf:", error.response ? error.response.data : error.message);
            setError(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ItemsContext.Provider value={{ product, error }}>
            {children}
        </ItemsContext.Provider>
    );
}

export const useItemContext = () => useContext(ItemsContext);   
