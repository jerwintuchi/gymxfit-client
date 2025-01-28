import { useEffect, useState, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Button } from "@/components/ui/button";

export default function QRScanner() {
    const [scannedCode, setScannedCode] = useState<string | null>(null);
    const [isScanning, setIsScanning] = useState(false); // Initially not scanning
    const scannerRef = useRef<Html5QrcodeScanner | null>(null);
    const [isLogging, setIsLogging] = useState(false); // Controls whether the reader is displayed

    useEffect(() => {
        if (isLogging && isScanning && !scannerRef.current) {
            console.log("Initializing scanner...");
            const scanner = new Html5QrcodeScanner(
                "reader",
                {
                    qrbox: { width: 250, height: 250 },
                    fps: 10,
                },
                false
            );

            scannerRef.current = scanner;

            const success = (decodedText: string) => {
                console.log("Scanning successful");
                setScannedCode(decodedText);
                setIsScanning(false);
            };

            const error = (err: string) => {
                // Prevent processing when the video feed is invalid
                const videoElement = document.querySelector("#reader video") as HTMLVideoElement;
                if (!videoElement || videoElement.videoWidth === 0 || videoElement.videoHeight === 0) {
                    console.warn("Invalid video feed detected, skipping...");
                    return;
                }
                if (err.includes("NotFoundException")) {
                    // Suppress "No QR code found" errors
                    return;
                }
                console.warn("QR Code Scan Error:", err);
            };

            scanner.render(success, error);
        }

        return () => {
            if (scannerRef.current) {
                console.log("Stopping scanner...");
                scannerRef.current
                    .clear()
                    .then(() => (scannerRef.current = null))
                    .catch((err) => console.error("Error stopping scanner:", err));
            }
        };
    }, [isLogging, isScanning]);



    const toggleLogging = () => {
        setIsLogging((prev) => !prev); // Toggles the `isLogging` state
        if (!isLogging) {
            setScannedCode(null); // Reset scanned code when reopening
            setIsScanning(true); // Restart scanning
        }
    };

    const restartScanning = () => {
        setScannedCode(null);
        setIsScanning(true);
    };

    return (
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
                {/* Toggle Button */}
                <Button
                    onClick={toggleLogging}
                    className="mb-4 bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition"
                >
                    {isLogging ? "Hide Scanner" : "Log Attendance"}
                </Button>

                {/* QR Scanner or Message */}
                {isLogging ? (
                    isScanning && !scannedCode ? (
                        <div id="reader" className="text-center text-indigo-700" />
                    ) : (
                        <p className="text-gray-500 text-sm">
                            Scanned QR Code: {scannedCode}
                        </p>
                    )
                ) : (
                    <p className="text-gray-500 text-sm">{"Click 'Log Attendance' to scan."}</p>
                )}

                {/* Scan Instructions */}
                {isLogging && (
                    <p className="text-gray-500 text-sm mt-2">
                        {isScanning
                            ? "Position the QR code within the scanning area."
                            : "Scan completed. Press the button below to scan again."}
                    </p>
                )}

                {/* Restart Button */}
                {isLogging && !isScanning && (
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
