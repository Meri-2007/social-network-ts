import { ReactNode } from "react"
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
    user?:IWideUser
}

export interface ILoginUser{
    login:string
    password:string
}
const onSubmit: SubmitHandler<InputUser> = (data) => {
}
const onLogin: SubmitHandler<InputUser> = (data) => {
}
export interface IWideUser extends IUser{
    followers:IUser[]
    following:IUser[]
}
export interface IContextType{
    account:IWideUser
    setAccount:(user:IWideUser)=>void
}
export interface IPasswordUpdate {
    currentPassword: string;
    newPassword: string;
  }

  export interface ILoginUpdate {
    currentPassword: string;
    newLogin: string;
  }