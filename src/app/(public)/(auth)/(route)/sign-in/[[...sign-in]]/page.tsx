"use client";

import SpinnerLoader from "@/components/mediaLoader";
import { SignIn, useAuth } from "@clerk/nextjs";

export default function SignInPage() {
    const { isLoaded } = useAuth()

    if (!isLoaded) {
        return (
            <div className="flex flex-col items-center min-h-screen justify-center">
                <SpinnerLoader src="/static/tube-spinner.svg" width={75} height={75} />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center min-h-screen justify-center no-scroll">
            <h1 className="text-3xl pb-6 text-[#ffffff]">
                <strong>Hello there!</strong>
            </h1>
            {<SignIn />} {/* Only render SignIn when not loading */}
        </div>
    );
}