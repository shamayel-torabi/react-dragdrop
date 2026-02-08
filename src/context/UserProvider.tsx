import { useReducer, type PropsWithChildren } from "react"
import { UserContex, type UserContexType } from "./UserContex";
import { userReducer, type UserState } from "./userReducer";
import type { RoleId, UserType } from "./type";

const initialState: UserState = {
    users: [
        {
            id: "1",
            name: "شمایل",
            roleId: "USERS"
        },
        {
            id: "2",
            name: "سکینه",
            roleId: "USERS"
        }
    ]
}

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [state, dispach] = useReducer(userReducer, initialState);

    const setRole = (userId: string, roleId: RoleId) => {
        dispach({ type: "SET_ROLE", payload: { userId, roleId } });
    }

    const addUser = (name: string) => {
        const user: UserType = {
            id: crypto.randomUUID(),
            name: name,
            roleId: "USERS"
        }
        dispach({ type: "ADD_USER", payload: user });
    }

    const contextValue: UserContexType = {
        users: state.users,
        setRole,
        addUser
    }

    return (
        <UserContex value={contextValue}>{children}</UserContex>
    )
}