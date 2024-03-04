import { ImageGalleryData } from '../data/StorePageData'
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb_ItemSelection() {

  const currenthref = window.location.href
  return (
    <div className="ItemSelection_Paths w-full h-20 md:h-6 bg-gradient-to-r from-blue-900 via-violet-950 to-fuchsia-950">
      <div className="ItemPaths w-3/4 h-6 mx-auto text-base text-white">
        <div>
          <ul className="w-full h-6 flex gap-2 justify-start max-md:flex-wrap text-sm list-none">
            <li><Link to={"/"} className={`hover:underline`}>Home</Link></li>
            <li><FontAwesomeIcon icon={faAnglesRight} /></li>
            <li><Link to={currenthref.match('/store/') ? '/store' : null} className={`${currenthref.match('/store/')  ? 'hover:underline' : 'border-b-4 border-double border-black cursor-default'}`}>Shop</Link></li>
            <li><FontAwesomeIcon icon={faAnglesRight} /></li>
            <div className={`flex gap-2 `}>
                {ImageGalleryData.filter((e)=>{if(currenthref.match(e.link) == e.link) return e;})
                .map((item)=> { 
                  return (
                    <React.Fragment key={item.id}>
                      <li className={`CheckBrand hover:underline border-black`}>
                        <Link 
                        to={item.brand == 'SnapFrame' ? 
                        '/store/snapframes' : 
                        item.brand == 'SnapMerch' ? 
                        '/store/snapmerch' : null}
                        >
                          {item.brand == 'SnapFrame' ? 
                          'SnapFrame' : 
                          item.brand == 'SnapMerch' ? 
                          'SnapMerch' : null}
                        </Link>
                      </li>
                      <li><FontAwesomeIcon icon={faAnglesRight} /></li>
                      <li className={`border-b-4 border-double border-white`}>
                        {currenthref.match(item.link) ? item.description : null}
                      </li>
                    </React.Fragment>
                  )
                })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb_ItemSelection
