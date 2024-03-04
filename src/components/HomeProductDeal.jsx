import { PrdouctDealData } from "../data/HomeProductDealData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, } from '@fortawesome/free-solid-svg-icons'
import { InView, useInView, } from 'react-intersection-observer'
import { Link } from "react-router-dom"
import React from "react"

function HomeProductDeal() {

  const handleArrowForward = (e) => {
    e.preventDefault();     
    const container = document.getElementById('DealSlides')
    let card = document.getElementById('DealCard')
    container.scrollLeft = container.scrollLeft + card.clientWidth    
  }

  const handleArrowBackward = (e) => {
    e.preventDefault();
    const container = document.getElementById('DealSlides')
    let card = document.getElementById('DealCard')
    container.scrollLeft = container.scrollLeft - card.clientWidth
  }
  
  const { ref, inView, } = useInView({ triggerOnce: true, threshold: 0.9, });
  return (
    <div className='HomeProductDeal w-screen h-screen sm:min-h-[200vh] lg:min-h-0
    flex flex-col justify-center bg-gradient-to-b from-gray-100 to-gray-300'>
      <div ref={ref} className={`${inView ? 'opacity-100' : 'opactiy-0'} SelectionText w-[90%] h-[15%] mx-auto flex justify-center opacity-0 transition-opacity duration-[350ms] max-lg:opacity-100`}>
        <span className={`my-auto text-4xl lg:text-7xl text-center font-bold`}>
          Capture the Latest Products
        </span>
      </div>
      <div className="SelectionWrapper w-[90%] min-h-[30rem] h-[70vh] mx-auto flex">
        <div className="ArrowBackwardWrapper w-[5%] lg:w-[10%] h-full flex justify-between">
          <div className="ArrowBackward w-20 h-40 my-auto hidden sm:flex justify-center">
            <FontAwesomeIcon 
            icon={faChevronLeft} 
            id="ArrowForward2Btn"
            className='size-10 sm:size-[70%] my-auto max-sm:absolute left-10 max-sm:bg-black/60 cursor-pointer motion-safe:hover:scale-125 motion-safe:hover:animate-[btnLgOut_100ms_linear] motion-reduce:hover:text-cyan-600'
            onClick={handleArrowBackward}
            onMouseEnter={() => {document.getElementById('ArrowForward2Btn').classList.add('animate-[btnLgIn_100ms_linear]')}}
            />
          </div>
          <div className="ArrowBackward_AppearOnMaxSm w-20 h-40 my-auto flex sm:hidden justify-center max-lg:text-white">
            <FontAwesomeIcon 
            icon={faChevronLeft} 
            id="ArrowForward2Btn"
            className='size-10 sm:size-[70%] max-sm:z-[1] my-auto max-sm:absolute left-10 max-sm:bg-black/60 cursor-pointer motion-reduce:hover:text-cyan-600'
            onClick={handleArrowBackward}
            onMouseEnter={() => {document.getElementById('ArrowForward2Btn').classList.add('motion-safe:animate-[btnLgIn_100ms_linear]')}}
            />
          </div>
          <div className="Divider h-[90%] w-2 lg:w-1 my-auto rounded-[100%] bg-black"></div>
        </div>
        <div id="DealSlides" className="ProductDealWrapper w-full h-full flex overflow-x-auto overflow-y-hidden transition-transform scroll-smooth snap-x">
          {PrdouctDealData.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <InView triggerOnce={true} threshold={0.08}>
                  {({ inView, ref,}) => (
                  <div ref={ref} key={item.id} id="DealCard" className={`${inView ? 'opacity-100 duration-500' : 'opacity-0 duration-500'} DealCard size-full flex-[1_0_18rem] lg:flex-[1_0_33.4%] flex flex-col justify-center snap-center md:snap-start opacity-0 transition-opacity`}>
                    <div className="DealCardWrapper max-lg:max-w-60 w-60 lg:w-[90%] h-[70%] mx-auto relative bottom-[5%] sm:bottom-[8.5%]">
                      <div 
                      className="
                      DealCardImg group 
                      w-full h-3/4 sm:h-full flex justify-center overflow-hidden 
                      border-2 border-b-0 rounded-t-3xl border-stone-900 
                      hover:cursor-pointer bg-white"
                      >
                        <Link to={`/store/item/${item.link}`}>
                          <img src={inView ? item.image : ""} alt={`Product ${item.id}`} className={`${inView ? item.className : "hidden"} size-full object-contain 2xl:object-cover object-center rounded-t-3xl inline-block group-hover:sm:hidden`} />
                          <img src={inView ? item.activeImage : ""} alt={`Product ${item.id}`} className={`${inView ? item.activeClassName : "hidden"} w-full h-full object-contain sm:object-cover object-center rounded-t-3xl hidden group-hover:sm:inline-block`} />
                        </Link>
                      </div>
                      <div className="DealCardPrice&Desc w-full h-[45%] sm:h-[28%] px-2 flex flex-col justify-center gap-3 text-center text-2xl text-stone-700 border-2 rounded-b-3xl border-stone-900 shadow-lg shadow-gray-600/65 bg-white">
                        <span className="font-bold text-base lg:text-xl">{item.description}</span>
                        <span>{item.discountPrice === '' ? item.price : <span className={`line-through hidden lg:block`}>{item.price}</span>} {item.discountPrice}</span>
                      </div>
                    </div>
                  </div>
                  )}
                </InView>
              </React.Fragment>
            );
          })}
        </div>
        <div className="ArrowForwardWrapper w-[5%] lg:w-[10%] h-full flex justify-between">
          <div className="Divider w-2 lg:w-1 h-[90%] my-auto rounded-[100%] bg-black"></div>
          <div className="ArrowForward hidden sm:flex justify-center w-20 h-40 my-auto">
            <FontAwesomeIcon 
            icon={faChevronRight} 
            id="ArrowBackward2Btn"
            className='size-10 sm:size-[70%] my-auto max-sm:absolute right-10 max-sm:bg-black/60 cursor-pointer motion-safe:hover:scale-125 motion-safe:hover:animate-[btnLgOut_100ms_linear] motion-reduce:hover:text-cyan-600'
            onClick={handleArrowForward}
            onMouseEnter={() => {document.getElementById('ArrowBackward2Btn').classList.add('motion-safe:animate-[btnLgIn_100ms_linear]')}}
            />
          </div>
          <div className="ArrowForward_AppearOnMaxSm sm:hidden flex justify-center w-20 h-40 my-auto max-lg:text-white">
            <FontAwesomeIcon 
            icon={faChevronRight} 
            id="ArrowBackward2Btn"
            className='size-10 sm:size-[70%] my-auto max-sm:absolute right-10 max-sm:bg-black/60 cursor-pointer motion-reduce:hover:text-cyan-600'
            onClick={handleArrowForward}
            onMouseEnter={() => {document.getElementById('ArrowBackward2Btn').classList.add('motion-safe:animate-[btnLgIn_100ms_linear]')}}
            />
          </div>
        </div>
      </div>
      <div className={`BrowseBtnWrapper w-full my-auto text-center text-3xl`}>
        <InView triggerOnce={true} threshold={0.9}>
          {({inView, ref,}) => (
            <Link to={'/store'} className="Default-Button">
              <button 
              id="BrowseBtn"
              ref={ref}
              className={`${inView ? 'opacity-100' : 'opacity-0'}`} 
              onMouseEnter={() => {document.getElementById('BrowseBtn').classList.add('motion-safe:animate-[btnIn_150ms_ease-in]')}}
              >
                Browse All
              </button>
            </Link>
          )}
        </InView>
      </div>
    </div>
  )
}

export default HomeProductDeal
