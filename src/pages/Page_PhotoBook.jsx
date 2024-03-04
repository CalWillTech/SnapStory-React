import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { PhotoBookData } from "../data/PhotoBookData";
import Breadcrumb_Misc from "../components/Breadcrumb_Misc";

function Page_PhotoBook() {

  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [div2020Toggle, setDiv2020Toggle] = useState(false);
  const [div2021Toggle, setDiv2021Toggle] = useState(false);
  const [div2022Toggle, setDiv2022Toggle] = useState(false);
  const [div2023Toggle, setDiv2023Toggle] = useState(false);
  const [div2024Toggle, setDiv2024Toggle] = useState(false);
  let [currentYear, setCurrentYear] = useState(2024)
  

  function resetToggle() {
    div2024Toggle ? setDiv2024Toggle(!div2024Toggle) : null
    div2023Toggle ? setDiv2023Toggle(!div2023Toggle) : null
    div2022Toggle ? setDiv2022Toggle(!div2022Toggle) : null
    div2021Toggle ? setDiv2021Toggle(!div2021Toggle) : null
    div2020Toggle ? setDiv2020Toggle(!div2020Toggle) : null
  } 

  function handleYears(e) {
    resetToggle()
    switch (e.target.innerHTML) {
      case '2024':
        div2024Toggle ? 
        null : 
        setDiv2024Toggle(true);
        setCurrentYear(currentYear=2024)
        break;
      case '2023':
        div2023Toggle ? 
        null : 
        setDiv2023Toggle(true);
        setCurrentYear(currentYear=2023)
        break;
      case '2022':
        div2022Toggle ? 
        null : 
        setDiv2022Toggle(true);
        setCurrentYear(currentYear=2022)
        break;
      case '2021':
        div2021Toggle ? 
        null : 
        setDiv2021Toggle(true);
        setCurrentYear(currentYear=2021)
        break;
      case '2020':
        div2020Toggle ? 
        null : 
        setDiv2020Toggle(true);
        setCurrentYear(currentYear=2020)
        break;
      default:
        throw console.error('default error');
    }
  }

  const itemID = [...PhotoBookData].filter((e)=> {
    if(e.date.match(currentYear) && !e.description.match(currentYear)) return e;
  }).map((item)=> {return item.id})

  let dropdownRef = useRef();
  useEffect(() => {
    let handleOutBoundClick = (e) => {
      if(!dropdownRef.current.contains(e.target)) {
        setDropdownToggle(false);
      }
    };
    document.addEventListener('click', handleOutBoundClick);
    return() => {
      document.removeEventListener('click', handleOutBoundClick);
    }
  });
  
  // *main* \\
  return (
    <div className="PhotoBookPage w-screen h-auto">
      <Breadcrumb_Misc />
      <div className="YearSelectionWrapper 
      w-full h-[50vh] relative flex justify-center
      bg-gradient-to-br from-cyan-600 via-gray-900 to-fuchsia-900
      bg-[length:125%_125%] hover:bg-right transistion ease-in-out duration-500
      animate-[backgroundLoop_2s_linear_infinite]">
        <div className="w-60 h-20 m-auto flex flex-col justify-normal gap-1 text-center text-xl border-2 border-white rounded-full bg-violet-400/20">
          <span className="text-white">Select Year:</span>
          <div id='SortDropdownWrapper' className='SortToggleDropdown group z-[1] w-40 h-6 mx-auto'>
            <button ref={dropdownRef} onClick={() => {setDropdownToggle(!dropdownToggle)}} className='SortDropdownBtn mx-auto flex justify-evenly text-white'>
              <FontAwesomeIcon icon={faChevronDown} className={`${dropdownToggle ? 'rotate-180' : 'rotate-0'} size-10 ml-1 my-auto transition-all duration-300`} />
            </button>
            <div id='SortDropdown' className={`${dropdownToggle ? 'block' : 'hidden'} SortDropdown group w-full h-auto mt-1 flex flex-col justify-evenly text-lg rounded-b-xl shadow-md shadow-black bg-gradient-to-b from-neutral-50 to-neutral-200`}>
              <button onClick={handleYears} className='hover:bg-black/30'>2024</button>
              <button onClick={handleYears} className='hover:bg-black/30'>2023</button>
              <button onClick={handleYears} className='hover:bg-black/30'>2022</button>
              <button onClick={handleYears} className='hover:bg-black/30'>2021</button>
              <button onClick={handleYears} className='hover:bg-black/30 rounded-b-xl'>2020</button>
              </div>
          </div>
        </div>
      </div>

      <div className={`2024PhotoBookWrapper w-full min-h-[80vh] h-auto flex flex-col bg-gradient-to-b from-gray-900 to-slate-900`}>
        <div className="2024Header w-full h-16 overflow-hidden 
        text-center text-6xl text-white
        bg-[linear-gradient(135deg,#706ae2_0%,_#262655_15%,_#344ba7_30%,_#321e49_50%,_#a65dd0_70%,_#203f53_85%,_#27d6e7_100%)]"> 
          <span id="PhotoBook2024Div" className="PhotoBookText">{currentYear}</span>
        </div>
        <div className="PhotoBookCardsWrapper size-full p-[5vw] flex flex-wrap justify-start gap-x-[2vw] gap-y-20">
          {PhotoBookData.filter((e)=> {
            if(e.date.match(currentYear) && !e.description.match(currentYear)) return e;
          }).map((item)=> {
            return (
              <React.Fragment key={item.id}>
                <div className="PhotoBookCard w-80 h-40 basis-full lg:basis-[48%] border-8 border-white rounded-lg flex"> 
                  <div className="size-full basis-2/3 border-r-2 border-white text-white bg-gradient-to-r from-zinc-800 to-neutral-700">
                    <ul className="h-full px-8 flex flex-col justify-around text-base sm:text-2xl list-disc">
                      <li>{item.description}</li>
                      <li>{item.location}</li>
                      <li>{item.date}</li>
                    </ul>
                  </div>
                  <div className="size-full basis-1/3 border-4 border-black 
                  bg-gradient-to-br from-cyan-800 to to-fuchsia-900 via-black/80 
                  hover:border-yellow-400 hover:from-cyan-700 hover:to-fuchsia-700
                  transition duration-200">
                    <Link to={`/store/item/${item.link}`} >
                      <img src={item.image} className="size-full object-contain cursor-pointer" />
                    </Link>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
          {itemID.length >= 1 ? 
            null
            :
            <div className="PhotoBookCard w-80 h-40 basis-full lg:basis-[48%] border-8 border-gray-400/80 rounded-lg flex"> 
              <div className="size-full basis-2/3 border-r-2 border-gray-400/80 text-gray-400/80 bg-gradient-to-r from-zinc-900 to-neutral-800">
                <ul className="h-full px-8 flex flex-col justify-around text-2xl list-disc">
                  <li className="w-2/3 sm:w-3/4 bg-neutral-500 rounded-3xl"></li>
                  <li className="w-4/5 sm:w-1/3 bg-neutral-500 rounded-3xl"></li>
                  <li className="w-full sm:w-1/2 bg-neutral-500 rounded-3xl"></li>
                </ul>
              </div>
              <div className="size-full basis-1/3 border-4 border-black 
              bg-gradient-to-br from-cyan-800/20 to to-fuchsia-900/20 via-black/80">
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Page_PhotoBook
