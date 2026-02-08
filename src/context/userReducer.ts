import type { RoleId, UserType } from "./type";

export type UserState = {
  users: UserType[];
};

type AddUserType = {
  type: "ADD_USER";
  payload: UserType;
};

type SetRoleType = {
  type: "SET_ROLE";
  payload: { userId: string; roleId: RoleId };
};

type ActionType = AddUserType | SetRoleType;

export const userReducer = (state: UserState, action: ActionType): UserState => {
  switch (action.type) {
    case "ADD_USER": {
      const user: UserType = action.payload;
      const updateUsers = [...state.users];
      updateUsers.push(user);
      return { users: updateUsers };
    }
    case "SET_ROLE": {
      const { userId, roleId } = action.payload;
      const updateUsers = [...state.users];

      const userIndex = updateUsers.findIndex((u) => u.id === userId);
      updateUsers[userIndex].roleId = roleId;

      return { users: updateUsers };
    }

    default:
      return state;
  }
};
