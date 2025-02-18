import DBConnect from "@/utils/config/db"
import { redirect } from "../../../node_modules/next/navigation";
import { auth } from "../auth";
import AddProduct from "../Components/AddProduct"
import AdminNavbar from "../Components/AdminNavbar"

const AdminPage=async()=>{ 
    await DBConnect();
    const session=await auth();
    if(!session){
        redirect("/Login")
    }
    return(
        <div className="w-full h-full">
        <AdminNavbar />   
        <AddProduct />     
        </div>
    )
}
export default AdminPage