import axios from "axios";
import { ILoginUser, InputUser, IResponce } from "./types";

const Axios = axios.create({
    baseURL: "http://localhost:4002",
    withCredentials: true//cookineri hamar
})
export const handleSignup = async (user: InputUser): Promise<IResponce> => {
    const response = await Axios.post("/signup", user)
    return response.data
}
export const handleLogin = async (user: ILoginUser): Promise<IResponce> => {
    const response = await Axios.post("/login", user)
    return response.data
}
export const handleVerify = async (): Promise<IResponce> => {
    const response = await Axios.get("/verify")
    return response.data
}
export const handlePasswordChange = async (data: { currentPassword: string; newPassword: string }): Promise<IResponce> => {
    const response = await Axios.patch("/update/password", data);
    return response.data;
}

export const handleLoginChange = async (data: { newLogin: string; password: string }): Promise<IResponce> => {
    const response = await Axios.patch("/update/login", data);
    return response.data;
}
export const handlePictureUpload = async (data: FormData): Promise<IResponce> => {
    const responce = await Axios.patch("/profile/upload", data)
    return responce.data
}
export const handleCoverUpload=async(data:FormData):Promise<IResponce>=>{
    const responce=await Axios.patch("/cover/upload",data)
    return responce.data
}
export const handleLogOut=async():Promise<IResponce>=>{
    const responce=await Axios.post("/logout")
    return responce.data
}