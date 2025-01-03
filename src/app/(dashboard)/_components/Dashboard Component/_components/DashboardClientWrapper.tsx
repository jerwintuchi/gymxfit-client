'use client';

import React, { useEffect, useState } from 'react';
import { useUserContext } from '@/app/contextProviders/UserProvider';
import GreetingHeader from '../GreetingHeader';
import UserDashboard from '../UserDashboard';
import ProgramCalendar from './ProgramCalendar';
import Nutrition from './Nutrition';


const DashboardClientWrapper = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        //set isLoaded state to true if the component mounts
        setIsLoaded(true)
    }, [])

    // Access the user context
    const { firstName } = useUserContext();
    // Set a fallback display name if `firstName` is null or undefined
    const displayName = firstName || "User";
    return (
        <div className={`${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
            {/* Render the GreetingHeader with the display name */}
            <header className="bg-black text-white py-4 pl-6 text-start">
                <GreetingHeader displayName={displayName} />
            </header>

            <main className="container mx-auto p-4 font-sans">
                <div className={`grid grid-cols-1 md:grid-rows-1 gap-4 text-white `}>
                    <UserDashboard />
                    <div className="flex flex-col lg:flex-row gap-6">
                        <ProgramCalendar />
                        <Nutrition />
                    </div>
                </div>
            </main>

        </div>
    );
};

export default DashboardClientWrapper;
