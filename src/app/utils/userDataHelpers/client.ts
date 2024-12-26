import { useUser } from "@clerk/nextjs";

export const useUserDetails = () => {
    const { user } = useUser();
    
    if (!user) {
      return null; // Return null for easier handling
    }
    return user;
  };
