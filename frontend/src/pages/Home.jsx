import Navbar from '../components/Navbar'
import office from '../assets/office.jpg'
import {BellRing, ScanLine, FileText ,Handshake ,DoorOpen,Notebook } from 'lucide-react'
function Home() {
  return (
    <div>
      <div>
       
        <div className=" min-h-screen bg-cover overflow-hidden "
        style={{ backgroundImage: `url(${office})` }}>
      <Navbar />
      <div className=' m-16'>
        <h1 className=' text-4xl font-bold text-center pt-32'>Security That Starts at the Front Door</h1>
        <h4 className='  flex items-center justify-center text-2xl font-bold   '>Replace paper logs with a sleek, digital check-in experience that notifies hosts instantly and keeps your workplace safe</h4>
        <div className=' flex items-center justify-center gap-6 m-6'>
         <button className=' border text-3xl font-medium p-2 hover:bg-green-800 rounded'>free trials </button>
         <button className= ' border text-3xl font-medium p-2 rounded'>register here</button>
         </div>
      </div> 
      <div className=' grid grid-cols-3 mt-20 gap-6 backdrop-blur-md '>
        <div>
                  <span className='  flex items-center justify-center m-4'><Handshake size={36} /> </span>
          <h1 className=' font-bold text-2xl text-center'>  Invite</h1> 
          <p className=' font-bold text-lg text-center'>Send a digital pass via email or SMS</p>
          </div>
      <div> 

        <span className='  flex items-center justify-center m-4'><ScanLine size={36} /></span>
        <h1  className=' font-bold text-2xl flex items-center justify-center m-4'> Check-in</h1>
        <p  className=' font-bold text-lg text-center'>Visitor scans their QR code at your kiosk.</p>
        </div>
      < div className=' rounded h-30 w-120  '>
      <span className='  flex items-center justify-center m-4'>  <BellRing  size={36} /></span>
       
        <h1 className=' font-bold text-2xl flex items-center justify-center m-4'>   Notify</h1>
        <p  className=' font-bold text-lg text-center'>You get a ping on Slack or Phone the moment they arrive.</p>
           </div>
        <div>
                <span className='  flex items-center justify-center m-4'> <FileText size={36} />   </span>

           <h1  className=' font-bold text-2xl text-center'>Instant Badge Printing </h1>
           <p className=' font-bold text-lg text-center' >Professional IDs in seconds.</p>
           </div>
        <div>
                <span className='  flex items-center justify-center m-4'><DoorOpen size={36} /></span>

          <h1  className=' font-bold text-2xl text-center'>Touchless Entry</h1>
          <p className=' font-bold text-lg text-center'>Minimize contact with QR-based mobile check-in.</p>
        </div>
        <div>
                <span className='  flex items-center justify-center m-4'> <Notebook size={36} /> </span>

          <h1  className=' font-bold text-2xl text-center'>Watchlist Screening:</h1>
          <p className=' font-bold text-lg text-center'>Screen guests against custom blocklists.</p>
        </div>
   
      </div>
        </div>
      </div>
    </div>
  )
}

export default Home