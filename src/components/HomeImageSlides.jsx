import { HomeSlidesData } from '../data/HomeImageSlidesData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, } from '@fortawesome/free-solid-svg-icons'
import { InView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomeImageSlides() {

  let [slideIndex, setSlideIndex] = useState(0);
  let slides = document.getElementsByClassName("SlideWrapper");
  let [buttonText, setButtonText] = useState("9/3/2023 - 1/1/2024 Collection");
  let [buttonLink, setButtonLink] = useState("/store/item/0010");

  let prevMouse;
  let isDown;
  let startX;
  const mouseDownHandle = (e) => {
    e.preventDefault();
    if(document.body.clientWidth > 768) {
      isDown = true
      startX = e.pageX;
    }
  };
  const mouseLeaveHandle = () => {
    isDown = false
  };
  const mouseUpHandle = () => {
    var slider = document.getElementById('Slides');
    prevMouse = slider.scrollLeft
    if(document.body.clientWidth > 768) {
      isDown = false
    }
    slideIndex = prevMouse < slider.clientWidth ? 0: prevMouse < slider.clientWidth * 2 ? 1 : prevMouse < slider.clientWidth * 3 ? 2 : 3
  };
  const mouseMoveHandle = (e) => {
    var slider = document.getElementById('Slides');
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 0.15;    // Slider Speed
    slider.scrollLeft = slider.scrollLeft - walk;
    if(prevMouse > (slider.clientWidth * 2)) return;
  };

  function moveSlideForward() {
    var gallery = document.getElementById("Slides")
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
  function moveSlideBackward() {
    var gallery = document.getElementById("Slides")
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

  useEffect(()=>{
    const handleLink = ()=>{
      switch (slideIndex) {
        case 0:
          setButtonLink("store/item/0010");
          setButtonText("9/3/2023 - 1/1/2024 Collection");
          break;
        case 1:
          setButtonLink("store/item/0007");
          setButtonText("Girisha Oxana Concert Frames");
          break;
        case 2:
          setButtonLink("store/item/0007");
          setButtonText("Girisha Oxana Concert Frames");
          break;
        case 3:
          setButtonLink("store/item/0009");
          setButtonText("Dan Markus Concert Frames");
          break;
      }
    }
    document.addEventListener("click", handleLink)
    return()=>{
      document.removeEventListener("click", handleLink)
    }
  })

  return (
    <div id='ImageSlidesWrapper' className='ImageSlidesWrapper w-screen h-[90vh] overflow-hidden'>
        <div id='Slides' 
        className={`ImageSlidesImages w-full h-full flex overflow-x-auto md:overflow-x-hidden overflow-y-hidden cursor-grabbing scroll-smooth snap-center active:scroll-auto snap-x active:snap-none`} 
        onMouseDown={(e)=>mouseDownHandle(e)} 
        onMouseUp={(e)=>mouseUpHandle(e)} 
        onMouseLeave={(e)=>mouseLeaveHandle(e)} 
        onMouseMove={(e)=>mouseMoveHandle(e)}
        >
          {HomeSlidesData.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <InView triggerOnce={true} threshold={0.9} rootMargin='300px 0px'>
                  {({ inView, ref,}) => (
                  <div ref={ref} className={`SlideWrapper w-full h-full flex-[1_0_100%] flex flex-wrap`} draggable="false">
                    <div className='ImageWrapper size-full basis-full'>
                      <img src={item.image} alt={`image ${item.id}`} id={item.id} 
                      className={`${item.className} Slides size-full object-cover snap-end lg:active:snap-align-none`} 
                      draggable="false"
                      />
                    </div>
                    <div className='TextWrapper size-full basis-full py-[25vh] relative bottom-full max-sm:left-[22.5%] flex justify-center gap-20 md:gap-[25%]'>
                      <div className={`CaptionsLeft 
                      w-[60%] sm:w-1/4 h-auto mb-auto
                      text-center bg-black/45 rounded-[20px] opacity-0 transition-opacity
                      ${item.boxClassName} 
                      ${inView ? 'motion-safe:animate-[fadeInfromLeft_450ms_ease-in] opacity-100' : 'opacity-0'}`}>
                        <span className={`${item.specClassName}  text-base lg:text-2xl lg:leading-0 font-bold underline-offset-[6px]`}>
                          {item.boxText1}<br/>{item.BoxText1Emoji}
                        </span>
                        <span className={`${item.specClassName2} AppearOnSm_Caption sm:hidden text-xl sm:text-lg lg:text-2xl lg:leading-0 font-bold underline-offset-[6px]`}>
                          <br/>{item.boxText2}
                        </span>
                      </div>
                      <div id={item.animationTag2} 
                      className={`CaptionsRight 
                      w-1/4 min-h-10 md:h-auto mt-12 mb-auto
                      text-center opacity-0 transition-opacity delay-300
                      ${item.boxClassName} 
                      ${inView ? 'motion-safe:animate-[fadeInfromLeft_450ms_ease-in_300ms] opacity-100' : 'opacity-0'} `}>
                        <span className={`${item.specClassName2} Caption2 max-sm:hidden sm:inline-block text-xl sm:text-lg lg:text-2xl lg:leading-0 font-bold underline underline-offset-[6px]`}>
                          {item.boxText2}
                        </span>
                      </div>
                    </div>
                  </div>
                  )}
                </InView>
              </React.Fragment>
            )})
          }
        </div>
        <div 
        className={`
        HomeImageArrows-icon right-[2%]
        `} 
        onClick={()=>moveSlideForward()} 
        onMouseDown={(e)=>{e.preventDefault()}}
        onMouseEnter={() => {document.getElementById('ArrowForward1Btn').classList.add('motion-safe:animate-[btnLgIn_100ms_linear]')}}
        >
          <FontAwesomeIcon 
          icon={faChevronRight} 
          style={{color: "#ffffff",}} 
          id="ArrowForward1Btn"
          className='w-[60%] h-16 my-auto group-hover:scale-125 group-hover:animate-[btnLgOut_100ms_linear]'
          />
        </div>
        <Link 
        to={buttonLink} 
        className={`Default-Button w-80 h-20 absolute bottom-4 lg:bottom-[15%] left-12 lg:left-[42.5%]`}  
        >
          Go to <br/>
          <span className='text-xl font-bold'>{buttonText}</span>
        </Link>
        <div 
        className={`
        HomeImageArrows-icon left-[2%]
        `} 
        onClick={()=>moveSlideBackward()} 
        onMouseDown={(e)=>{e.preventDefault()}}
        onMouseEnter={() => {document.getElementById('ArrowBackward1Btn').classList.add('motion-safe:animate-[btnLgIn_100ms_linear]')}}
        >
          <FontAwesomeIcon 
          icon={faChevronLeft} 
          style={{color: "#ffffff",}} 
          id="ArrowBackward1Btn"
          className='w-[60%] h-16 my-auto group-hover:scale-125 group-hover:animate-[btnLgOut_100ms_linear]'
          />
        </div>
    </div>
  )
}
  
export default HomeImageSlides
