"use client";
import React, { useEffect, useState } from 'react';
import UserDashboard from '../_components/Dashboard Component/UserDashboard';
import GreetingHeader from '../_components/Dashboard Component/GreetingHeader';


export default function Dashboard() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        //set isLoaded state to true if the component mounts
        setIsLoaded(true)
    }, [])

    return (

        <div className="min-h-screen w-full bg-black">
            <header className={`bg-black text-white py-4 pl-6 text-start ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 `}>
                <GreetingHeader />
            </header>

            <main className="container mx-auto p-4">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 text-white ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
                    <UserDashboard />
                    <div>
                        {/* Other content for the second column */}
                        <h2 className="text-xl font-semibold mb-4 text-white ">Other Information</h2>
                        <p>asdasdasd</p>
                    </div>
                </div>
            </main>
        </div>
    );
}