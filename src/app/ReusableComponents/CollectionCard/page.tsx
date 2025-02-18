//@ts-ignore
import Image from "next/image";
import offer1 from "../../../../public/img/offer1.png"
import MailContent from "../CardComponents/MailCard";
const CollectionCard = ({ imagepath, text, paragraph }) => {
    return (
        <div>
        <div className=" bg-slate-100 border-2ws w-6/12  ">
            <div className="flex justify-between py-5 px-5 mb-8 flex-items center pb-0 pl-0 ">
                <div>
                <Image src={offer1} alt="image"></Image>
                </div>
                <div className="pt-12">
                    <h1 className="mb-3 text-red-300 text-2xl font-semibold text-right  p-4">{text} 20% OF THE ALL ORDER</h1>
                    <h1 className="mb-4 font-semibold text-6xl text-right   p-2">{paragraph}Spring Collection</h1>
        
                    <button  className=" text-red-300  border-red-300 border-2 py-5 px-5 float-right  p-4 mt-4 w-1/3 hover:bg-red-300 text-2xl hover:text-black ">Shop Now</button>
                </div>
            </div>
        </div>
            <div>
            <MailContent />

            </div>
        </div>
    )
}
export default CollectionCard;




