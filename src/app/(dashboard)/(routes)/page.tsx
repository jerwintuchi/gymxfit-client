"use client";
import React, { useEffect, useState } from 'react';
import UserDashboard from '../_components/Dashboard Component/UserDashboard';
import GreetingHeader from '../_components/Dashboard Component/GreetingHeader';
import { useUserContext } from '@/app/contextProviders/UserProvider';
import ProgramCalendar from '../_components/Dashboard Component/_components/ProgramCalendar';


export default function Dashboard() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        //set isLoaded state to true if the component mounts
        setIsLoaded(true)
    }, [])

    const { firstName } = useUserContext();
    const displayName = firstName || "User";

    return (

        <div className="min-h-screen w-full bg-black">
            <header className={`bg-black text-white py-4 pl-6 text-start ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 `}>

                <GreetingHeader displayName={displayName} />
            </header>

            <main className="container mx-auto p-4 font-sans">
                <div className={`grid grid-cols-1 md:grid-rows-1 gap-4 text-white ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
                    <UserDashboard />
                    <ProgramCalendar />
                    <div>
                    </div>
                </div>
            </main>
        </div>
    );
}