import { UserContextType } from "../contextProviders/UserProvider";

export const defaultUserState: UserContextType = {
    userId: null,
    role: null,
    firstName: null,
    lastName: null,
    email: null,
    profilePicture: null,
    goal: null,
};
