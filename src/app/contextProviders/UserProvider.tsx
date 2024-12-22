import React, { createContext, useEffect, useState, useContext } from "react";
import { Role } from "@/lib/roles";
import { useUserDetails } from "../utils/userData.ts/client";

interface UserContextType {
    userId: string | null;
    role: Role[keyof Role] | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [userId, setUserId] = useState<string | null>(null);
    const [role, setRole] = useState<Role[keyof Role] | null>(null);
    const currentUser = useUserDetails(); // Client-side hook for fetching user details

    useEffect(() => {
        if (currentUser && currentUser.id) {
            setUserId(currentUser.id);  // Assuming `userId` comes from user data
            setRole(currentUser.publicMetadata?.role as Role[keyof Role] || null); // Safely accessing role
        }
    }, [currentUser]);

    return (
        <UserContext.Provider value={{ userId, role }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};
