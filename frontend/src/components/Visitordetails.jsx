import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Visitordetails() {
    const [emp, setemp] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);

    const [isEditing, setIsEditing] = useState(false);
    const [currentVisitor, setCurrentVisitor] = useState({
        _id: '',
        name: '',
        email: '',
        empname: '',
        visitpurpose: '',
        path: '',
        visitdate: ''
    });

    const handlesbmit = async () => {
        try {
            const res = await axios.get('http://localhost:8080/visitor/pass');
            setemp(res.data);
        } catch (error) {
            seterror(error);
        } finally {
            setloading(true);
        }
    };

    useEffect(() => {
        handlesbmit();
    }, []);

    const deletedata = async (id) => {
        if (window.confirm("Delete this visitor record?")) {
            await axios.delete(`http://localhost:8080/visitor/pass/${id}`);
            const updatedata = emp.filter((item) => item._id !== id);
            setemp(updatedata);
        }
    };

    const handleEditClick = (visitor) => {
        setCurrentVisitor(visitor);
        setIsEditing(true);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:8080/visitor/pass/${currentVisitor._id}`, currentVisitor);
            setemp(emp.map(item => item._id === currentVisitor._id ? res.data : item));
            setIsEditing(false);
        } catch (err) {
            console.error( err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <div className='flex-1 ml-40 mt-16 p-4'>
                <h1 className='text-4xl text-center mb-8 font-bold text-slate-800'>Visitor Details</h1>
                
                <table className='border-collapse w-full shadow-sm'>
                    <thead>
                        <tr>
                            <th className='border border-gray-300 px-4 py-2 text-left bg-slate-100 text-slate-700'>No</th>
                            <th className='border border-gray-300 px-4 py-2 text-left bg-slate-100 text-slate-700'>Photo</th>
                            <th className='border border-gray-300 px-4 py-2 text-left bg-slate-100 text-slate-700'>Email</th>
                            <th className='border border-gray-300 px-4 py-2 text-left bg-slate-100 text-slate-700'>Visitor Name</th>
                            <th className='border border-gray-300 px-4 py-2 text-left bg-slate-100 text-slate-700'>Host (To Visit)</th>
                            <th className='border border-gray-300 px-4 py-2 text-left bg-slate-100 text-slate-700'>Purpose</th>
                            <th className='border border-gray-300 px-4 py-2 text-left bg-slate-100 text-slate-700'>Date</th>
                            <th className='border border-gray-300 px-4 py-2 text-left bg-slate-100 text-slate-700'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emp.map((item, index) => (
                            <tr key={item._id || index} className="hover:bg-indigo-50 transition-colors">
                                <td className="border border-gray-300 px-4 py-2 bg-white">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2 bg-white">
                                    <img src={item.path}  alt="visitor" className="w-10 h-10 rounded-full object-cover border" onError={(e) => e.target.src='https://via.placeholder.com/40'} />
                                </td>
                                <td className='border border-gray-300 px-4 py-2 bg-white'>{item.email}</td>
                                <td className="border border-gray-300 px-4 py-2 bg-white">{item.name}</td>
                                <td className="border border-gray-300 px-4 py-2 bg-white">{item.empname}</td>
                                <td className="border border-gray-300 px-4 py-2 bg-white">{item.visitpurpose}</td>
                                <td className="border border-gray-300 px-4 py-2 bg-white text-slate-500 text-sm">{item.visitdate}</td>
                                <td className="border border-gray-300 px-4 py-2 bg-white">
                                    <button 
                                        onClick={() => handleEditClick(item)}
                                        className="text-indigo-600 hover:text-indigo-900 font-semibold mr-4 underline"
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="text-rose-600 hover:text-rose-900 font-semibold underline" 
                                        onClick={() => deletedata(item._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isEditing && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4 border-b pb-2">Edit Visitor Pass</h2>
                        <form onSubmit={handleUpdate} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase">Visitor Name</label>
                                <input 
                                    className="w-full border p-2 rounded mt-1"
                                    value={currentVisitor.name} 
                                    onChange={(e) => setCurrentVisitor({...currentVisitor, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase">Email</label>
                                <input 
                                    className="w-full border p-2 rounded mt-1"
                                    value={currentVisitor.email} 
                                    onChange={(e) => setCurrentVisitor({...currentVisitor, email: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase">Photo URL</label>
                                <input 
                                    className="w-full border p-2 rounded mt-1 text-sm text-gray-600"
                                    value={currentVisitor.path} 
                                    onChange={(e) => setCurrentVisitor({...currentVisitor, path: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase">Purpose</label>
                                <input 
                                    className="w-full border p-2 rounded mt-1"
                                    value={currentVisitor.visitpurpose} 
                                    onChange={(e) => setCurrentVisitor({...currentVisitor, visitpurpose: e.target.value})}
                                />
                            </div>
                            <div className="flex justify-end space-x-2 pt-4">
                                <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Visitordetails;