import { useInView } from 'react-intersection-observer'
import img1 from '../images/SnapStory-logos-3_white.png'

function SnapDivider() {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`w-full h-16 flex justify-normal overflow-hidden bg-black`}>
        <img src={img1} alt='logo' className={`${inView ? 'motion-safe:animate-[dividerLoop_5s_linear_infinite]' : ''} w-[26rem] h-[21rem] relative right-[20rem] bottom-[9.8rem] object-cover`} />
        <img src={img1} alt='logo' className={`${inView ? 'motion-safe:animate-[dividerLoop_5s_linear_infinite]' : ''} w-[26rem] h-[21rem] relative right-[20rem] bottom-[9.8rem] object-cover`} />
        <img src={img1} alt='logo' className={`${inView ? 'motion-safe:animate-[dividerLoop_5s_linear_infinite]' : ''} w-[26rem] h-[21rem] relative right-[20rem] bottom-[9.8rem] object-cover`} />
        <img src={img1} alt='logo' className={`${inView ? 'motion-safe:animate-[dividerLoop_5s_linear_infinite]' : ''} w-[26rem] h-[21rem] relative right-[20rem] bottom-[9.8rem] object-cover`} />
        <img src={img1} alt='logo' className={`${inView ? 'motion-safe:animate-[dividerLoop_5s_linear_infinite]' : ''} w-[26rem] h-[21rem] relative right-[20rem] bottom-[9.8rem] object-cover`} />
        <img src={img1} alt='logo' className={`${inView ? 'motion-safe:animate-[dividerLoop_5s_linear_infinite]' : ''} w-[26rem] h-[21rem] relative right-[20rem] bottom-[9.8rem] object-cover`} />
        <img src={img1} alt='logo' className={`${inView ? 'motion-safe:animate-[dividerLoop_5s_linear_infinite]' : ''} w-[26rem] h-[21rem] relative right-[20rem] bottom-[9.8rem] object-cover`} />
    </div>
  )
}

export default SnapDivider
