import React, { useState } from 'react';
import useRegister from '../hooks/useRegister';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const { Register, loading, error } = useRegister(); // Assuming your hook handles registration
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const success = await Register(email, password);
    if (success) {
      navigate('/visitor-dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create Account</h1>
          <p className="text-slate-500 mt-2">Join us and start your journey today</p>
        </div>

        

       
        <form onSubmit={handlesubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
              placeholder="name@company.com"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
              placeholder="Min. 8 characters"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>


          {error && (
            <div className="text-sm text-red-500 bg-red-50 p-3 rounded-lg border border-red-100">
              {error.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-200 transition-all active:scale-[0.98] disabled:opacity-70"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/signup" className="text-indigo-600 font-bold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;