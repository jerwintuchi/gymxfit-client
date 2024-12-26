"use server"

import { auth, currentUser } from "@clerk/nextjs/server";

export const getUserId = async () => {
    const { userId } = await auth();
    if (!userId) {
        throw new Error("Unauthorized");
    }
    return userId;
};

export const getUserFromServer = async () => {
    const user = await currentUser()
    if(!user) {
        throw new Error("Cannot get user")
    }
    console.log("user from getUserFromServer()", user)
    return user
}
