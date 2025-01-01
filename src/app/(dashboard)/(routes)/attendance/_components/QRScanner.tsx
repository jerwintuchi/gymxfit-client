import React from 'react'

export default function QRScanner() {
    return (
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
                {/* QR Scanner Placeholder */}
                <div className="bg-gray-800 w-full h-64 rounded-lg flex items-center justify-center mb-4">
                    <p className="text-gray-500">QR Code Scanner Placeholder</p>
                </div>
                {/* Scan Button */}
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition">
                    Scan QR Code
                </button>
            </div>
        </div>
    )
}
