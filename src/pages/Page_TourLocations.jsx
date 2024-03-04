import { InView } from "react-intersection-observer"
import img1 from "../images/yong-chuan-tan-tWdhZivlOig-unsplash.jpg"
import img2 from "../images/jhin5-2MYcbBBh9kE-unsplash.jpg"
import img3 from "../images/joe-lavigne-CV1KEOa7258-unsplash.jpg"
import img4 from "../images/actionvance-eXVd7gDPO9A-unsplash.jpg"
import SnapDivider from "../components/SnapDivider"
import Breadcrumb_Misc from "../components/Breadcrumb_Misc"

function Page_TourLocations() {

  return (
    <div className="TourLocations w-screen max-h-[1000vh]">
      <Breadcrumb_Misc />
      <div className="CurrentLocationWrappper w-full h-auto flex flex-col justify-between">
        <InView threshold={0.9}>
          {({ inView, ref}) => (
            <div className="TourImageWrapper w-full h-52 lg:h-[20rem] sticky top-[4.8rem] flex flex-wrap justify-center">
              <img src={img1} alt="image 1" className="flex-[1_0_100%] h-full object-cover object-[70%_68%] blur-[1px]" />
              <div ref={ref} className={`TourLocationText
              h-20 lg:pt-8 relative bottom-full flex flex-col 
              text-3xl md:text-4xl font-bold leading-9 text-blue-50 text-center
              opacity-0 transition-opacity duration-[500ms] max-lg:opacity-100
              ${inView ? 'opacity-100' : 'opactiy-0'}`}>
                <span className="w-auto mx-auto leading-snug underline underline-offset-8">
                  Currently Visiting: <br/>
                  <br/>
                  Maxwell C. King Center for the Performing Arts, <br/>
                  Melbourne, Fl, US  
                </span>
              </div>
            </div>
          )}
        </InView>
        <div className="MapLocationWarapper w-full h-[25rem] sticky top-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.207887288944!2d-80.6719812883332!3d28.17059250480639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de057e03d24bcd%3A0x29fc5d4fb73f275e!2sMaxwell%20C.%20King%20Center%20for%20the%20Performing%20Arts!5e0!3m2!1sen!2sus!4v1704807986103!5m2!1sen!2sus" 
            className="w-full h-full border-0"
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
      <SnapDivider />
      <div className="NextDestinationWrappper w-full h-auto flex flex-col">
        <InView threshold={0.9}>
          {({ inView, ref}) => (
            <div className="TourImageWrapper w-full h-52 lg:h-[20rem] sticky top-[4.8rem] flex flex-wrap justify-center">
              <img src={img2} alt="image 2" className="basis-full h-full object-cover blur-[1px]"/>
              <div ref={ref} className={`TourLocationText
              h-20 lg:pt-8 relative bottom-full flex flex-col 
              text-3xl md:text-4xl font-bold leading-9 text-blue-50 text-center
              opacity-0 transition-opacity duration-[500ms] max-lg:opacity-100
              ${inView ? 'opacity-100' : 'opactiy-0'}`}>
                <span className="w-auto mx-auto mt-20 leading-snug underline underline-offset-8">
                  Next Destination
                </span>
              </div>
            </div>
          )}
        </InView>
        <InView threshold={0.2} id="NextDestinationTag">
          {({ inView, ref}) => (
            <div className="BlackTextOutline max-h-[200vh] h-[35rem] text-white sticky top-full flex flex-col flex-wrap">
              <div className="flex-[1_0_100%] h-[35rem] w-screen">
                <img ref={ref} src={img3} alt="image 3" className="size-full object-cover" />
              </div>
              <div className={`flex-[1_0_100%] flex relative right-full lg:right-2/3
              opacity-0 transition-opacity duration-[500ms] max-lg:opacity-100
              ${inView ? 'opacity-100' : 'opactiy-0'}`}>
                <div className="basis-1/2 flex border-r-4 rounded-full border-white">
                  <span className="font-bold text-3xl lg:text-5xl m-auto pl-4 lg:pl-20 underline">
                    Next Stop...
                    <br/><br/>
                    Leaving...
                  </span>
                </div>
                <div className="basis-1/2 flex">
                  <span className="font-bold text-3xl lg:text-5xl m-auto pl-4">
                    LA, Saenger Theatre,
                    <br/><br/>
                    3/22/2024
                  </span>
                </div>
              </div>
            </div>
          )}
        </InView>
      </div>
      <SnapDivider />
      <div className="PastLocationWrappper w-full h-auto max-lg:flex flex-col">
        <InView threshold={0.9}>
          {({ inView, ref}) => (
            <div className="TourImageWrapper w-full h-52 sticky top-[4.8rem] flex flex-wrap justify-center">
              <img src={img4} alt="image 4" className="flex-[1_0_100%] h-full object-cover object-[70%_60%] blur-[1px]" />
              <div ref={ref} className={`TourLocationText 
              h-20 relative bottom-2/3 text-3xl md:text-4xl font-bold leading-9 text-blue-50 text-center 
              opacity-0 transition-opacity duration-[500ms] max-lg:opacity-100
              ${inView ? 'opacity-100' : 'opactiy-0'}`}>
                <span className="underline underline-offset-8">
                  Past Tour Locations
                </span>
              </div>
            </div>

          )}

        </InView>
        <div className="w-full h-2/3 px-20 flex max-lg:flex-wrap gap-4 sticky top-full bg-gradient-to-br from-stone-200 to-neutral-300">
          <div className="w-full h-auto my-4 flex flex-col justify-start border-x-2 border-black text-center text-2xl text-black">
            <span className="w-1/2 h-12 mx-auto text-4xl font-bold border-b-4 border-black">
              2020
            </span>
            <ul className="w-2/3 mx-auto text-left text-xl list-disc">
              <li>FL, The Plaza Live</li>
              <li>FL, Hard Rock Cafe</li>
              <li>SC, New Brookland Tavern</li>
              <li>LA, Pereservation Hall</li>
              <li>LA, Joy Theater</li>
            </ul>
          </div>
          <div className="w-full h-auto my-4 flex flex-col justify-start border-x-2 border-black text-center text-2xl text-black">
            <span className="w-1/2 h-12 mx-auto text-4xl font-bold border-b-4 border-black">
              2021
            </span>
            <ul className="w-2/3 mx-auto text-left text-xl list-disc">
              <li>FL, The Plaza Live</li>
              <li>FL, Hard Rock Cafe</li>
              <li>SC, New Brookland Tavern</li>
              <li>LA, Pereservation Hall</li>
              <li>LA, Joy Theater</li>
            </ul>
          </div>
          <div className="w-full h-auto my-4 flex flex-col justify-start border-x-2 border-black text-center text-2xl text-black">
            <span className="w-1/2 h-12 mx-auto text-4xl font-bold border-b-4 border-black">
              2022
            </span>
            <ul className="w-2/3 mx-auto text-left text-xl list-disc">
              <li>FL, The Plaza Live</li>
              <li>FL, Hard Rock Cafe</li>
              <li>SC, New Brookland Tavern</li>
              <li>LA, Pereservation Hall</li>
              <li>LA, Joy Theater</li>
            </ul>
          </div>
          <div className="w-full h-auto my-4 flex flex-col justify-start border-x-2 border-black text-center text-2xl text-black">
            <span className="w-1/2 h-12 mx-auto text-4xl font-bold border-b-4 border-black">
              2023
            </span>
            <ul className="w-2/3 mx-auto text-left text-xl list-disc">
              <li>FL, The Plaza Live</li>
              <li>FL, Hard Rock Cafe</li>
              <li>SC, New Brookland Tavern</li>
              <li>LA, Pereservation Hall</li>
              <li>LA, Joy Theater</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page_TourLocations
