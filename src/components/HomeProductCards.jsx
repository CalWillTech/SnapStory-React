import logo1 from '../images/SnapStory-logos-2-white.png'
import img1 from '../images/jannis-edelmann-G69CWIw1SEU-unsplash.jpg'
import img2 from '../images/jhin5-2MYcbBBh9kE-unsplash.jpg'
import img3 from '../images/joey-nicotra-2FhRTB11FGg-unsplash.jpg'
import activemimg1 from '../images/SnapStory-gallery-wall.jpeg'
import activemimg2 from '../images/SnapStory-portrait-landscape.jpeg'
import activemimg3 from '../images/SnapStory-beanie-black.jpeg'
import { InView, useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

function HomeProductCards() {
  const { ref, inView, } = useInView({ triggerOnce: true, threshold: 0.2, });
  return (
    <div className='ProductText w-screen max-lg:min-h-[180vh] md:h-[100vh] 
    flex flex-col bg-gradient-to-b from-gray-200 to-gray-300'>
      <InView triggerOnce={true} threshold={0.9}>
        {({inView, ref,}) => (
          <div ref={ref} className='w-full min-h-32 lg:h-[20%] lg:pb-4 text-center flex flex-col justify-center overflow-hidden bg-gray-200'>
            <span className={`${inView ? 'opacity-100' : 'opacity-0'} text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold transition-opacity duration-[350ms] max-lg:opacity-100`}>
              Take a piece of you, wherever you go
            </span>
          </div>
        )}
      </InView>
      <div className='ProductDivider w-[90%] h-1.5 mx-auto mb-4 rounded-[100%] bg-black'>
      </div>
      <div ref={ref} className='ProductCardWrapper w-[80%] h-[90%] md:h-full mx-auto max-md:gap-8 mb-8 flex flex-col md:flex-row justify-around md:justify-center'>
        <div id='ProductCard1' 
        className={`
        HomeProductCard-div group
        ${inView ? 'hover:from-blue-100 hover:to-[#F0F0FB] motion-safe:hover:scale-105 motion-safe:hover:animate-[cardOut_150ms_ease-in] hover:cursor-pointer' : ''}
        ${inView ? 'opacity-100' : 'opacity-0'}
        `}
        onMouseEnter={() => {inView ? document.getElementById('ProductCard1').classList.add('motion-safe:animate-[cardIn_150ms_ease-in]') : ''}}
        >
          <Link to={'/store'} className='size-full'>
            <img src={img1} alt='photobook cover image' className='size-full object-cover xl:object-fill rounded-[39px] transition duration-500 group-hover:opacity-0' />
            <img src={activemimg1} alt='photobook hover image' className='size-full absolute bottom-0 object-fill rounded-[39px] transition duration-500 opacity-0 group-hover:opacity-100' />
            <div className='w-full h-16 lg:h-28 bg-black/60 absolute rounded-t-[39px] top-0'>
              <img src={logo1} alt='Logo' className='size-full object-contain' />
            </div>
            <div className='w-full h-28 bg-black/60 absolute bottom-0 rounded-b-[39px] flex justify-evenly text-white'>
              <div className='text-8xl'>-</div>
              <span className='my-auto'>Store</span>
              <div className='text-8xl'>-</div>
            </div> 
            <div className='w-full h-16 hidden lg:block bg-black/60 absolute bottom-[18%] text-xl text-white opacity-0 group-hover:opacity-100 transition duration-500 group-hover:delay-200'>
              <span className='relative top-4'>Browse our collections so far</span>
            </div> 
          </Link>
        </div>
        <div id='ProductCard2'
        className={`
          HomeProductCard-div group
          ${inView ? 'hover:from-blue-100 hover:to-[#F0F0FB] motion-safe:hover:scale-105 motion-safe:hover:animate-[cardOut_150ms_ease-in] hover:cursor-pointer' : ''}
          ${inView ? 'opacity-100' : 'opacity-0'}
        `}
        onMouseEnter={() => {inView ? document.getElementById('ProductCard2').classList.add('motion-safe:animate-[cardIn_150ms_ease-in]') : ''}}
        >
          <Link to={'/store/snapframes'} className='size-full'>
            <img src={img2} alt='snapframe cover image' className='size-full object-cover xl:object-fill rounded-[39px] transition duration-500 group-hover:opacity-0' />
            <img src={activemimg2} alt='snapframe hover image' className='size-full absolute bottom-0 object-fill rounded-[39px] transition duration-500 opacity-0 group-hover:opacity-100' />
            <div className='w-full h-16 lg:h-28 bg-black/60 absolute rounded-t-[39px] top-0'>
              <img src={logo1} alt='Logo' className='size-full object-contain' />
            </div>
            <div className='w-full h-28 bg-black/60 absolute bottom-0 rounded-b-[39px] flex justify-evenly text-white'>
              <div className='text-8xl'>-</div>
              <span className='my-auto'>SnapFrames</span>
              <div className='text-8xl'>-</div>
            </div> 
            <div className='w-full h-16 hidden lg:block bg-black/60 absolute bottom-[18%] text-xl text-white opacity-0 group-hover:opacity-100 transition duration-500 group-hover:delay-200'>
              <span className='relative top-4'>A piece of history in the size of your choosing</span>
            </div> 
          </Link>
        </div>
        <div id='ProductCard3'
        className={`
          HomeProductCard-div group
          ${inView ? 'hover:from-blue-100 hover:to-[#F0F0FB] motion-safe:hover:scale-105 motion-safe:hover:animate-[cardOut_150ms_ease-in] hover:cursor-pointer' : ''}
          ${inView ? 'opacity-100' : 'opacity-0'}
        `}
        onMouseEnter={() => {inView ? document.getElementById('ProductCard3').classList.add('motion-safe:animate-[cardIn_150ms_ease-in]') : ''}}
        >
          <Link to={'/store/snapmerch'} className='size-full'>
            <img src={img3} alt='snapmerch cover image' className='size-full object-cover xl:object-fill object-[50%_30%] rounded-[39px] transition duration-500 group-hover:opacity-0' />
            <img src={activemimg3} alt='snapmerch cover image' className='size-full absolute bottom-0 object-contain rounded-[39px] bg-white transition duration-500 opacity-0 group-hover:opacity-100' />
            <div className='w-full h-16 lg:h-28 bg-black/60 absolute rounded-t-[39px] top-0'>
              <img src={logo1} alt='Logo' className='size-full object-contain' />
            </div>
            <div className='w-full h-28 bg-black/60 absolute bottom-0 rounded-b-[39px] flex justify-evenly text-white'>
              <div className='text-8xl'>-</div>
              <span className='my-auto'>SnapMerch</span>
              <div className='text-8xl'>-</div>
            </div> 
            <div className='w-full h-16 hidden lg:block bg-black/60 absolute bottom-[18%] text-xl text-white opacity-0 group-hover:opacity-100 transition duration-500 group-hover:delay-200'>
              <span className='relative top-4'>Appreciation never goes unanswered</span>
            </div> 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeProductCards
