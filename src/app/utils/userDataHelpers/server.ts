"use server"

import { devUrl } from "@/lib/global-variables";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";



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

export async function fetchUserGoal(userId: string): Promise<string | null> {
    if (!userId) {
        throw new Error("Unauthorized");
    }
    try {
        const { data } = await axios.get(`${devUrl}/users/get/goal`, { params: { userId } });
        return data.goal || "No goal set";
    } catch (error) {
        console.error("Error fetching user goal:", error);
        throw new Error("Failed to fetch user goal");
    }
    }


