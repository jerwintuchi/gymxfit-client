import React from 'react'

export default function AttendanceLogs() {
    const mockAttendance = [
        { date: '2024-12-26', timeIn: '10:00 AM', timeOut: '12:00 PM', status: 'Present' },
        { date: '2024-12-25', timeIn: '11:00 AM', timeOut: '01:00 PM', status: 'Present' },
        { date: '2024-12-24', timeIn: '09:45 AM', timeOut: '', status: 'Active' },
        { date: '2024-12-23', timeIn: '', timeOut: '', status: 'Absent' },
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
                                <th className="pb-2">Check In</th>
                                <th className="pb-2">Check Out</th>
                                <th className="pb-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockAttendance.map((entry, index) => (
                                <tr key={index} className="border-b border-gray-800">
                                    <td className="py-2">{entry.date}</td>
                                    <td className="py-2">{entry.timeIn}</td>
                                    <td className="py-2">{entry.timeOut}</td>
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
