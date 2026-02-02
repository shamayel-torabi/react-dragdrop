import { useReducer, type PropsWithChildren } from "react"
import { UserContex, type UserContexType } from "./UserContex";
import { userReducer, type UserState } from "./userReducer";


const initialState: UserState = {
    users: [
        {
            id: "1",
            name: "Shamayel"
        },
        {
            id: "2",
            name: "Sakineh"
        }

    ]
}

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [state, dispach] = useReducer(userReducer, initialState);

    const setRole = (userId: string, role: string) => {
        dispach({ type: "setRole", payload: { userId,  role}});
    }

    const contextValue: UserContexType = {
        users: state.users,
        setRole
    }

    return (
        <UserContex value={contextValue}>{children}</UserContex>
    )
}