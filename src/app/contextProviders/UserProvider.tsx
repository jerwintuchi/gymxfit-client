import React, { createContext, useEffect, useState, useContext } from "react";
import { Role } from "@/lib/roles";
import { useUserDetails } from "../utils/userDataHelpers/client";

interface UserContextType {
    userId: string | null;
    role: Role[keyof Role] | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    profilePicture: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({
    children,
    initialUser = {
        userId: null,
        role: null,
        firstName: null,
        lastName: null,
        email: null,
        profilePicture: null,
    },
}: {
    children: React.ReactNode;
    initialUser?: UserContextType; // Made optional
}) => {
    const [user, setUser] = useState<UserContextType>(initialUser);

    const currentUser = useUserDetails(); // Fetch user details client-side

    useEffect(() => {
        if (currentUser) {
            setUser({
                userId: currentUser.id,
                role: currentUser.publicMetadata?.role as Role[keyof Role] || null,
                firstName: currentUser.firstName || "User",
                lastName: currentUser.lastName || null,
                email: currentUser.emailAddresses?.[0]?.emailAddress || null,
                profilePicture: currentUser.imageUrl || null,
            });
        }
    }, [currentUser]);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};
