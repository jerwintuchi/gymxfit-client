import React from 'react';
import UserInformation from './_components/UserInformation';
import AttendanceSummary from './_components/AttendanceSummary';
import RecentActivity from './_components/RecentActivity';
import Notifications from './_components/Notifications';



function UserDashboard() {

    return (
        <div className="container mx-auto p-4 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* User Information */}
                <UserInformation
                />

                {/* Attendance Summary */}
                <AttendanceSummary

                />

                {/* Recent Activity */}
                <RecentActivity />

                {/* Notifications */}
                <Notifications />
            </div>
        </div>
    );
}

export default UserDashboard;
