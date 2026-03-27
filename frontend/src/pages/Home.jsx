import Navbar from '../components/Navbar'
import office from '../assets/office.jpg'
function Home() {
  return (
    <div>
      <div className=' h-screen '>
       
        <div className=" h-screen bg-cover overflow-hidden "
        style={{ backgroundImage: `url(${office})` }}>
      <Navbar />
      <div className=''>
        <h1 className=' text-4xl font-bold text-center mt-20'>Security That Starts at the Front Door</h1>
        <h4 className='  flex items-center justify-center text-2xl font-bold m-6 pl-58 pr-40'>Replace paper logs with a sleek, digital check-in experience that notifies hosts instantly and keeps your workplace safe</h4>
      </div> 
      <div className=' grid grid-cols-3 m-10 gap-6'>
        <div> 
          <h1 className=' font-bold text-2xl text-center'>Invite</h1>
          <p className=' font-bold text-lg text-center'>Send a digital pass via email or SMS</p>
          </div>
      <div>
        <h1  className=' font-bold text-2xl text-center'>Check-in</h1>
        <p  className=' font-bold text-lg text-center'>Visitor scans their QR code at your kiosk.</p>
        </div>
      < div className=' border-2 rounded h-30 w-120 '>
        <h1 className=' font-bold text-2xl text-center'>Notify</h1>
        <p  className=' font-bold text-lg text-center'>You get a ping on Slack or Phone the moment they arrive.</p>
           </div>
        <div>
           <h1  className=' font-bold text-2xl text-center'>Instant Badge Printing </h1>
           <p className=' font-bold text-lg text-center' >Professional IDs in seconds.</p>
           </div>
        <div>
          <h1  className=' font-bold text-2xl text-center'>Touchless Entry</h1>
          <p className=' font-bold text-lg text-center'>Minimize contact with QR-based mobile check-in.</p>
        </div>
        <div>
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