import './App.css'
import {  Routes ,Route, Navigate } from 'react-router-dom';
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
function App() {

  return (
    <>
    
    <div> 
    
      <Routes>
        <Route path='/'element={ <Home/>}/> 
         
        <Route path='/register' element= {<Login/>} />
        <Route path='/signup' element=   {<Signup/>} />
        <Route path='/employee-signup' element ={<Empsign/>}/>
        <Route path='/Admin-signup' element={<SignupAdmin/>}/>
        <Route path = '/admin-dashboard' element ={<Admindash/>}/>
        <Route path='/visitor-dashboard' element ={<Visitordash/>}/>
        <Route path ='/employee-dashboard' element={<Empdash/>}/>
         <Route path ='/security-dashboard' element={<Securitydash/>}/>
        <Route path='/staff-detail' element ={<Staffdetails/>}/>
        <Route path ='/visitor-detail' element ={<Visitordetails/>}/>
         <Route path='/visitor-reg' element = {<Visitorform/>}/>
        <Route path='/visitor-pass' element ={<Passes/>}/>
        <Route path ='/check-pass' element ={<Checkin/>}/>
        <Route path='/employee-visitor-details' element={<Empvisitordetails/>}/>
        <Route path ='/employee-reg' element ={<Adminform/>}/>
      </Routes>
    
   
    
    </div>
    </>
  )
}

export default App
