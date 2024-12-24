"use client";

import SpinnerLoader from "@/components/mediaLoader";
import { SignUp, useAuth } from "@clerk/nextjs";

export default function SignInPage() {
    const { isLoaded } = useAuth();

    if (!isLoaded) {
        return (
            <div className="flex flex-col items-center min-h-screen justify-center">
                <SpinnerLoader src="/static/tube-spinner.svg" width={75} height={75} />
            </div>
        );
    }

    return (
        <div className="flex flex-col pb-12 items-center min-h-screen justify-center ">
            <h1 className="text-3xl pb-6 text-[#ffffff]">
                <strong>Be part of the community</strong>
            </h1>
            <SignUp /> {/* Directly render SignUp when isLoaded is true */}
        </div>
    );
}