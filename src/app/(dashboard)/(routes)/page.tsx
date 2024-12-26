
import React from 'react';
import UserDashboard from '../_components/Dashboard Component/UserDashboard';
import GreetingHeader from '../_components/Dashboard Component/GreetingHeader';

export default function Dashboard() {

    return (
        <>
            <header>
                <GreetingHeader />
            </header>

            <main className="flex-grow p-4">
                <div className="flex flex-row md:grid-cols-2 gap-4">
                    <UserDashboard />
                    <div>
                        {/* Other content for the second column */}
                        <h2 className="text-xl font-semibold mb-4">Other Information</h2>
                        <p>asdasdasd</p>
                    </div>
                </div>
            </main>
        </>
    );
}