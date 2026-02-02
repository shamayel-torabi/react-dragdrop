import { createContext } from "react"
import type { UserType } from "./user"

export type UserContexType = {
    users: UserType[],
    setRole: (userId: string, role: string) => void;
}

export const UserContex = createContext<UserContexType>({
    users:[],
    setRole: ()=>{}
})

