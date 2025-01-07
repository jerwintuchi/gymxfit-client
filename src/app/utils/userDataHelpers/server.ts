"use server"
import { auth } from "@clerk/nextjs/server";


export async function getUserId() {
    const { userId } = await auth();
    if (!userId) {
        throw new Error("Unauthorized");
    }
    return userId;
};

export async function decodeJwtToken(token: string): Promise<CustomJwtSessionClaims | null> {
    try {
        return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString("utf-8")) as CustomJwtSessionClaims;
    } catch {
        return null;
    }
}

