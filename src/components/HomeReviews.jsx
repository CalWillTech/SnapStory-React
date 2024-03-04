import logo1 from '../images/canon-logo-red.svg'
import logo2 from '../images/absolute-logo-black.png'
import logo3 from '../images/MKG-logo-pink.svg'
import { InView, useInView } from 'react-intersection-observer'

function HomeReviews() {
  
  const { ref, inView, } = useInView({ triggerOnce: true, threshold: 0.9, });
  return (
    <div className="HomeReviews w-screen h-[40vh] flex flex-col bg-gradient-to-b from-gray-300 to-stone-100">
      <div className='ProductDivider w-[20%] h-1 mx-auto rounded-[70%] bg-black'>
      </div>
      <InView triggerOnce={true} threshold={0.9}>
        {({inView, ref,}) => (
          <div ref={ref} className={`${inView ? 'opacity-100' : 'opacity-0'} w-full h-1/2 flex flex-col justify-center text-4xl sm:text-5xl lg:text-7xl text-center transition-opacity duration-[350ms] max-lg:opacity-100`}>
            <span>Distinguished Among the Best</span>
          </div>
        )}
      </InView>
      <div ref={ref} className='w-full h-1/3 sm:h-1/2 flex justify-center gap-[10%]'>
        <img src={logo1} alt='logo 1' className={`w-1/4 lg:w-[15%] h-full opacity-0 transition-opacity ${inView ? 'opacity-100' : 'opacity-0'}`} />
        <img src={logo2} alt='logo 2' className={`w-1/4 lg:w-[15%] h-full my-auto object-contain opacity-0 transition-opacity delay-150 ${inView ? 'opacity-100' : 'opacity-0'}`} />
        <img src={logo3} alt='logo 3' className={`w-1/4 lg:w-[13%] h-full opacity-0 transition-opacity delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      <div className='ProductDivider w-[90%] h-1.5 mx-auto rounded-[100%] relative max-sm:top-[13%] bg-black'>
      </div>
    </div>
  )
}

export default HomeReviews
