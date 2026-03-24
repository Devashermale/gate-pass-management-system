import axios from 'axios';
import React, { useEffect, useState } from 'react';

function EmpVisitordetails() {
  const [emp, setEmp] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const fetchVisitors = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:8080/visitor/pass');
      setEmp(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:8080/visitor/pass/${id}`,
         { status: newStatus });
      setEmp(prev => prev.map(item => (item.id === id || item._id === id) ? { ...item, status: newStatus } : item));
    } catch (err) {
      console.log(err);
      
    }
  };

  const handleEditClick = (item) => {
    setEditingId(item.id || item._id);
    setEditFormData({ ...item }); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSaveEdit = async (id) => {
    try {
      await axios.put(`http://localhost:8080/visitor/pass/${id}`, editFormData);
      setEmp(prev => prev.map(item => (item.id === id || item._id === id) ? editFormData : item));
      setEditingId(null);
      alert("Updated successfully!");
    } catch (err) {
   console.log(err);
   
    }
  };

  if (loading)
     return <div className="p-10 text-center font-bold">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="ml-40 mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 uppercase tracking-wide">Visitor pass details</h1>
        
        <div className="overflow-x-auto shadow-2xl rounded-xl border border-gray-200">
          <table className="w-full bg-white border-collapse text-sm">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="p-3 border border-gray-700">No</th>
                <th className="p-3 border border-gray-700">Photo</th>
                <th className="p-3 border border-gray-700">Visitor Name</th>
                <th className="p-3 border border-gray-700">Email</th>
                <th className="p-3 border border-gray-700">Purpose</th>
                <th className="p-3 border border-gray-700">Visit Date</th>
                <th className="p-3 border border-gray-700">Status</th>
                <th className="p-3 border border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {emp.map((item, index) => {
                const id = item.id || item._id;
                const isEditing = editingId === id;

                return (
                  <tr key={id || index} className="hover:bg-blue-50 transition-colors">
                    <td className="p-3 border text-center font-bold text-gray-600">{index + 1}</td>
                    
                    <td className="p-3 border text-center">
                      {isEditing ? (
                        <div className="flex flex-col gap-1">
                          <input 
                            className="border text-xs p-1 w-24 rounded"
                            name="path" 
                            placeholder="Image URL"
                            value={editFormData.path || ''} 
                            onChange={handleInputChange} 
                          />
                          <span className="text-[10px] text-gray-400">paste data</span>
                        </div>
                      ) : (
                        <img src={item.path} alt="visitor" className="w-12 h-12 rounded-full mx-auto object-cover border-2 border-gray-200" />
                      )}
                    </td>

                    <td className="p-3 border font-semibold">
                      {isEditing ? (
                        <input className="border p-1 w-full rounded bg-yellow-50" name="name" value={editFormData.name} onChange={handleInputChange} />
                      ) : (item.name)}
                    </td>

                    <td className="p-3 border">
                      {isEditing ? (
                        <input className="border p-1 w-full rounded bg-yellow-50" name="email" value={editFormData.email} onChange={handleInputChange} />
                      ) : (item.email)}
                    </td>

                    <td className="p-3 border">
                      {isEditing ? (
                        <input className="border p-1 w-full rounded bg-yellow-50" name="visitpurpose" value={editFormData.visitpurpose} onChange={handleInputChange} />
                      ) : (item.visitpurpose)}
                    </td>

                    <td className="p-3 border">
                      {isEditing ? (
                        <input 
                          type="date"
                          className="border p-1 w-full rounded bg-yellow-50" 
                          name="visitdate" 
                          value={editFormData.visitdate} 
                          onChange={handleInputChange} 
                        />
                      ) : (item.visitdate)}
                    </td>

                    <td className="p-3 border text-center">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-black uppercase ${
                        item.status === 'Approved' ? 'bg-green-100 text-green-700' : 
                        item.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {item.status || 'Pending'}
                      </span>
                    </td>

                    <td className="p-3 border">
                      <div className="flex flex-col gap-1">
                        {isEditing ? (
                          <>
                            <button onClick={() => handleSaveEdit(id)} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs shadow-md">Save</button>
                            <button onClick={() => setEditingId(null)} className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs shadow-md">Cancel</button>
                          </>
                        ) : (
                          <>
                            <button onClick={() => handleEditClick(item)} className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded text-xs">Edit</button>
                            <div className="flex gap-1">
                              <button onClick={() => updateStatus(id, 'Approved')} className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-[10px] flex-1">Approve</button>
                              <button onClick={() => updateStatus(id, 'Rejected')} className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-[10px] flex-1">Reject</button>
                            </div>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmpVisitordetails;