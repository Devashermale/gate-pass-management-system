import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Staffdetails() {
    const [emp, setemp] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);
    const [search, setsearch] = useState('');

    const [isEditing, setIsEditing] = useState(false);
    const [currentEmp, setCurrentEmp] = useState({
        _id: '',
        empname: '',
        empdept: '',
        Designation: '',
        email: '',
        path: '',
        joiningdate: ''
    });

    const fetchEmployees = async () => {
        setloading(true);
        try {
            const res = await axios.get('http://localhost:8080/emp/empdata');
            setemp(res.data);
            seterror(null);
        } catch (error) {
            seterror("Error fetching data");
            console.error(error);
        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const deletedata = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/emp/empdata/${id}`);
            setemp(emp.filter((item) => item._id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    const handleEditClick = (employee) => {
        setCurrentEmp(employee);
        setIsEditing(true);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:8080/emp/empdata/${currentEmp._id}`, currentEmp);
            setemp(emp.map(item => item._id === currentEmp._id ? res.data : item));
            setIsEditing(false);
        } catch (err) {
            console.error(err);
        }
    };

    const filterEmp = emp.filter((item) =>
        item.empname?.toLowerCase().includes(search.toLowerCase()) ||
        item.email?.toLowerCase().includes(search.toLowerCase()) ||
        item.empdept?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <div className="ml-40 mt-16 p-8 w-full">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center uppercase tracking-wider">
                    Staff Details
                </h1>

                <div className="mb-6 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search by name, email or department..."
                        className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                    />
                </div>

                {loading && <p className="text-center text-blue-600 font-bold">Loading data...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="w-full border-collapse bg-white">
                        <thead>
                            <tr className="bg-slate-800 text-white text-left">
                                <th className="p-4 border border-slate-700">No</th>
                                <th className="p-4 border border-slate-700">Photo</th>
                                <th className="p-4 border border-slate-700">Email</th>
                                <th className="p-4 border border-slate-700">Name</th>
                                <th className="p-4 border border-slate-700">Department</th>
                                <th className="p-4 border border-slate-700">Designation</th>
                                <th className="p-4 border border-slate-700">Joining Date</th>
                                <th className="p-4 border border-slate-700 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterEmp.map((item, index) => (
                                <tr key={item._id || index} className="border-b hover:bg-indigo-50 transition-colors">
                                    <td className="p-4 text-center font-medium">{index + 1}</td>
                                    <td className="p-2 text-center">
                                        <img 
                                            src={item.path} 
                                            alt="staff" 
                                            className="w-12 h-12 rounded-full object-cover border border-gray-300 mx-auto"
                                        />
                                    </td>
                                    <td className="p-4 text-gray-600">{item.email}</td>
                                    <td className="p-4 font-semibold text-gray-800">{item.empname}</td>
                                    <td className="p-4">{item.empdept}</td>
                                    <td className="p-4">{item.Designation}</td>
                                    <td className="p-4 text-sm text-gray-500">{item.joiningdate}</td>
                                    <td className="p-4 text-center">
                                        <div className="flex justify-center space-x-3">
                                            <button 
                                                onClick={() => handleEditClick(item)}
                                                className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded hover:bg-indigo-600 hover:text-white transition"
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                onClick={() => deletedata(item._id)}
                                                className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isEditing && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
                        <div className="bg-indigo-600 p-4 text-white font-bold text-lg">
                            Edit Employee Information
                        </div>
                        
                        <form onSubmit={handleUpdate} className="p-6 space-y-4">
                            <div className="flex flex-col items-center mb-2">
                                <img 
                                    src={currentEmp.path} 
                                    className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100 mb-2"
                                    alt="staff photo"
                                
                                />
                                <input 
                                    className="w-full text-sm border p-2 rounded bg-gray-50"
                                    placeholder="Photo URL (path)"
                                    value={currentEmp.path} 
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                                    <input 
                                        type="email"
                                        className="w-full border-b-2 border-gray-200 focus:border-indigo-500 outline-none py-1"
                                        value={currentEmp.email || ''} 
                                        onChange={(e) => setCurrentEmp({...currentEmp, email: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                                    <input 
                                        className="w-full border-b-2 border-gray-200 focus:border-indigo-500 outline-none py-1"
                                        value={currentEmp.empname || ''} 
                                        onChange={(e) => setCurrentEmp({...currentEmp, empname: e.target.value})}
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Dept</label>
                                        <input 
                                            className="w-full border-b-2 border-gray-200 focus:border-indigo-500 outline-none py-1"
                                            value={currentEmp.empdept || ''} 
                                            onChange={(e) => setCurrentEmp({...currentEmp, empdept: e.target.value})}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Designation</label>
                                        <input 
                                            className="w-full border-b-2 border-gray-200 focus:border-indigo-500 outline-none py-1"
                                            value={currentEmp.Designation || ''} 
                                            onChange={(e) => setCurrentEmp({...currentEmp, Designation: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-3 mt-6">
                                <button 
                                    type="button" 
                                    onClick={() => setIsEditing(false)} 
                                    className="px-4 py-2 text-gray-500 hover:text-gray-700 font-semibold"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md transition"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Staffdetails;