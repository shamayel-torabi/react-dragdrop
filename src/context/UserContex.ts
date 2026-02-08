import { createContext } from "react"
import type { RoleId, UserType } from "./type"

export type UserContexType = {
    users: UserType[],
    setRole: (userId: string, roleId: RoleId ) => void;
    addUser: (name: string) => void;
}

export const UserContex = createContext<UserContexType>({
    users:[],
    setRole: ()=>{},
    addUser: ()=>{}
})

