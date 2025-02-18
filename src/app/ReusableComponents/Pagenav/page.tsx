import { UseUserDetails } from "@/app/contextAPI/UserDetails";
import Link from "../../../../node_modules/next/link";

export function PageNav() {
    const { userDetails } = UseUserDetails();
    return (
        <nav className=" w-full h-full  flex justify-between items-center z-0 lg:text-lg md:text-base sm:text-sm ">
            <div className='z-0 w-3/4 flex justify-start items-center h-full'>
                <ul className="flex space-x-8  items-center justify-center ">
                    <li>
                        <Link href="/" className="hover:text-red-300 focus:text-red-300">Home</Link>
                    </li>
                    <li>
                        <Link href="/Components/Shop" className="hover:text-red-300">Shop</Link>
                    </li>
                    <li>
                        <Link href="/Cart" className="hover:text-red-300 "> Cart</Link>
                    </li>
                </ul>
            </div>
            {!userDetails ? (
                <div className="w-1/4">
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/Login" className="hover:text-red-300">Login</Link>
                        </li>
                        <li>
                            <Link href="/Register" className="hover:text-red-300">Register</Link>
                        </li>
                    </ul>
                </div>) : (<div className="flex gap-10"><Link href={"/api/auth/signout"}>Log out</Link></div>)
            }

        </nav>
    )
}