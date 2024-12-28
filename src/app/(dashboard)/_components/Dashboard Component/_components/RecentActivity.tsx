import React from 'react';

const RecentActivity = () => {
    const dummyDate = "2024-12-27";
    const lastAttendance = "2024-12-21";


    return (
        <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-md "> {/* Responsive padding */}
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Recent Activity</h2> {/* Responsive font sizes and margin */}
            <ul className="list-none pl-0 space-y-1 sm:space-y-2"> {/* Responsive spacing */}
                <li className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-2"> {/* Responsive flex direction and gap */}
                    <span className="font-medium">Last Login:</span>
                    <span className="text-sm sm:text-base">{dummyDate}</span> {/* Responsive font size */}
                </li>
                <li className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-2">
                    <span className="font-medium">Last Attendance:</span>
                    <span className="text-sm sm:text-base truncate"> {/* Added these classes */}
                        {lastAttendance}
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default RecentActivity;