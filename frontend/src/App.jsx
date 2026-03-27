import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup';
import SignupAdmin from './pages/SignupAdmin';
import Empsign from './pages/Empsign';
import Admindash from './pages/Admindash';
import Visitordash from './pages/Visitordash'
import Empdash from './pages/Empdash'
import Staffdetails from './components/Staffdetails';
import Visitordetails from './components/Visitordetails';
import Passes from './components/Passes';
import Checkin from './components/Checkin';
import Adminform from './components/Adminform';
import Visitorform from './components/Visitorform';
import Empvisitordetails from './components/Empvisitordetails'
import Securitydash from './pages/Securitydash';
import { useAuthcontext } from './hooks/useAuthcontext'
import Securitysignup from './pages/Securitysignup'
import ProtectedRoute from './context/Proctectedroute';
function App() {
  const { user } = useAuthcontext();

  return (
    <>

      <div>

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/register' element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path='/signup' element={<Signup />} />

          <Route path='/employee-signup' element={<Empsign />} />
          <Route path='/Admin-signup' element={<SignupAdmin />} />
          <Route path='/security-signup' element={<Securitysignup />} />



          <Route path="/admin-dashboard" element={<ProtectedRoute allowedRoles={['admin']}>
            <Admindash />
          </ProtectedRoute>
          } />
          <Route path='/staff-detail' element={<ProtectedRoute allowedRoles={['admin']}>
            <Staffdetails />
          </ProtectedRoute>
          } />
          <Route path='/visitor-detail' element={<ProtectedRoute allowedRoles={['admin']}>
            <Visitordetails />
          </ProtectedRoute>
          } />
          <Route path='/employee-reg' element={<ProtectedRoute allowedRoles={['admin']}>
            <Adminform />
          </ProtectedRoute>
          }
          />


          <Route path='/visitor-dashboard' element={<ProtectedRoute allowedRoles={['visitor']}>
            <Visitordash />
          </ProtectedRoute>}
          />
          <Route path='/visitor-reg' element={<ProtectedRoute allowedRoles={['visitor']}>
            <Visitorform />
          </ProtectedRoute>} />

          <Route path='/visitor-pass' element={<ProtectedRoute allowedRoles={['visitor']}>
            <Passes />
          </ProtectedRoute>} />



          <Route path='/employee-dashboard' element={<ProtectedRoute allowedRoles={['employee']}>
            <Empdash />
          </ProtectedRoute>
          } />

          <Route path='/employee-visitor-details' element={<ProtectedRoute allowedRoles={['employee']}>
            <Empvisitordetails />
          </ProtectedRoute>
          } />

          <Route path='/visitor-reg' element={<ProtectedRoute allowedRoles={['employee']}>
            <Visitorform />
          </ProtectedRoute>
          } />
          <Route path='/security-dashboard' element={<ProtectedRoute allowedRoles={['security']}>
            <Securitydash />
          </ProtectedRoute>
          } />


          <Route path='/check-pass' element={<ProtectedRoute allowedRoles={['security']}>
            <Checkin />
          </ProtectedRoute>} />

          <Route path='/visitor-reg' element={<ProtectedRoute allowedRoles={['security']}>
            <Visitorform />
          </ProtectedRoute>} />


        </Routes>



      </div>
    </>
  )
}

export default App
