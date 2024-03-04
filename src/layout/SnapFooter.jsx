import { Link } from 'react-router-dom'
import logo1 from '../images/SnapStory-logos-2-white.png'

function SnapFooter() {
  return (
    <>
      <div className="SnapFooter w-full h-[65rem] md:h-[20rem] max-md:pl-5 flex flex-col md:flex-row md:justify-center lg:gap-[8vw] text-white bg-gradient-to-b from-[#232335] to-[#181824]">
        <ul className="w-44 h-full pt-[5%] md:py-8 text-sm leading-8 max-md:flex-[1_0_10%] max-md:border-b-[1px]">
          <Link to={"/store"} className="font-bold text-lg leading-[2.5rem] underline underline-offset-4">Shop</Link>
          <li><Link to={"/store"} className='hover:underline'>Featured Products</Link></li>
          <li><Link to={"/photo-book"} className='hover:underline'>New Photos</Link></li>
          <li><Link to={"/photo-book"} className='hover:underline'>Photo book</Link></li>
          <li><Link to={"/store/snap-frames"} className='hover:underline'>SnapFrames</Link></li>
          <li><Link to={"/store/snap-merch"} className='hover:underline'>SnapMerch</Link></li>
        </ul>
        <ul className="w-44 h-full pt-[5%] md:py-8 text-sm leading-8 max-md:flex-[1_0_10%] max-md:border-b-[1px]">
          <li className="font-bold text-lg leading-[2.5rem] underline underline-offset-4">About us</li>
          <li><Link to={"/our-story"} className='hover:underline'>Our Story</Link></li>
          <li><Link to={"/tour-locations"} className='hover:underline'>Current Location</Link></li>
          <li><Link to={"/tour-locations"} className='hover:underline'>Destinations</Link></li>
        </ul>
        <ul className="w-44 h-full py-[5%] md:py-8 text-sm leading-8 max-md:flex-[1_0_10%]">
          <li className="font-bold text-lg leading-[2.5rem] underline underline-offset-4">Support</li>
          <li><Link to={"/help-center"} className='hover:underline'>Help Center</Link></li>
          <li><Link to={"/shipping"} className='hover:underline'>Shipping & Handling</Link></li>
          <li><Link to={"/FAQ"} className='hover:underline'>FAQ</Link></li>
          <li><Link to={"/attribution"} className='hover:underline'>Attributions</Link></li>
        </ul>
        <div className="w-44 h-full max-md:mx-auto max-md:pr-2 md:py-4 text-center max-md:flex-[1_0_10%] max-md:border-t-[1px]">
          <img src={logo1} className='VanishOnMd w-full h-24 hidden md:block object-contain border-b-[1px]' />
          <span className='relative md:top-2 text-sm'>
            Have any questions or want to book a local event? Give us a call at <br/>
            <span className='hover:underline'>(123)-456-7890</span>
          </span>
          <img src={logo1} className='AppearOnMaxMd w-full h-24 block md:hidden object-contain border-t-[1px]' />
        </div>
      </div> 
      <div className="SnapFooter-Copyright w-full h-[10vh] flex justify-center border-t-[1px] border-gray-400 text-white bg-gradient-to-b from-[#181824] to-[#0f0f11]">
        <span className="w-1/2 md:w-1/3 h-full lg:pr-[8vw] flex flex-col justify-center text-center text-xs">
          2024 © CalWillTech - Built with React
        </span>
        <span className="w-1/2 md:w-1/3 h-full pl-[8vw] hidden lg:flex flex-col justify-center text-center text-xs">
          
        </span>
      </div> 
    </>
  )
}

export default SnapFooter
