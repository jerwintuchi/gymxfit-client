import { UserContextType } from "../contextProviders/UserProvider";

export const defaultUserState: UserContextType = {
    userId: null,
    role: null,
    fullName: null,
    email: null,
    profilePicture: null,
    goal: null,
};