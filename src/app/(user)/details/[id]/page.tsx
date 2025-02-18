"use client"
import { useCartContext } from "@/app/contextAPI/cartProvider";
import { useItemContext } from "@/app/contextAPI/ItemsProvider";
import Footer from "@/app/ReusableComponents/Footer/page";
import Header from "@/app/ReusableComponents/Header/page";
import PageNavbar from "@/app/ReusableComponents/PagesNavigation/page";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BookingAction from "../../../serveractions/BookingAction"


  const ShopDetails = ({searchParams} ) => {
    const [description,setdescription] =useState(true);
    const [information,setInformation] =useState(false);
    const [reviews,setReviews] =useState(false);
    const { product, error } = useItemContext();
    const [color,setColor]=useState(null);
    const [size,setSize]=useState(null);
    const router = useRouter();

    let selectedProd=[];

  if (product && product.length > 0) {
    selectedProd = product.filter(
      (ele) => ele.category_name == searchParams.category).flatMap((e) =>
      e.products.filter((element) => element.id == searchParams.product_id)
    );
  }       
    
    let [productCount,setProductCount] =useState(1)   

    const increment=()=>{
        if(productCount < 10){
            setProductCount(productCount+1)
        }
    }
    const decrement=()=>{
        if(productCount>1){
            setProductCount(productCount-1)
    }
    }
    let [cartText, setCartText] = useState("ADD TO CART");
    console.log("selectedProd",selectedProd,searchParams);
    if(selectedProd.length > 0){
    selectedProd[0].size=size;
    selectedProd[0].quantity=productCount;
    selectedProd[0].color=color;
    }
    const CartHandling = async() => {
        try {
            const response=await fetch('http://localhost:3000/utils/models/Booking')
            console.log(response);
            
        } catch (error) {
            console.log(error);            
        }
        if(size && color && productCount){
        try {
           const response= await BookingAction(selectedProd);
            
        } catch (error) {
            console.log("error fetching product" ,error);
            
        }
            if(cartText =="ADD TO CART"){
                
                setCartText("GO TO CART");                
            }
            else {
                router.push("/Cart")
            }
        }
        else{
            alert("Please select size/color/quantity")
        }
    
      };
      const ProductDescr=()=>{
        setdescription(true)
        setInformation(false)
        setReviews(false)
      }
      const ProductInfo=()=>{
        setdescription(false)
         setInformation(true)
         setReviews(false)
      }
      const ProductReviews=()=>{
        setdescription(false)
         setInformation(false)
         setReviews(true)
      }
    return (
        <div>
            <Header />
            <div className="">
            <PageNavbar  />
            </div>
            <div className="  w-full  h-[550px]">
                {selectedProd.map((ele:any)=>{
                    return(
                <div className="flex w-full float-right pt-8  h-full justify-center"  key={ele.id}>
                    <div className="w-1/2 flex justify-center">
                                <img src={ele.image} alt="image" className="w-1/2 h-full"></img>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-3xl font-bold">{ele.title}</h1>
                        <div>
                            <div className="flex pt-4">
                                <i className="fas fa-star text-red-300"></i>
                                <i className="fas fa-star text-red-300"></i>
                                <i className="fas fa-star text-red-300"></i>
                                <i className="fas fa-star-half-alt  text-red-300"></i>
                                <i className="far fa-star text-red-300"></i>
                                <i className="pt-0 ml-2">(50 Reviews)</i>
                            </div>
                            <h1 className="text-2xl font-bold pt-4">${ele.price}</h1>
                            <p className="pt-4">{ele.description}</p>
                            <div className="flex pt-4">
                                <p className="text-lg  font-bold">Sizes:</p>
                                <div className="ml-4 pt-1">
                                    <input type="radio" id="size-2" name="size" value="S" onChange={(e)=>setSize(e.target.value)}></input>
                                    <label className="ml-2">S</label>
                                </div>
                                <div className="ml-4 pt-1">
                                    <input type="radio" id="size-3" name="size" value="M"  onChange={(e)=>setSize(e.target.value)}></input>
                                    <label className="ml-2">M</label>
                                </div>
                                <div className="ml-4 pt-1">
                                    <input type="radio" id="size-4" name="size" value="L"  onChange={(e)=>setSize(e.target.value)}></input>
                                    <label className="ml-2">XL</label>
                                </div>
                                <div className="ml-4 pt-1">
                                    <input type="radio" id="size-5" name="size" value="XL"  onChange={(e)=>setSize(e.target.value)}></input>
                                    <label className="ml-2">XL</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex pt-4">
                            <p className="text-lg font-bold">Colors:</p>
                            <div className="ml-4 pt-1">
                                <input type="radio" id="color-1" name="color" value="Black" onChange={(e)=>setColor(e.target.value)} />
                                <label className="ml-2">Black</label>
                            </div>
                            <div className="ml-4 pt-1">
                                <input type="radio" id="color-2" name="color" value="White" onChange={(e)=>setColor(e.target.value)} />
                                <label className="ml-2">White</label>
                            </div>
                        </div>
                        <div>
                            <div className="pt-8 flex">
                                <button className="bg-red-300 border2ws w-1/12 h-9"  onClick={()=>decrement()}>
                                    <i className="fa fa-minus hover:text-white"></i>
                                </button>
                                <input type="text" value={productCount} className=" bg-indigo-50 border2ws text-center w-1/12 h-9 focus:outline-transparent" onChange={()=>""}></input>
                                <button className="bg-red-300 border2ws w-1/12 h-9" onClick={()=>increment()}>
                                    <i className="fa fa-plus hover:text-white" ></i>
                                </button>
                                <button className="bg-red-300 border2ws w-1/5 h-9 hover:text-white ml-4"  onClick={CartHandling} >
                                    <div className="fa fa-shopping-cart mr-1" >
                                    {cartText}
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex pt-6">
                            <h1 className="lg font-semibold">Share on:</h1>
                            <div>
                                <a href=""><i className="fab fa-facebook-f ml-4"></i></a>
                                <a href=""><i className="fab fa-twitter ml-4"></i></a>
                                <a href=""><i className="fab fa-linkedin-in ml-4"></i></a>
                                <a href=""><i className="fab fa-pinterest ml-4"></i></a>
                            </div>
                        </div>
                    </div>  
                </div>   
                        )
                    })}           
            </div>
           
            <div className="w-full flex justify-center space-x-20 pt-8">
                <button className={`hover:border border-b-0 ${description ? 'text-red-500' : ''}`} onClick={() => ProductDescr()}>Description</button>
                <button className={`ml-8 border ${information ? 'text-red-500' : ''}`} onClick={() => ProductInfo()}>Information</button>
                <button className={`ml-8 border ${reviews ? 'text-red-500' : ''}`} onClick={() => ProductReviews()}>Reviews(0)</button>
            </div>
            {description && (
            <div className="ml-14 mr-14 p-6 border">
                <h1 className="text-2xl font-semibold text-b"> Product Description </h1>
                <p className="pt-4">Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                <p className="pt-4">Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
            </div>  
                )}
                {information && (
                    <div className="ml-14 mr-14 p-6 border">
                    <h1 className="text-2xl font-semibold "> Product information </h1>
                    <p className="pt-4">Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                    <p className="pt-4">Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                </div>  
                )}
                {reviews && (
                    <div className="ml-14 mr-14 p-6 border">
                    <h1 className="text-2xl font-semibold "> Product Reviews </h1>
                    <p className="pt-4">Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                    <p className="pt-4">Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                </div>  
                )}
            <Footer />
        </div>
    )
}

export default ShopDetails