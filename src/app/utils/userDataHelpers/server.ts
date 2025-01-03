"use server"

import { UserContextType } from "@/app/contextProviders/UserProvider";
import { auth, currentUser } from "@clerk/nextjs/server";

export const getUserId = async () => {
    const { userId } = await auth();
    if (!userId) {
        throw new Error("Unauthorized");
    }
    return userId;
};

export const getUserFromServer = async (): Promise<UserContextType> => {
    const user = await currentUser()
    if(!user) {
        throw new Error("Cannot get user")
    }
    console.log("user from getUserFromServer()", user) 
    return {
        userId: user.id,
        role: user.publicMetadata.role,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.emailAddresses[0].emailAddress,
        profilePicture: user.imageUrl
    } as UserContextType
}/* cherry picked type from the User interface from clerk since I only want these fields for the UserContext*/

