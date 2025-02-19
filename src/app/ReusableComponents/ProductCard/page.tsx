"use client";
import { useItemContext } from "@/app/contextAPI/ItemsProvider";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BookingAction from "@/app/serveractions/BookingAction";

interface ProductCardProps {
  imagepath: string;
  product_id: string;
  title: string;
  price: number;
  description: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imagepath,
  product_id,
  title,
  price,
  description,
  category,
}) => {
  const { product, error } = useItemContext();
  let [cartText, setCartText] = useState("ADD TO CART");
  const router = useRouter();

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  if (!product) {
    return <div>Loading...</div>;
  }

  let selectedProd = [];

  if (product && product.length > 0) {
    selectedProd = product
      .filter((ele) => ele.category_name == category)
      .flatMap((e) => e.products.filter((element) => element.id == product_id));
  }

  if (selectedProd.length > 0) {
    selectedProd[0].size = "S";
    selectedProd[0].quantity = "1";
    selectedProd[0].color = "Black";
  }

  const CartHandling = async () => {
    try {
      const response = await fetch("http://localhost:3000/utils/models/Booking");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await BookingAction(selectedProd);
      if (response) {
        alert("Item added successfully to cart");
      }
    } catch (error) {
      console.log("error fetching product", error);
    }
    if (cartText === "ADD TO CART") {
      setCartText("GO TO CART");
    } else {
      router.push("/Cart");
    }
  };

  return (
    <div className="lg:w-full md:w-full sm:w-full h-[600px] flex justify-center items-center mb-6">
      <div className="w-full h-full border-5 shadow-md lg:px-12 md:px-6 sm:px-12 border rounded-lg bg-white mx-4">
        <Link
          href={{
            pathname: `/details/${1}`,
            query: { category, product_id },
          }}
        >
          <div className="w-full flex justify-center py-8 h-[350px]">
            <img
              src={imagepath}
              alt="pic"
              className="w-3/4 h-full duration-300 hover:scale-110 rounded-lg"
            />
          </div>
        </Link>
        <div className="w-full h-[180px] text-center text-base font-semibold">
          <h1 className="p-3 border-b border-b-2 text-center">{title}</h1>
          <h2 className="p-3 border-b border-b-2">
            ${price}
            <del className="pl-2 border-b border-b-2"></del>
          </h2>
          <div>
            <p className="text-center text-sm">{description}</p>
          </div>
        </div>

        <div className="w-full h-[50px] flex justify-between xl:text-base lg:text-md md:text-sm">
          <button className="hover:text-red-300 rounded-lg border p-3">
            <Link
              href={{
                pathname: `/details/${1}`,
                query: { category, product_id },
              }}
            >
              <i className="fa-solid fa-eye text-red-300"></i>View Details
            </Link>
          </button>
          <button
            className="hover:text-red-300 border p-3"
            onClick={CartHandling}
          >
            <i className="fa-solid fa-cart-shopping text-red-300"></i>
            {cartText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
