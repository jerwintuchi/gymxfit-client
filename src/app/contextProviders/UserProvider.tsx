// context/UserProvider.tsx
import React, { createContext, useEffect, useContext, useReducer, Dispatch } from "react";
import { UserRole } from "../../../types/roles";
import { useAuth } from "@clerk/nextjs";

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

// Reducer to handle state updates
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
        fullName: null,
        email: null,
        profilePicture: null,
        goal: null,
    },
}: {
    children: React.ReactNode;
    initialUser?: UserContextType;
}) => {
    const [user, dispatch] = useReducer(userReducer, initialUser);
    const { getToken } = useAuth();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = await getToken();
            if (!token) return;

            // Parse the token to extract user data
            try {
                const decodedToken: CustomJwtSessionClaims = JSON.parse(atob(token.split(".")[1]));
                /*console.log("user id : ", decodedToken.id)
                console.log("user role : ", decodedToken.role)
                console.log("user fullName : ", decodedToken.fullName)
                console.log("user email : ", decodedToken.email)
                console.log("user image url : ", decodedToken.profilePicture)*/
                // Dispatch the user data to the context
                dispatch({
                    type: "SET_USER",
                    payload: {
                        userId: decodedToken.id,
                        role: decodedToken.role as UserRole || null,
                        fullName: decodedToken.fullName,
                        email: decodedToken.email || null,
                        profilePicture: decodedToken.profilePicture || null,
                    },
                });

                // Fetch the user goal if available
                if (decodedToken.id) {
                    try {
                        const response = await fetch(`${devUrl}/users/get/goal?userId=${decodedToken.id}`, {
                            headers: {
                                "Authorization": `Bearer ${token}`,
                            },
                        });
                        if (!response.ok) {
                            throw new Error("Failed to fetch user goal");
                        }
                        const data = await response.json();
                        const goal = data?.goal || "Setting goal";
                        console.log(" user goal : ", goal);
                        dispatch({ type: "SET_GOAL", payload: { goal } });
                    } catch (error) {
                        console.error("Error fetching user goal:", error);
                    }
                }
            } catch (error) {
                console.error("Error decoding JWT token:", error);
            }
        };


        fetchUserData();
    }, [getToken]);

    return <UserContext.Provider value={{ ...user, dispatch }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    const context = useContext(UserContext) as UserContextValue;
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};
