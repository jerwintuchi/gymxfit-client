import React from 'react';

export default function WeeklyActivity() {
    return (
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 hover:border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">Weekly Activity</h2>
            <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center text-gray-400">
                    <p className="font-medium text-gray-100">Workouts:</p>
                    <span>3 out of 4</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                    <p className="font-medium text-gray-100">Time Spent:</p>
                    <span>2h 30m</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                    <p className="font-medium text-gray-100">Next Workout:</p>
                    <div className="flex flex-col text-sm">
                        <span>Monday, 9:30 AM</span>
                        <span className="font-semibold text-green-500 text-end">Leg Day</span>
                    </div>
                </div>
            </div>
        </div>
    );
}