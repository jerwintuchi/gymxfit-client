//global type for user roles 
export enum UserRole {
        ADMIN = "ADMIN",
        MANAGER = "MANAGER",
        USER = "USER",

};

export type RoleType = {
    type: UserRole
}