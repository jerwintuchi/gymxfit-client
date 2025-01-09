import { useUser } from "@clerk/nextjs";

export const useUserDetails = () => {
  const { user, isSignedIn } = useUser();
  return {
      currentUser: user || null,
      isSignedIn: !!isSignedIn,
  };
};

  