/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Breadcrumb_Misc from "../components/Breadcrumb_Misc"
import { faExclamation, faQuestion } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Page_FAQ() {

    const questionArray = document.getElementsByClassName("QuestionBox");
    const answerArray = document.getElementsByClassName("AnswerBox");

    function handleClick(e) {
        answerArray[e-1].classList.toggle("hidden")
        setTimeout(()=>{
            answerArray[e-1].classList.toggle("h-0")
            answerArray[e-1].classList.toggle("h-32")
        }, [])
    }

    useEffect(()=>{
        const handleEffect = ()=>{
            for(let i=0;i < questionArray.length;i++) {
                setTimeout(()=>{
                    questionArray[i].classList.remove("opacity-0")
                }, [150])
            }
        }
        document.addEventListener("click", handleEffect)
        return()=>{
            document.removeEventListener("click", handleEffect)
            handleEffect()
        }
    })
    
  return (
    <div className="Page_FAQ w-screen max-h-[1000vh] h-auto pb-12 bg-gradient-to-b from-gray-100 to-neutral-300">
      <Breadcrumb_Misc/>
      <div className="FAQWrapper size-3/4 mx-auto mt-12 pb-40 p-2 text-base lg:text-xl text-gray-100 bg-neutral-900">
        <ul className="FAQList size-full">
            <button className="QuestionBox w-full h-16 pt-2 flex opacity-0 animate-[fadeIn_300ms_ease-in_150ms]"
            onClick={()=>{handleClick(1)}}>
                <FontAwesomeIcon icon={faQuestion} className="size-8 pr-2" />
                <span>Are refunds free?</span>
            </button>
            <div className="AnswerBox w-full h-0 pt-2 px-2 hidden motion-safe:transition-all duration-300 bg-yellow-50">
                <FontAwesomeIcon icon={faExclamation} className="size-8 pr-2" />
                <span>
                    refunds are free up to 90 days after purchase, 
                    please refer to our <Link to={"/tour-locations"} className="text-cyan-500 font-bold underline">shipping and handling policy </Link>
                    for directions on returns.
                </span>
            </div>
            <button className="QuestionBox w-full h-16 pt-2 flex opacity-0 animate-[fadeIn_300ms_ease-in_150ms]"
            onClick={()=>{handleClick(2)}}>
                <FontAwesomeIcon icon={faQuestion} className="size-8 pr-2" />
                <span>Where can I find SnapStory's next destination?</span>
            </button>
            <div className="AnswerBox w-full h-0 pt-2 px-2 hidden motion-safe:transition-all duration-300 bg-yellow-50">
                <FontAwesomeIcon icon={faExclamation} className="size-8 pr-2" />
                <span>
                    You can see where we're heading on our <Link to={"/tour-locations"} className="text-cyan-500 font-bold underline">tour locations</Link> page!
                </span>
            </div>
            <button className="QuestionBox w-full h-16 pt-2 flex opacity-0 animate-[fadeIn_300ms_ease-in_150ms]"
            onClick={()=>{handleClick(3)}}>
                <FontAwesomeIcon icon={faQuestion} className="size-8 pr-2" />
                <span>Insert question.</span>
            </button>
            <div className="AnswerBox w-full h-0 pt-2 px-2 hidden motion-safe:transition-all duration-300 bg-yellow-50">
                <FontAwesomeIcon icon={faExclamation} className="size-8 pr-2" />
                <span>Insert answer.</span>
            </div>
        </ul>
      </div>
    </div>
  )
}

export default Page_FAQ
