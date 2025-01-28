import { useEffect, useState, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";


export default function QRScanner() {
    const [scannedCode, setScannedCode] = useState<string | null>(null);
    const [isScanning, setIsScanning] = useState(false); // Initially not scanning
    const scannerRef = useRef<Html5QrcodeScanner | null>(null);

    useEffect(() => {
        if (isScanning && !scannerRef.current) {
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
                if (scannerRef.current) {
                    scannerRef.current.clear();
                }
                setScannedCode(decodedText);
                setIsScanning(false);
            };

            const error = (err: string) => {

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
    }, [isScanning]);




    const restartScanning = () => {
        setScannedCode(null);
        setIsScanning(true);
    };

    return (
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
                {/* QR Scanner or Message */}
                {isScanning && !scannedCode ? (
                    <div id="reader" className="text-center text-indigo-700" />
                ) : (
                    <p className="text-gray-500 text-sm">
                        Scanned QR Code: {scannedCode}
                    </p>
                )
                }


                {/* Restart Button */}
                {!isScanning && (
                    <button
                        onClick={restartScanning}
                        className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition"
                    >
                        {scannedCode ? "Scan Again" : "Log Attendance"}
                    </button>
                )}
            </div>
        </div>
    );
}