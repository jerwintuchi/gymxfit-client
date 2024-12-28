import React from 'react';
import AttendanceSummary from './_components/AttendanceSummary';
import RecentActivity from './_components/RecentActivity';
import Notifications from './_components/Notifications';
import OverView from './_components/OverView';
import UserGoal from './_components/UserGoal';

function UserDashboard() {
    return (
        <div className="container mx-auto p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(150px, auto)]"> {/* Bento Grid Setup */}
                {/* Overview (Spans 2 columns on larger screens) */}
                <div className="md:col-span-2">
                    <OverView />
                </div>

                {/* Attendance Summary */}
                <div className=""> {/* Takes up a regular grid space */}
                    <AttendanceSummary />
                </div>

                {/* Recent Activity */}
                <div className=""> {/* Takes up a regular grid space */}
                    <RecentActivity />
                </div>

                {/* Notifications (Spans 1 or 2 columns based on screen size) */}
                <div className="md:col-span-1 lg:col-span-1"> {/* Spans 1 column on all screen sizes */}
                    <Notifications />
                </div>
                {/*GoalDropdown */}
                <div className="md:col-span-1">
                    <UserGoal />
                </div>


                {/* Example of a larger element spanning multiple rows and columns */}
                {/* <div className="md:col-span-2 lg:col-span-3 row-span-2 bg-gray-800 rounded-lg p-6">
                    Content that spans multiple rows and columns.
                </div> */}
            </div>
        </div>
    );
}

export default UserDashboard;