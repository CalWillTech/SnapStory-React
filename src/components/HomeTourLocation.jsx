import { useInView } from "react-intersection-observer";
import img1 from "../images/yong-chuan-tan-tWdhZivlOig-unsplash.jpg"

function HomeTourLocation() {

  const { ref, inView, } = useInView({ triggerOnce: true, threshold: 0.95, });
  return (
    <div className="HomeTourLocation w-screen h-[90vh] sm:min-h-[200vh] lg:min-h-0 bg-gradient-to-b flex flex-col justify-center from-gray-300 to-stone-50">
      <div className="TourLocationTextWrapper w-full h-[40%] overflow-hidden">
        <img src={img1} alt="current location imaage" className="w-full h-full z-50 object-cover object-[70%_68%] blur-[1px]" />
        <div ref={ref} className={`${inView ? 'opacity-100' : 'opactiy-0'} TourLocationText w-full h-full relative bottom-full flex flex-col justify-center text-xl md:text-4xl font-bold md:leading-9 text-blue-50 text-center opacity-0 transition-opacity duration-[350ms] max-lg:opacity-100`}>
          <span>
            Currently Visiting: <br/>
            <br/>
            Maxwell C. King Center for the Performing Arts, <br/>
            Melbourne, Fl, US  
          </span>
        </div>
      </div>
      <div className="MapLocationWarapper w-full h-full">
      <iframe 
        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.207887288944!2d-80.6719812883332!3d28.17059250480639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de057e03d24bcd%3A0x29fc5d4fb73f275e!2sMaxwell%20C.%20King%20Center%20for%20the%20Performing%20Arts!5e0!3m2!1sen!2sus!4v1704807986103!5m2!1sen!2sus"} 
        id="googleMap"
        className="w-full h-full border-0"
        allowFullScreen 
        loading="async" 
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
      </div>
    </div>
  )
}

export default HomeTourLocation
