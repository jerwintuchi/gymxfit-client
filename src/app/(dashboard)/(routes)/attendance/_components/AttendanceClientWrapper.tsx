"use client";
import React, { useEffect, useState } from 'react'
import AttendanceHeader from './AttendanceHeader'
import AttendanceLogs from './AttendanceLogs'
import QRScanner from './QRScanner'

export default function AttendanceClientWrapper() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        //set isLoaded state to true if the component mounts
        setIsLoaded(true)
    }, [])

    return (
        <div className={`p-6 w-full mx-auto bg-black text-gray-200 ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
            {/* Attendance Header */}
            <AttendanceHeader />
            {/* QR Scanner Section */}
            <QRScanner />
            {/* Attendance Log */}
            <AttendanceLogs />
        </div>
    )
}
