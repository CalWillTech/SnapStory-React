import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useParams } from 'react-router-dom'

function Breadcrumb_Search() {

  const myParams = useParams()
  return (
    <div className="ItemSelection_Paths w-full h-20 md:h-6 bg-gradient-to-r from-blue-900 via-violet-950 to-fuchsia-950">
      <div className="ItemPaths w-3/4 h-6 mx-auto text-base text-white">
        <div>
          <ul className="w-full h-6 flex gap-2 justify-start max-md:flex-wrap text-sm list-none">
            <li><a href="/" className={`hover:underline`}>Home</a></li>
            <li><FontAwesomeIcon icon={faAnglesRight} /></li>
            <li className={`hover:underline cursor-default`}>Search</li>
            <li><FontAwesomeIcon icon={faAnglesRight} /></li>
            <li className={`hover:underline cursor-default`}>{myParams.id}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb_Search
