import React from 'react';
import AttendanceHeader from './_components/AttendanceHeader';
import QRScanner from './_components/QRScanner';
import AttendanceLogs from './_components/AttendanceLogs';

export default function AttendancePage() {

    return (
        <div className="p-6 w-full mx-auto bg-black text-gray-200">
            {/* Attendance Header */}
            <AttendanceHeader />
            {/* QR Scanner Section */}
            <QRScanner />
            {/* Attendance Log */}
            <AttendanceLogs />
        </div>
    );
}
