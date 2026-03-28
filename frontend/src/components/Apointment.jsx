import axios from 'axios';
import React, { useEffect, useState } from 'react';

function  VisitorApointments () {
    const [emp, setemp] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);

   

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:8080/visitor/pass');
            setemp(res.data);
        } catch (error) {
            seterror(error);
        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


   
   if (loading) {
     return <h1 className=' h-screen flex items-center justify-center font-bold text-3xl'> loading</h1>
   }
    if (error) {
       return <h1 className=' h-screen flex items-center justify-center font-bold text-3xl'>{error.message}</h1>
    }
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">

            <div className="w-full max-w-6xl">
                <div className="flex justify-between items-center mb-8">
                    <h1 className='text-4xl font-bold text-slate-800'>Visitor Details</h1>
                 
                </div>
                
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className='border-collapse w-full'>
                        <thead>
                            <tr className="bg-slate-100 text-slate-700">
                                <th className='border-b p-4 text-left'>No</th>
                                <th className='border-b p-4 text-left'>Photo</th>
                                <th className='border-b p-4 text-left'>Email</th>
                                <th className='border-b p-4 text-left'>Visitor Name</th>
                                <th className='border-b p-4 text-left'>Host</th>
                                <th className='border-b p-4 text-left'>Purpose</th>
                                <th className='border-b p-4 text-left'>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {emp.map((item, index) => (
                                <tr key={item._id || index} className="hover:bg-indigo-50 transition-colors border-b">
                                    <td className="p-4">{index + 1}</td>
                                    <td className="p-4">
                                        <img 
                                            src={item.path}  
                                            alt="visitor" 
                                            className="w-10 h-10 rounded-full object-cover border" 
                                          
                                        />
                                    </td>
                                    <td className='p-4'>{item.email}</td>
                                    <td className="p-4 font-medium">{item.name}</td>
                                    <td className="p-4">{item.empname}</td>
                                    <td className="p-4">{item.visitpurpose}</td>
                                    <td className="p-4 text-slate-500 text-sm">{item.visitdate}</td>
                                    <td className="p-4">
                                     
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  
            </div>

        </div>
        </div>
    );
}

export default VisitorApointments 