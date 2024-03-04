import { useEffect, useState } from "react"
import img1 from "../images/Home_Deal_Portrait_01.jpeg"
import { Link, useLocation } from "react-router-dom"
import dayjs from "dayjs"

function Modal_50OffDeal() {
  const [modalToggle, setModalToggle] = useState(false)
  const currenthref = useLocation().pathname
  const [justClicked, setJustClicked] = useState(false)
  const [currentTime, setCurrentTime] = useState(dayjs())
  const deadline = dayjs("2024-3-24 23:59:59")
  const [deadlineDate, setDeadlineDate] = useState(deadline.date() - currentTime.date() + (31 * (deadline.month() - currentTime.month())))
  const [deadlineHour, setDeadlineHour] = useState(deadline.hour() - currentTime.hour())
  const [deadlineMinute, setDeadlineMinute] = useState(deadline.minute() - currentTime.minute())
  const [deadlineSecond, setDeadlineSecond] = useState(deadline.second() - currentTime.second())
  const [timeoutID, setTimeoutID] = useState("");


  const handleModalToggle = (item)=>{
    var modal = item.currentTarget.classList
    modal.add("hidden")
    setModalToggle(modalToggle == true ? false : true)
    clearTimeout(timeoutID);
    handleCurrentHref()
  }

  const handleCurrentTime = ()=>{
    let now = dayjs()
    switch (currentTime != now.second()) {
      case true:
        setCurrentTime(dayjs())
        setDeadlineDate((dayjs().date() * -1) + deadline.date())
        setDeadlineHour(deadline.hour() - dayjs().hour())
        setDeadlineMinute(deadline.minute() - dayjs().minute())
        setDeadlineSecond(deadline.second() - dayjs().second())
        break;
      case false:
        null;
        break;
    }
  }

  const handleCurrentHref = () => {
    if(currenthref === "/" && modalToggle === false && justClicked === false) {
      let id = setTimeout(()=>{
        setModalToggle(true)
        setJustClicked(true)
      }, [6000])
      setTimeoutID(id)
    }
    if(currenthref !== "/" && justClicked !== false) {
      setJustClicked(false)
    }
  }

  useEffect(()=>{
    let handleInterval = ()=>{
      setInterval(()=> {handleCurrentTime()}, [1000])
    }
    window.addEventListener("load", handleInterval)
    window.addEventListener("load", handleCurrentHref)
    document.addEventListener("click", handleCurrentHref)
    return()=>{
      window.removeEventListener("load", handleInterval)
      window.removeEventListener("load", handleCurrentHref)
      document.removeEventListener("click", handleCurrentHref)
    }
  })

  if(modalToggle == true) {
  return (
    <div id="50DealModal" className="Modal flex flex-wrap">
      <div className='50DealOffScreen w-full h-[110vh] basis-full bg-[rgba(0,0,0,_0.65)] cursor-pointer' 
      onClick={(item)=>{handleModalToggle(item)}}
      >
      </div>
      <div className="w-screen lg:w-[60rem] h-[80%] p-4 m-auto relative bottom-full flex flex-col lg:flex-row flex-wrap rounded-2xl border-2 border-slate-300 shadow-lg shadow-cyan-700 bg-gradient-to-br from-cyan-800 via-black to-fuchsia-900">
        <div className="max-sm:w-full max-lg:w-1/2 h-2/3 basis-full rounded-t-2xl border-b-[1px]border-b-cyan-400 bg-gray-700/40">
          <img src={img1} alt="Deal Image" className="size-full object-contain" />
        </div>
        <div className="max-sm:w-full max-lg:w-1/2 h-1/3 pb-2 basis-full flex flex-col max-sm:relative right-full rounded-b-2xl lg:bg-gradient-to-br from-cyan-800 via-slate-500 to-fuchsia-700">
          <div className="w-full h-full lg:h-2/3 flex flex-col">
            <span className="mx-auto font-bold text-white">
              From 1/11/2024 until 3/24/2024
            </span> 
            <span className="mx-auto mt-4 font-black leading-none text-[4rem] lg:text-[6rem] text-white">
              {deadlineDate}:
              {deadlineHour >= 10 ? deadlineHour : "0" + deadlineHour}:
              {deadlineMinute >= 10 ? deadlineMinute : "0" + deadlineMinute}
              <span className="text-4xl">:{deadlineSecond >= 10 ? deadlineSecond : "0" + deadlineSecond}</span>
            </span> 

          </div>
          <Link to={"/store/item/0003"} 
          className="Default-Button w-2/3 lg:w-80 max-lg:mb-2"
          onClick={(item)=>{handleModalToggle(item)}}
          >
            <button 
            id="Btn"
            className="size-full"
            onMouseEnter={() => {document.getElementById('Btn').classList.add('motion-safe:animate-[btnIn_150ms_ease-in]')}}
            >
              <span className="font-bold text-xl lg:text-3xl">
                Go to Deal!
              </span>
            </button>
          </Link>
          <button 
          id="Btn"
          className="Default-Button w-1/2 lg:w-60 max-lg:mb-4"
          onMouseEnter={() => {document.getElementById('Btn').classList.add('motion-safe:animate-[btnIn_150ms_ease-in]')}}
          onClick={(item)=>{handleModalToggle(item)}}
          >
            <span className="font-bold text-xl lg:text-3xl m-auto">
              No, Thanks.
            </span> 
          </button>
        </div>
      </div>
    </div>
  )}
}

export default Modal_50OffDeal
