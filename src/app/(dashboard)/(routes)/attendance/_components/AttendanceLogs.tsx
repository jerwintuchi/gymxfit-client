import React from 'react'

export default function AttendanceLogs() {
    const mockAttendance = [
        { date: '2024-12-26', time: '10:00 AM', status: 'Present' },
        { date: '2024-12-25', time: '11:00 AM', status: 'Present' },
        { date: '2024-12-24', time: '09:45 AM', status: 'Present' },
    ];

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Attendance Log</h2>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                {mockAttendance.length ? (
                    <table className="w-full text-left text-gray-300">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="pb-2">Date</th>
                                <th className="pb-2">Time</th>
                                <th className="pb-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockAttendance.map((entry, index) => (
                                <tr key={index} className="border-b border-gray-800">
                                    <td className="py-2">{entry.date}</td>
                                    <td className="py-2">{entry.time}</td>
                                    <td className="py-2 text-green-500">{entry.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500">No attendance records available.</p>
                )}
            </div>
        </div>
    )
}
