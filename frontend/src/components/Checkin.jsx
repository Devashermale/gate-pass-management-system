import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

function Checkin() {
    const [scanResult, setscanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5,
        });

        function success(result) {
            scanner.clear(); 
            setscanResult(result);
        }

        function error(err) {
           
        }

        scanner.render(success, error);

        return () => {
            scanner.clear().catch(error => {
                console.error("Failed to clear scanner on unmount", error);
            });
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-slate-800 uppercase">
                    Visitor Check In/Out
                </h1>

                {scanResult ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                        <strong className="font-bold">Success! </strong>
                        <span className="block sm:inline">Scanned Code: </span>
                        <a href={scanResult} className="underline block break-all">{scanResult}</a>
                        <button 
                            onClick={() => window.location.reload()} 
                            className="mt-4 bg-green-600 text-white px-4 py-1 rounded"
                        >
                            Scan Again
                        </button>
                    </div>
                ) : (
                    <div id="reader" className="overflow-hidden rounded-lg border-2 border-dashed border-gray-300"></div>
                )}
            </div>
        </div>
    );
}

export default Checkin;