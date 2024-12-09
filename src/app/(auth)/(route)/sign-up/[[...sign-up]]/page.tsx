import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl pb-6 text-[#ffffff]">
                <strong>Be part of the community</strong>
            </h1>
            <SignUp />
        </div>
    );
}

