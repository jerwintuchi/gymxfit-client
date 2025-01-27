import { useEffect, useState, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function QRScanner() {
    const [scannedCode, setScannedCode] = useState<string | null>(null);
    const [isScanning, setIsScanning] = useState(true);
    const scannerRef = useRef<Html5QrcodeScanner | null>(null); // Use a ref to store the scanner instance

    useEffect(() => {
        if (!scannedCode) {
            // Initialize the scanner only once
            if (!scannerRef.current) {
                const scanner = new Html5QrcodeScanner(
                    "reader", // The ID of the container where the scanner will render
                    {
                        qrbox: { width: 250, height: 250 }, // Define the scanning box
                        fps: 10, // Frames per second
                    },
                    false // Verbose mode off
                );

                // Store the scanner instance in the ref
                scannerRef.current = scanner;

                // Define the success and error callbacks
                function success(decodedText: string) {
                    setScannedCode(decodedText);
                    setIsScanning(false);
                }
                function error(err: string) {
                    console.warn("QR Code Scan Error:", err);
                }

                // Render the scanner and set up callbacks
                scanner.render(success, error);
            }
        }

        // Cleanup the scanner on component unmount
        return () => {
            if (scannerRef.current) {
                scannerRef.current.clear().catch((err) => {
                    console.error("Error stopping scanner:", err);
                });
                scannerRef.current = null; // Clear the scanner reference
            }
        };
    }, [scannedCode]); // Dependency on scannedCode to re-run the effect if it changes

    const restartScanning = () => {
        setScannedCode(null); // Clear the scanned code
        setIsScanning(true); // Enable scanning
    };

    return (
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
                {/* QR Scanner */}
                {isScanning && !scannedCode ? (
                    <div id="reader" className="text-center text-indigo-700 " />
                ) : (
                    <p className="text-gray-500 text-sm">
                        Scanned QR Code: {scannedCode}
                    </p>
                )}

                {/* Instructions */}
                <p className="text-gray-500 text-sm mt-2">
                    {isScanning
                        ? "Position the QR code within the scanning area."
                        : "Scan completed. Press the button below to scan again."}
                </p>

                {/* Restart Button */}
                {!isScanning && (
                    <button
                        onClick={restartScanning}
                        className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition"
                    >
                        Scan Again
                    </button>
                )}
            </div>
        </div>
    );
}
