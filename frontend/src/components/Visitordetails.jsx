import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Visitordetails() {
    const [emp, setemp] = useState([]);
    const [search, setsearch] = useState('');
    const [loading, setloading] = useState(true);
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
            console.error(err);
        }
    };

    const filteremp = emp.filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.email?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
            <div className="w-full max-w-6xl">
                <div className="flex justify-between items-center mb-8">
                    <h1 className='text-4xl font-bold text-slate-800'>Visitor Details</h1>
                    <input 
                        type='text'
                        placeholder='Search name or email...' 
                        className="border border-gray-300 rounded-md p-2 w-64 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                    />
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
                                <th className='border-b p-4 text-left'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteremp.map((item, index) => (
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
                    {filteremp.length === 0 && !loading && (
                        <div className="p-8 text-center text-gray-500">No visitors found matching "{search}"</div>
                    )}
                </div>
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