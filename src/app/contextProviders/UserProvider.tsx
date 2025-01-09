import React, { createContext, useEffect, useContext, useReducer, Dispatch, useState } from "react";

import { useUserDetails } from "../utils/userDataHelpers/client";

import { UserRole } from "../../../types/roles";
import { fetchUserGoal } from "../utils/userDataHelpers/server";


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

const defaultUser: UserContextType = {
    userId: null,
    role: null,
    firstName: null,
    lastName: null,
    email: null,
    profilePicture: null,
    goal: null,
};

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
    initialUser,
}: {
    children: React.ReactNode;
    initialUser?: UserContextType;
}) => {
    const [user, dispatch] = useReducer(userReducer, initialUser || defaultUser);
    const [loading, setLoading] = useState(false);
    const { currentUser, isSignedIn } = useUserDetails();

    useEffect(() => {
        const fetchUserData = async () => {
            if (!currentUser) { return; }


            try {
                dispatch({
                    type: "SET_USER",
                    payload: {
                        userId: currentUser.id,
                        role: (currentUser.publicMetadata?.role as UserRole) || null,
                        firstName: currentUser.firstName,
                        lastName: currentUser.lastName,
                        email: currentUser.emailAddresses[0].emailAddress,
                        profilePicture: currentUser.imageUrl,
                    },
                });

                const userGoal = await fetchUserGoal(currentUser.id);
                if (!userGoal) { return; }
                else {
                    dispatch({ type: "SET_GOAL", payload: { goal: userGoal || "No goal set" } });
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (isSignedIn && currentUser) {
            fetchUserData();
        }
        else {
            setLoading(true);
        }
    }, [currentUser, isSignedIn]);
    return <UserContext.Provider value={{ ...user, dispatch, loading }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};
