import { SubmitHandler } from "react-hook-form"
export interface IUser{
    id:string
    name:string
    surname:string
    login:string
    password:string
    isPrivate:boolean
    cover:string
    picture:string
}
export type InputUser=Omit<IUser, "id"|"isPrivate"|"cover"|"picture">
export interface IResponce{
    status:string
    message?:string
    payload?:unknown
}
export interface ILoginUser{
    login:string
    password:string
}
const onSubmit: SubmitHandler<InputUser> = (data) => {
}

