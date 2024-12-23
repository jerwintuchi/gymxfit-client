import React from "react";
import Image from "next/image"; // Import Image component
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TfiViewListAlt } from "react-icons/tfi";
import { GoGoal } from "react-icons/go";
import { RiUserCommunityFill } from "react-icons/ri";

const LandingPage = () => {
    return (
        <div className="pt-[70px] bg-black text-white overflow-hidden"> {/* Added overflow-hidden */}
            {/* Hero Section */}
            <section className="relative h-[calc(100vh-70px)] flex flex-col justify-center items-center bg-[url('/hero-image.jpg')] bg-cover bg-center"> {/* Replace the image dynamically */}
                <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
                <div className="flex flex-col items-center relative z-10 text-center">
                    <Image src={"/mainlogo-nobg.png"} height={300} width={300} alt={"Gymxfit Logo"} />
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">Empower Your Fitness Journey</h1>
                    <p className="text-lg md:text-xl mb-8">The all-in-one fitness app for tracking workouts, monitoring progress, and staying motivated.</p>
                    <Link href="/sign-up">
                        <Button className="bg-white text-black py-3 px-6 rounded-md font-medium hover:bg-gray-200 transition duration-300">
                            Start Now
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-900">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <TfiViewListAlt size={64} className="mx-auto mb-4" /> {/*Workouts Icon */}
                        <h2 className="text-2xl font-semibold mb-2">Track Your Workouts</h2>
                        <p className="text-gray-300">Easily log your exercises, sets, reps, and track your progress over time.</p>
                    </div>
                    <div className="text-center">
                        <GoGoal size={64} className="mx-auto mb-4" /> {/* Goals Icon */}
                        <h2 className="text-2xl font-semibold mb-2">Stay Motivated</h2>
                        <p className="text-gray-300">Set goals, track your achievements, and stay motivated on your fitness journey.</p>
                    </div>
                    <div className="text-center">
                        <RiUserCommunityFill size={64} className="mx-auto mb-4" /> {/* Community Icon */}
                        <h2 className="text-2xl font-semibold mb-2">Real-Time Community (Coming Soon)</h2>
                        <p className="text-gray-300">Connect with other fitness enthusiasts, participate in challenges, and find your support system.</p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 relative">
                        <Image src="https://static.wixstatic.com/media/49ec1a_e87991deb7de41de8bd3f900c9d77a61~mv2.jpg/v1/crop/x_10,y_0,w_980,h_340/fill/w_968,h_336,al_c,q_80,usm_2.00_1.00_0.00,enc_avif,quality_auto/baki_edited.jpg"
                            alt="Benefits Image" width={980} height={340} className="rounded-lg" />{/* Replace with your image */}
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold mb-4">Achieve Your Fitness Goals</h2>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                            <li>User-friendly interface for easy tracking.</li>
                            <li>Data-driven insights to optimize your workouts.</li>
                            <li>Personalized plans to help you reach your goals faster.</li>
                            <li>Stay motivated and engaged with progress tracking.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-900 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
                    <p className="text-gray-300 mb-8">Download our app today and begin your fitness journey!</p>
                    <button className="bg-white text-black py-3 px-6 rounded-md font-medium hover:bg-slate-200 transition duration-300">
                        Download Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;