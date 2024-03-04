import { Link } from 'react-router-dom'
import logo1 from '../images/SnapStory-logos-2-white.png'
import Breadcrumb_Misc from '../components/Breadcrumb_Misc'


function Page_HelpCenter() {
  return (
    <div className="Page_HelpCenter w-screen max-h-[1000vh] h-auto pb-12 bg-gradient-to-b from-gray-100 to-neutral-300">
      <Breadcrumb_Misc/>
      <div className="FAQWrapper size-3/4 mx-auto mt-12 pb- p-2 text-base lg:text-xl text-gray-100 bg-neutral-900">
          <div className="w-44 h-full mx-auto max-md:pr-2 md:py-4 text-center max-md:flex-[1_0_10%] max-md:border-y-[1px]">
              <img src={logo1} className='VanishOnMd w-full h-24 hidden md:block object-contain border-b-[1px]' />
              <span className='relative md:top-2 text-sm'>
                Have any questions or want to book a local event? Give us a call at <br/>
                <span className='hover:underline'>(123)-456-7890</span>
              </span>
          </div>
          <div className='w-full h-20 mt-8 text-center'>
              We reccommend checking out our <Link to={"/FAQ"} className='text-cyan-500 underline'>Frequently Asked Questions</Link>.
          </div>
      </div>
    </div>
  )
}

export default Page_HelpCenter
