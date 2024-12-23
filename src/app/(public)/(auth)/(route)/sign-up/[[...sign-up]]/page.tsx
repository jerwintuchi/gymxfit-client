"use client";

import SpinnerLoader from "@/components/spinnerLoader";
import { SignUp, useAuth } from "@clerk/nextjs";

export default function SignInPage() {
    const { isLoaded } = useAuth();

    if (!isLoaded) {
        return (
            <div className="flex flex-col items-center h-full justify-center">
                <SpinnerLoader src="/tube-spinner.svg" width={75} height={75} />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center h-full justify-center">
            <h1 className="text-3xl pb-6 text-[#ffffff]">
                <strong>Be part of the community</strong>
            </h1>
            <SignUp /> {/* Directly render SignUp when isLoaded is true */}
        </div>
    );
}