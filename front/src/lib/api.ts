import axios from "axios";
import { ILoginUser, InputUser, IResponce } from "./types";

const Axios=axios.create({
    baseURL:"http://localhost:4002"
})
export const handleSignup=async(user:InputUser):Promise<IResponce>=>{
    const response=  await Axios.post("/signup",user)
    return response.data
}
export const handleLogin=async(user:ILoginUser):Promise<IResponce>=>{
    const response=await Axios.post("/login",user)
    return response.data
}
