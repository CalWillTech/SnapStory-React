import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Breadcrumb_Store() {
  const currenthref = window.location.href
  
  return (
    <div className="StorePage_Paths w-full h-auto border-b-2 flex flex-col border-white bg-gradient-to-r from-blue-900 via-violet-950 to-fuchsia-950">
      <div className="StorePath basis-6 w-3/4 h-6 mx-auto pl-2 text-base text-white">
        <div>
          <ul className="w-full h-6 flex gap-2 text-sm">
            <li><Link to="/" className={`hover:underline`}>Home</Link></li>
            <li><FontAwesomeIcon icon={faAnglesRight} /></li>
            <li>
              <Link to={currenthref.match('/store/') ? '/store' : null} 
              className={`${currenthref.match('/store/')  ? 'hover:underline' : 'border-b-4 border-double border-white cursor-default'}`}>
                Shop
              </Link>
            </li>
            <div className={`${currenthref.match('/snapframes') || currenthref.match('/snapmerch') ? '' : 'hidden'} flex gap-2`}>
              <li><FontAwesomeIcon icon={faAnglesRight} /></li>
              <li className={`border-b-4 border-double border-white`}>
                {currenthref.match('/snapframes') ? 'SnapFrames' : 
                currenthref.match('/snapmerch') ? 'SnapMerch' : 
                null}
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="StoreName basis-3/4 w-3/4 h-20 mx-auto px-4 text-3xl font-bold flex flex-col justify-center text-white">
        <div>
          {currenthref.match('/snapframes') ? 'SnapFrames' :
          currenthref.match('/snapmerch') ? 'SnapMerch' :
          'All products'}
        </div>
        <span className="text-base md:text-xl text-white/80">
          {
            currenthref.match('/snapmerch') ? 'Support our team and look good doing it!' : 
            currenthref.match('/snapframes') ? 'Browse our finest frames along with our image catalog' : 
            'Choose from our wares'
          }
        </span>
      </div>
    </div>
  )
}

export default Breadcrumb_Store
