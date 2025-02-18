import Image from "../../../../node_modules/next/image";
import offer1 from "../../../../public/img/offer1.png"
import offer2 from "../../../../public/img/offer2.png"
const Collectioncontent = () => {
    return (
        <div className="lg:flex lg:flex-row md:flex sm:flex md:flex-col md:gap-y-10 sm:flex-col sm:gap-y-10 w-full  h-max">
            <div className="flex justify-between items-center bg-slate-100 lg:w-1/2  md:w-full">
                <div >
                    <Image src={offer1} alt="image" className="w-full h-72 pt-6 "></Image>
                </div>
                <div className="mr-12">
                    <h1 className=" text-red-300 text-xl font-normal text-right mb-6"> 20% OF THE ALL ORDER</h1>
                    <h1 className=" font-bold text-4xl	text-right mb-6 ">Spring Collection</h1>
                    <button className="float-right text-red-300 text-base border-red-300 border-2  hover:bg-red-300 text-2xl hover:text-black py-2 px-4">Shop Now</button>
                </div>
            </div>
            <div className="flex justify-between items-center bg-slate-100 lg:w-1/2  md:w-full">
                <div className="ml-12">
                    <h1 className=" text-red-300 text-xl font-normal text-left mb-6"> 20% OF THE ALL ORDER</h1>
                    <h1 className=" font-bold text-4xl	text-left mb-6 ">Winter Collection</h1>
                    <button className="float-left text-red-300 text-base border-red-300 border-2  hover:bg-red-300 text-2xl hover:text-black py-2 px-4">Shop Now</button>
                </div>
                <div>
                    <Image src={offer2} alt="image" className="w-full h-72 pt-6"></Image>
                </div>
            </div>
        </div>
    )
}
export default Collectioncontent;