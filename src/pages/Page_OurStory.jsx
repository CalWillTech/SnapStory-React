import Breadcrumb_Misc from "../components/Breadcrumb_Misc"
import img1 from "../images/SnapStory-portrait-landscape.jpeg"
import { InView } from "react-intersection-observer"

function Page_OurStory() {
  return (
    <div className="Page_OurStory w-screen max-h-[1000vh] h-auto bg-gradient-to-b from-gray-100 to-neutral-300">
      <Breadcrumb_Misc/>
      <InView>
        {({ inView, ref }) => (
          <div className="ImageWrapper BlackTextOutline
          w-screen max-h-[200vh] h-[30rem] flex">
            <img ref={ref} src={img1} alt="image 1" className="size-full flex-[1_0_100%] object-fill" />
            <div className="size-full flex-[1_0_100%] relative right-full flex bg-black/55"> 
              <span className={`m-auto text-white font-bold text-3xl lg:text-5xl
              opacity-0 transition-opacity duration-[500ms] max-lg:opacity-100
              ${inView ? 'opacity-100' : 'opactiy-0'}`}>
                Our story, Our mission
              </span>
            </div>
          </div>     
        )}
      </InView>
      <div className='ShippingDocumentWrapper w-3/4 mx-auto mt-12 pb-12 text-base lg:text-lg'>
        At <b>© SnapStory</b>, our mission is to craft high-quality picture frames that 
        encapsulate cherished memories and moments. With an unwavering commitment to craftsmanship, 
        creativity, and customer satisfaction, we strive to provide beautifully designed frames that not only 
        enhance the aesthetic appeal of any space but also preserve and 
        showcase the stories behind each photograph or artwork. Our dedication to innovation and sustainability 
        ensures that every frame we produce reflects our values of excellence, authenticity, and environmental responsibility. 
        We aspire to be the go-to destination for individuals seeking unique and timeless 
        framing solutions that bring joy and inspiration to their lives.
        <br/><br/>
        <span className="text-black/45 text-end text-xs">Made by ChatGPT 3.5</span>
      </div>
    </div>
  )
}

export default Page_OurStory
