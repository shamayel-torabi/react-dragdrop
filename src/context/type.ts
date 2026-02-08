export type RoleId = "USERS" | "ADMINS";

export type Role = { 
  id:  RoleId,
  name: string 
};

export type UserType = {
  id: string;
  name: string;
  roleId: RoleId;
};
