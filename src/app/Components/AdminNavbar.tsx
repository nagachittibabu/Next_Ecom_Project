
import Link from "../../../node_modules/next/link"

const AdminNavbar=()=>{
    return(
        <>
       <div className="flex flex-row justify-between ">
        <h1>Ecommerce Shop</h1>
        <h1>Welocome:Admin</h1>
        <Link href={"/api/auth/signout"}>Logout</Link>
       </div>
       </>
    )

}
export default AdminNavbar