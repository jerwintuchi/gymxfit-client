import React from "react";
import Image from "next/image"; // Import Image component
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TfiViewListAlt } from "react-icons/tfi";
import { GoGoal } from "react-icons/go";
import { RiUserCommunityFill } from "react-icons/ri";

const LandingPage = () => {
    return (
        <div className=" bg-black text-white overflow-hidden"> {/* Added overflow-hidden */}
            {/* Hero Section */}
            <section className="relative h-[calc(100vh-70px)] flex flex-col justify-center items-center bg-[url('/greek-back.jpg')] bg-cover bg-center"> {/* Replace the image dynamically */}
                <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
                <div className="flex flex-col items-center relative z-10 text-center">
                    <Image src={"/mainlogo-nobg.png"} height={300} width={300} alt={"Gymxfit Logo"} />
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">Empower Your Fitness Journey</h1>
                    <p className="text-lg md:text-xl mb-8">The all-in-one fitness app for tracking workouts, monitoring progress, and staying motivated.</p>
                    <Link href="/sign-up">
                        <Button className="bg-white  text-black py-3 px-6 rounded-full font-medium hover:bg-gray-200 transition duration-300">
                            Start Now
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-black to-gray-900">
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
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-black">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="relative aspect-w-1 aspect-h-1 md:aspect-auto md:h-[400px] sm:h-[120px] rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black mix-blend-multiply rounded-3xl"></div> {/* Vignette Overlay */}
                        <Image
                            src={"/woman-px-nobg.png"}
                            alt="Benefits Image"
                            width={300}
                            height={300}
                            className="rounded-3xl "
                        />
                    </div>
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight"> {/* Responsive font size */}
                            Achieve Your Fitness Goals
                        </h2>
                        <ul className="space-y-4 text-base md:text-lg list-disc pl-6"> {/* Responsive font size */}
                            <li className="flex items-start md:items-center gap-2"> {/* Improved list item alignment */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500 mt-1 md:mt-0 shrink-0"> {/* Added margin top on mobile and shrink-0 */}
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                User-friendly interface for easy tracking.
                            </li>
                            <li className="flex items-start md:items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500 mt-1 md:mt-0 shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Data-driven insights to optimize your workouts.
                            </li>
                            <li className="flex items-start md:items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500 mt-1 md:mt-0 shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Personalized plans to help you reach your goals faster.
                            </li>
                            <li className="flex items-start md:items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500 mt-1 md:mt-0 shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Stay motivated and engaged with progress tracking.
                            </li>
                        </ul>
                    </div>
                </div>
            </section >


            {/* Footer Section */}
            < section className="py-8 px-6 md:px-12 lg:px-24 bg-gray-900 text-center" >
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Fitness Journey?</h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Take the first step towards a healthier, stronger, and more confident you.
                        Download the Gymxfit app today and start achieving your goals!
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        <Link href="/sign-in">
                            <Button className="bg-gray-500 border text-white py-6 px-8 rounded-md text-lg font-medium hover:bg-white hover:text-black transition duration-300">
                                Get Started Now
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button className="bg-transparent border border-white text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-gray-600 hover:text-white transition duration-300">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-6">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Gymxfit. All rights reserved.</p>
                </div>
            </section >

        </div >
    );
};

export default LandingPage;