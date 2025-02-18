import DBConnect from "@/utils/config/db";
import { useEffect } from "react";
import { redirect } from "../../node_modules/next/navigation";
import AdminPage from "./admin/page";
import { auth } from "./auth";
import UserProvider from "./contextAPI/UserDetails";
import Header from "./ReusableComponents/Header/page";
import Ecommerce from "./WebApp/page";

export default async function Home() {
  const session = await auth()
  await DBConnect()
     
  if(!session) {
    redirect("/Login")
  }

  const username = session.name;
  const userrole = session.role;
  console.log(userrole);
  // useEffect(()=>)
  return (
    <>
    { userrole ==='user' && (
      <>
        <Ecommerce username={username}/>
        </>
    )
      }
      {userrole == 'admin' && (
        <AdminPage />
      ) }
    </>
  );
}
