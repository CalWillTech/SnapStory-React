import { Link } from "react-router-dom"

function ShopSelection() {
  return (
    <div id="ShopSelectionBanner" 
    className={`
    w-full h-16 overflow-hidden transition-all duration-500 
    bg-center bg-[length:150vw] ease-in-out hover:duration-500
    bg-[linear-gradient(135deg,#706ae2_0%,_#262655_15%,_#344ba7_30%,_#321e49_50%,_#a65dd0_70%,_#203f53_85%,_#27d6e7_100%)]
    `}>
      <div className="w-3/4 h-full m-auto flex justify-center md:justify-start gap-8">
        <Link to={"/store/snapframes"} className="ShopText_Frames group my-auto text-2xl font-bold text-white cursor-pointer">
          <button 
          className="ShopText_Frames ShopSelection-button
           group-hover:to-cyan-200 shadow-cyan-800 group-hover:shadow-cyan-400 "
          onMouseEnter={() => document.getElementById('ShopSelectionBanner').classList.add('motion-safe:hover:bg-left')}
          onMouseLeave={() => document.getElementById('ShopSelectionBanner').classList.remove('motion-safe:hover:bg-left')}>
            SnapFrames
          </button>
        </Link>
        <Link to="/store/snapmerch" className="ShopText_Merch group my-auto text-2xl font-bold text-white cursor-pointer">
          <button 
          className="ShopText_Merch ShopSelection-button
          group-hover:to-fuchsia-200 shadow-fuchsia-800 group-hover:shadow-fuchsia-400"
          onMouseEnter={() => document.getElementById('ShopSelectionBanner').classList.add('motion-safe:hover:bg-right')}
          onMouseLeave={() => document.getElementById('ShopSelectionBanner').classList.remove('motion-safe:hover:bg-right')}>
            SnapMerch
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ShopSelection
