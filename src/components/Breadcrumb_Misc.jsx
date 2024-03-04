import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from 'react-router-dom'

function Breadcrumb_Misc() {

  const currenthref = useLocation().pathname.slice(1)
  return (
    <div className="Misc_Paths w-full h-6 bg-gradient-to-r from-blue-900 via-violet-950 to-fuchsia-950">
      <div className="ItemPaths w-3/4 h-6 mx-auto text-base text-white">
        <div>
          <ul className="w-full h-6 flex gap-2 justify-start max-md:flex-wrap text-sm list-none">
            <li><Link to={"/"} className={`hover:underline`}>Home</Link></li>
            <li><FontAwesomeIcon icon={faAnglesRight} /></li>
            <li className={`hover:underline cursor-default border-b-4 border-double hover:border-none`}>{currenthref}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb_Misc
