import React, { createContext, useEffect, useContext, useReducer, Dispatch, useState } from "react";
import { UserRole } from "../../../types/roles";
import { useAuth } from "@clerk/nextjs";
import { decodeJwtToken } from "../utils/userDataHelpers/server";
import { defaultUserState } from "../utils/objects";

const devUrl = process.env.NEXT_PUBLIC_BASE_URL_DEV;

export interface UserContextType {
    userId: string | null;
    role: UserRole | null;
    fullName: string | null;
    email: string | null;
    profilePicture: string | null;
    goal: string | null;
}

interface UserContextValue extends UserContextType {
    dispatch: Dispatch<Action>;
    loading: boolean;
}

// Action Types
interface SetUserAction {
    type: "SET_USER";
    payload: Partial<UserContextType>;
}

interface SetGoalAction {
    type: "SET_GOAL";
    payload: { goal: string };
}

type Action = SetUserAction | SetGoalAction;

// Create Context
const UserContext = createContext<UserContextValue | undefined>(undefined);

const userReducer = (state: UserContextType, action: Action): UserContextType => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, ...action.payload };
        case "SET_GOAL":
            return { ...state, goal: action.payload.goal };
        default:
            return state;
    }
};

export const UserProvider = ({
    children,
    initialUser = defaultUserState,
}: {
    children: React.ReactNode;
    initialUser?: UserContextType;
}) => {
    const [user, dispatch] = useReducer(userReducer, initialUser || defaultUserState);
    const { getToken, isSignedIn } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            const token = await getToken();
            if (!token || !isSignedIn) {
                console.log("User is not signed in or auth state is not loaded");
                setLoading(false);
                return;
            }

            try {
                const decodedToken = await decodeJwtToken(token);
                if (!decodedToken || !decodedToken.id) throw new Error("Invalid token structure.");

                dispatch({
                    type: "SET_USER",
                    payload: {
                        userId: decodedToken.id,
                        role: (decodedToken.role as UserRole) || null,
                        fullName: decodedToken.fullName,
                        email: decodedToken.email || null,
                        profilePicture: decodedToken.profilePicture || null,
                    },
                });

                const response = await fetch(`${devUrl}/users/get/goal?userId=${decodedToken.id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!response.ok) throw new Error("Failed to fetch user goal");

                const data = await response.json();
                const goal = data?.goal || "Setting goal";
                dispatch({ type: "SET_GOAL", payload: { goal } });
            } catch (error) {
                console.error("Error fetching user data or goal:", error);
            } finally {
                setLoading(false);
            }
        };

        if (isSignedIn) {
            fetchUserData();
        }
    }, [getToken, isSignedIn]);

    return <UserContext.Provider value={{ ...user, dispatch, loading }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};
