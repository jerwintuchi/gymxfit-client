"use client";
import React from 'react';
import UserDashboard from '../_components/Dashboard Component/UserDashboard';
import GreetingHeader from '../_components/Dashboard Component/GreetingHeader';


export default function Dashboard() {
    return (

        <div className="min-h-screen w-full bg-gray-100">
            <header className="bg-blue-500 text-white py-4 text-center">
                <GreetingHeader />
            </header>

            <main className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <UserDashboard />
                    <div>
                        {/* Other content for the second column */}
                        <h2 className="text-xl font-semibold mb-4">Other Information</h2>
                        <p>asdasdasd</p>
                    </div>
                </div>
            </main>
        </div>
    );
}