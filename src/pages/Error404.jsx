import { Link } from "react-router-dom"

function Error404() {
  return (
    <div className='w-screen h-[60vh]'>
        <div className="size-[60%] mx-auto relative top-[18%] flex flex-col justify-center gap-8 font-bold text-3xl text-center">
            <span className="text-lg">404<br/></span>
            <span className="border-b-[1px] mx-auto border-black">Page Not Found</span>
            <div 
            id="BrowseBtn"
            className="
            w-48 h-12 mx-auto flex flex-col justify-center 
            text-center text-white border-4 border-white rounded-xl 
            bg-gradient-to-tr from-black to-gray-600/80 
            shadow-gray-800 shadow-md motion-reduce:hover:text-cyan-300
            motion-safe:hover:scale-105 motion-safe:hover:animate-[btnOut_150ms_ease-in]"
            onMouseEnter={() => {document.getElementById('BrowseBtn').classList.add('motion-safe:animate-[btnIn_150ms_ease-in]')}}
            >
                <Link to="/">Home</Link>
            </div>
        </div>
    </div>
  )
}

export default Error404
