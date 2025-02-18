
"use server"
import {signIn} from "../auth"
import DBConnect from "../../utils/config/db"
const LoginAction=async(LoginData)=>{
    await DBConnect()
    console.log("this is loginserver",LoginData);

    try {
       const response= await signIn('credentials',{
             name:LoginData.name,
             email:LoginData.email,
             redirect:false
       })
       return{success:true}
    } catch (error) {
        console.log("invalid credentials");
    }
}
export default LoginAction
