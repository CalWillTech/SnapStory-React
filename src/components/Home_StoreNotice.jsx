import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom";

function Home_StoreNotice() {
  
  const { ref, inView, } = useInView({ triggerOnce: true, threshold: 0.9, });
  return (
    <div className="Home_StoreNotice w-screen min-h-60 lg:h-[30vh] bg-gray-300">
      <div className={`ProductDivider w-[90%] h-1.5 mx-auto rounded-[100%] bg-black`}>
      </div>
      <div className={`${inView ? 'opacity-100' : 'opacity-0'} AttributionsBtnWrapper w-[90%] lg:w-[55%] h-full mx-auto flex flex-col justify-center text-center text-xl sm:text-2xl transition-opacity duration-[350ms] max-lg:opacity-100`}>
        <span>
          This is a display store imitating a webpage for an event photgraphy company, products are 
          <em className="font-bold"> Not</em> for sale. <br/>
          <br/>
          Images are provided thanks to the following sites: <br/>
        </span>
        <Link to="/attribution" className="Default-Button">
          <button 
          id="AttributionsBtn"
          className={`${inView ? 'opacity-100' : 'opacity-0'}`}
          ref={ref}
          onMouseEnter={() => {document.getElementById('AttributionsBtn').classList.add('motion-safe:animate-[btnIn_150ms_ease-in]')}}
          >
            Attributions
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home_StoreNotice
