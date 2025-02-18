"use client"
import LoginForm from "@/app/Components/LoginForm";
import DBConnect from "@/utils/config/db";


const Login = async() => {
  await DBConnect()

     
    return (
        <>
        <LoginForm />
        </>
    )
}
export default Login