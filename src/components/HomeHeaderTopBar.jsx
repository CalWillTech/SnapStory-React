import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function HomeHeaderTopBar() {

  let [slideIndex, setSlideIndex] = useState(0);
  let slides = document.getElementsByClassName('TextBox');
  const [intervalToggle, setIntervalToggle] = useState(false);
  const [mouseOverToggle, setMouseOverToggle] = useState(true);
  const [galleryID, setGalleryID] = useState([]);

  function plusSlides() {
    var gallery = document.getElementById("HeaderTopTextGallery")
    if(slideIndex <= slides.length) {
      gallery.scrollLeft = (slides.item(slideIndex).clientWidth * (slideIndex + 1))
      if((slideIndex + 1) === slides.length) {
        gallery.scrollLeft = 0 
      }
    }
    if(slideIndex >= slides.length) {
      slideIndex = 0
    }
    switch (slideIndex === (slides.length - 1)) {
      case true:
        setSlideIndex(slideIndex = 0)
        break;
      case false:
        setSlideIndex(slideIndex = slideIndex + 1)
        break;
    }
  }
  function subtractSlides() {
    var gallery = document.getElementById("HeaderTopTextGallery")
    if(slideIndex <= slides.length) {
      gallery.scrollLeft = (slides.item(slideIndex).clientWidth * (slideIndex - 1))
      if(slideIndex === 0) { 
        gallery.scrollLeft = 9999
      }
    }
    if(slideIndex < 0) {
      slideIndex = slides.length - 1
    }
    setSlideIndex(
      slideIndex === 0 ?
      slides.length - 1 : 
      slideIndex = slideIndex - 1
    )
  }

  function handleMouseOver() {
    setMouseOverToggle(!mouseOverToggle)
    switch (mouseOverToggle == true) {
      case true:
        clearInterval(galleryID)
        break;
      case false:
        clearInterval(galleryID)
        galleryInterval = setInterval(()=>{
          plusSlides()
          if(slideIndex === slides.length - 1) {
            setSlideIndex(0)
          }
        }, [7200])
        setGalleryID(galleryInterval)
        break;
    }
  }

  let galleryInterval;
  const handleAutoGallery = (e)=>{
    if(arrowFwRef.current.contains(e.target) || arrowBwRef.current.contains(e.target)) {
      clearInterval(galleryID)
      if(intervalToggle == true) {
        galleryInterval = setInterval(()=>{
          plusSlides()
        }, [7200])
        setGalleryID(galleryInterval)
      }
      setIntervalToggle(false)
    }
    if(intervalToggle == false) {
      clearInterval(galleryID)
      galleryInterval = setInterval(()=>{
        plusSlides()
        if(slideIndex === slides.length - 1) {
          setSlideIndex(0)
        }
      }, [7200])
      setIntervalToggle(true)
      setGalleryID(galleryInterval)
    }
  }

  let arrowFwRef = useRef();
  let arrowBwRef = useRef();
  useEffect(()=>{
    window.addEventListener('load', handleAutoGallery);
    document.addEventListener('click', handleAutoGallery);
    document.addEventListener('wheel', handleAutoGallery);
    return() => {
      window.removeEventListener('load', handleAutoGallery);
      document.removeEventListener('click', handleAutoGallery);
      document.removeEventListener('wheel', handleAutoGallery);
    }
  })

  return (
    <div className={`HeaderTopBar HeaderAlert 
    w-screen h-[2rem] px-6 z-[9] sticky -top-8 flex justify-center border-b-[1px] border-zinc-400 
    bg-gradient-to-r from-blue-800 via-black to-fuchsia-700
    motion-safe:transition-all duration-500`}
    id="HeaderAlert">
        <button ref={arrowBwRef} className="size-6 my-auto rounded-full text-white"
        onClick={()=>{subtractSlides()}}>
          <FontAwesomeIcon icon={faChevronLeft} className="size-6" />
        </button>
        
        <div id="HeaderTopTextGallery" 
        className="HeaderTopTextGallery w-[74rem] h-full flex justify-start overflow-y-hidden overflow-x-auto md:overflow-x-hidden scroll-smooth snap-x snap-center"
        onMouseEnter={()=>{handleMouseOver()}}
        onMouseLeave={()=>{handleMouseOver()}}
        >
          <div className="TextBox 1 m-auto flex-[1_0_100%] motion-safe:transition-all duration-500 relative font-medium text-center text-white bg-rose-800/60">
            <Link to={"/store/item/0003"} className="underline underline-offset-2 hover:no-underline hover:border-b-4 hover:border-double">
              50%
            </Link> 
            {" off Spring & Summer Collection"}
          </div>
          <div className="TextBox 2 m-auto flex-[1_0_100%] motion-safe:transition-all duration-500 font-medium text-center text-white bg-violet-600/60">
            {"Currently visiting "}
            <Link to={"/tour-locations"} className="underline underline-offset-2 hover:no-underline hover:border-b-4 hover:border-double">
              Melbourne, Fl, US
            </Link>.
          </div>
          <div className="TextBox 3 m-auto flex-[1_0_100%] motion-safe:transition-all duration-500 font-medium text-center text-white bg-emerald-700/60">
            {"Check out our growing "}
            <Link to={"/photo-book"} className="underline underline-offset-2 hover:no-underline hover:border-b-4 hover:border-double">
              Photo Book
            </Link>. 
          </div>
        </div>

        <button ref={arrowFwRef} className="size-6 my-auto rounded-full text-white"
        onClick={()=>{plusSlides()}}>
          <FontAwesomeIcon icon={faChevronRight} className="size-6" />
        </button>
    </div>
  )
}

export default HomeHeaderTopBar
