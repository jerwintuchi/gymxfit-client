// context/UserProvider.tsx
import React, { createContext, useEffect, useContext, useReducer, Dispatch } from "react";
import { UserRole } from "@/lib/roles";
import { useUserDetails } from "../utils/userDataHelpers/client";
import axios from "axios";

const devUrl = process.env.NEXT_PUBLIC_BASE_URL_DEV;
export interface UserContextType {
    userId: string | null;
    role: UserRole | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    profilePicture: string | null;
    goal: string | null;
}

interface UserContextValue extends UserContextType {
    dispatch: Dispatch<Action>;
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

const UserContext = createContext<UserContextType | undefined>(undefined);

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
    initialUser = {
        userId: null,
        role: null,
        firstName: null,
        lastName: null,
        email: null,
        profilePicture: null,
        goal: null,
    },
}: {
    children: React.ReactNode;
    initialUser?: UserContextType;
}) => {
    const [user, dispatch] = useReducer(userReducer, initialUser);
    const currentUser = useUserDetails();

    useEffect(() => {
        const fetchGoal = async () => {
            if (currentUser?.id) {
                try {
                    const response = await axios.get(`${devUrl}/users/get/goal?userId=${currentUser.id}`);
                    const goal = response.data?.goal || "Setting goal";
                    dispatch({ type: "SET_GOAL", payload: { goal } });
                } catch (error) {
                    console.error("Error fetching user goal:", error);
                }
            }
        };

        if (currentUser) {
            dispatch({
                type: "SET_USER",
                payload: {
                    userId: currentUser.id,
                    role: currentUser.publicMetadata?.role as UserRole || null,
                    firstName: currentUser.firstName || "User",
                    lastName: currentUser.lastName || null,
                    email: currentUser.emailAddresses?.[0]?.emailAddress || null,
                    profilePicture: currentUser.imageUrl || null,
                },
            });

            fetchGoal();
        }
    }, [currentUser]);

    return <UserContext.Provider value={{ ...user, dispatch } as UserContextValue}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    const context = useContext(UserContext) as UserContextValue;
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};
