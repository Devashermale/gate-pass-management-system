import { useEffect, useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import axios from 'axios';
import { jsPDF } from 'jspdf';

function Qrcode() {
    const [visitors, setVisitors] = useState([]);
    const qrRefs = useRef([]);

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:8080/visitor/pass');
            const data = Array.isArray(res.data) ? res.data : [res.data];
            setVisitors(data);
        } catch (err) {
            console.error("API Error:", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const downloadPDF = (index) => {
        const visitor = visitors[index];
        const canvas = qrRefs.current[index]?.querySelector('canvas');
        
        if (!canvas || !visitor) return;

        const doc = new jsPDF();
        const qrImage = canvas.toDataURL("image/png");

        doc.setFontSize(20);
        doc.text("OFFICIAL VISITOR PASS", 105, 20, { align: "center" });
        
        doc.setFontSize(12);
        doc.text(`Name: ${visitor.name || 'N/A'}`, 20, 40);
        doc.text(`Email: ${visitor.email || 'N/A'}`, 20, 50);
        doc.text(`Host: ${visitor.empname || 'N/A'}`, 20, 60);

        doc.addImage(qrImage, 'PNG', 75, 80, 60, 60);
        doc.save(`Pass_${visitor.name || 'visitor'}.pdf`);
    };

    return (
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {visitors.length === 0 ? (
                <p>Loading visitor data...</p>
            ) : (
                visitors.map((visitor, index) => (
                    <div key={visitor.id || index} className="border p-6 rounded-lg shadow-md bg-white text-center">
                        <h2 className="text-xl font-bold mb-4">Pass #{index + 1}</h2>
                        
                        <p className="mb-2">Welcome <b>{visitor.name}</b></p>
                        
                        <div 
                            ref={(el) => (qrRefs.current[index] = el)} 
                            className="inline-block p-2 border"
                        >
                            <QRCodeCanvas 
                                value={JSON.stringify(visitor)} 
                                size={150} 
                            />
                        </div>

                        <button 
                            onClick={() => downloadPDF(index)}
                            className="block mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
                        >
                            Download PDF for {visitor.name} pass 
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Qrcode;