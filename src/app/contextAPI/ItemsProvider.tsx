"use client";
import React, { useContext, useEffect, useState, createContext } from "react";

const ItemsContext = createContext("");

export default function ItemsProvider({ children }: any) {
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
