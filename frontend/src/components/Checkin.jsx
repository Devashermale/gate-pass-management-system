import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

function Checkin() {
    const [scanResult, setscanResult] = useState(null);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: { width: 250, height: 250 },
            fps: 10,
        });

        function success(result) {
            const newEntry = {
                id: Date.now(),
                data: result,
                time: new Date().toLocaleTimeString(),
                date: new Date().toLocaleDateString(),
            };
            
            setLogs((prevLogs) => [newEntry, ...prevLogs]); 
            setscanResult(result);
            scanner.clear(); 
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
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mb-8">
                <h1 className="text-2xl font-bold text-center mb-6 text-slate-800 uppercase">
                    Visitor Check In/Out
                </h1>

                {scanResult ? (
                    <div className="text-center">
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                            <strong className="font-bold">Success! </strong>
                            <span className="block break-all">{scanResult}</span>
                        </div>
                        <button 
                            onClick={() => setscanResult(null)}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Scan Again
                        </button>
                    </div>
                ) : (
                    <div id="reader" className="overflow-hidden rounded-lg border-2 border-dashed border-gray-300"></div>
                )}
            </div>

            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-slate-800 p-4">
                    <h2 className="text-white font-semibold">Recent Scan Logs</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-3 border-b">Date</th>
                                <th className="px-6 py-3 border-b">Time</th>
                                <th className="px-6 py-3 border-b">Data</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            {logs.length > 0 ? (
                                logs.map((log) => (
                                    <tr key={log.id} className="hover:bg-gray-50 border-b last:border-none">
                                        <td className="px-6 py-4 whitespace-nowrap">{log.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{log.time}</td>
                                        <td className="px-6 py-4 break-all max-w-xs">{log.data}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="px-6 py-10 text-center text-gray-400 italic">
                                        No scans recorded yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Checkin;