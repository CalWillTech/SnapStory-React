import { Link, useLocation } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { faMagnifyingGlass, faBars, faX, faBasketShopping, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderSearchData } from '../data/HeaderSearchData'
import { SideBarData } from '../data/SideBarData'
import { ImageGalleryData } from '../data/StorePageData'
import logo1 from '../images/SnapStory-logos_black-2.png'

import { ShopContext } from '../context/shop_context'

import HomeHeaderTopBar from '../components/HomeHeaderTopBar'
import Modal_50OffDeal from '../components/Modal_50OffDeal'

function SnapHeader() {
  const { cartItems, addToCart, removeFromCart, deleteItem, cartToggle, ToggleCart, } = useContext(ShopContext);
      
  const currenthref = useLocation().pathname;
  const [cartLocalAmount, setCartLocalAmount] = useState(Object.values(cartItems).filter((e)=>{if(e !== 0) return e}).join(""));

  const [sideBarToggle, setSideBarToggle] = useState(false);
  const ToggleSideBar = () => {
    sideBarToggle ? setSideBarToggle(false): setSideBarToggle(true);
    document.body.classList.toggle("ScrollLock")
  }

  const [searchToggle, setSearchToggle] = useState(false);
  const ToggleSearch = () => {
    searchToggle ? setSearchToggle(false): setSearchToggle(true);
    document.body.classList.toggle("ScrollLock")
  }

  const [animateToggle, setAnimateToggle] = useState(false);
  const handleCartAnimate = ()=>{
    ToggleCart()
    setAnimateToggle(!animateToggle)
    if(!animateToggle) {
      setTimeout(()=>{
        if(!document.getElementById("CartModal").classList) return;
        document.getElementById("CartModal").classList.add("motion-safe:animate-[cartInfromRight_100ms_ease-in-out_1]")
      }, [])
    }
    setCartLocalAmount(Object.values(cartItems).filter((e)=>{if(e !== 0) return e}).join(""))
  }


  useEffect(()=> {
    let handleWheel = (e)=>{
      const header = document.getElementById("HeaderWrapper").classList
      const headerAlert = document.getElementById("HeaderAlert").classList
      if(cartToggle != true) {
        switch (e.deltaY <= 0) {
          case true:
            header.replace("top-0", "top-8")
            headerAlert.replace("-top-8", "top-0")
            break;
          case false:
            header.remove("top-8")
            header.add("top-0")
            headerAlert.remove("top-0")
            headerAlert.add("-top-8")
            break;
        }
      } else {
        header.remove("top-8")
        header.add("top-0")
        headerAlert.remove("top-0")
        headerAlert.add("-top-8")
      }
    } 
    let handleCartAmount = ()=>{
      setTimeout(()=>{
        setCartLocalAmount(Object.values(cartItems).filter((e)=>{if(e !== 0) return e}).join(""))
      }, [])
    }
    document.addEventListener('wheel', handleWheel)
    document.addEventListener('click', handleCartAmount)
    return()=>{
      document.removeEventListener('wheel', handleWheel)
      document.removeEventListener('click', handleCartAmount)
    }
  })

  // SideBar Modal //
  function SideBarModal() {
    if (sideBarToggle == true) {
    return (
      <div id='SideBarModal' className='Modal'>
        <div className='SideBar 
        w-[75%] h-full pr-1.5 flex flex-col justify-start text-2xl 
        sm:bg-gradient-to-b bg-gradient-to-r 
      from-cyan-400 via-violet-500 to-fuchsia-700'>
          <div className='size-full basis-full  bg-white'>
            <div className='SideBarHeader w-full h-[5rem] flex justify-around gap-[10%] border-b-2 border-black'>
              <img src={logo1} alt='logo 1' className='size-[5.5rem] object-contain' />
              <FontAwesomeIcon icon={faX} className='size-6 my-auto' onClick={()=>{ToggleSideBar()}}/>
            </div>
            {SideBarData.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <Link to={item.link} className='size-full' onClick={()=>{ToggleSideBar()}}>
                    <div className='SideBarName w-full h-20 pl-4 pt-[8%] border-b-2 border-black hover:underline cursor-pointer'>
                      {item.name}
                    </div>
                  </Link>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className='SideBarOffScreen w-full h-[110vh] -mt-[110vh] relative left-[75%] bg-[rgba(0,0,0,_0.65)] cursor-pointer' onClick={ToggleSideBar}>
        </div>
      </div>
    );
    } return (<></>);
  }

  // Search Modal //
  function SearchModal() {
    const [query, setQuery] = useState('');
    if (searchToggle == true) {
    return (
      <div id="SearchModal"
      className={`Modal group/Modal
      ${searchToggle === true ? "motion-safe:animate-[cartInfromTop_100ms_ease-in-out_1]" : ""}`}>
        <div 
          className='SearchBar w-full h-[6.8rem] flex justify-center bg-gray-100' 
          onChange={() => {document.getElementById('SearchInput').value === '' ? document.getElementById('SearchQueue').classList.add('hidden') : document.getElementById('SearchQueue').classList.remove('hidden')}}
          onClick={() => {document.getElementById('SearchInput').value === '' ? document.getElementById('SearchQueue').classList.add('hidden') : ''}}
        >
          <div className='w-[80%] md:w-[40%] h-[60%] mt-auto mb-4 flex justify-evenly rounded-[49px] border-black border-2 bg-white'>
            <form 
            action={`/search-results/${query}`}
            className='SearchForm size-full my-auto px-4 flex justify-center gap-4'
            >
              <div className='w-full'>
                <input 
                  name='entry'
                  type='text'
                  value={query}
                  placeholder='Search...' 
                  id='SearchInput' 
                  className='peer w-full h-[85%] pl-2 relative top-[9%] left-4 focus:outline-none' 
                  onChange={(e) => setQuery(e.target.value)}
                  />
                <ul id='SearchQueue' className='bg-white hidden'>
                  {HeaderSearchData.filter(item => 
                    item.firstName.toLowerCase().includes(query) + item.lastName.toLowerCase().includes(query)
                  ).map((item) => (
                    <li key={item.id} className='h-10 my-auto pl-4'>
                      {item.firstName} {item.lastName}
                    </li>
                  ))}
                </ul>
              </div>
              <button type='submit' className='SearchIcon size-8 pt-0.5 my-auto'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='size-7 hover:size-8 transition duration-100' />
              </button>
              <button type='button' className='XIcon size-8 pt-0.5 my-auto' onClick={() => {document.getElementById('SearchInput').value == '' ? ToggleSearch() : document.getElementById('SearchInput').value = ''}}>
                <FontAwesomeIcon icon={faX} className='size-7 hover:size-8 hover:transition-transform' />
              </button>
            </form>
          </div>
        </div>
        <div className='SnapHeader-div' 
        />
        <div className='SearchOffScreen w-full h-[100vh] bg-[rgba(0,0,0,_0.65)] cursor-pointer' onClick={ToggleSearch}></div>
      </div>
    );
    } return (<></>);
  }

  // Cart Modal //
  function CartModal() {
    if (cartToggle == true) {
      return (
        <div id='CartModal' className={`Modal`}>
          <div className='CartWrapper
          max-w-full w-full sm:w-1/2 lg:w-1/3 h-full sm:pl-1.5 max-sm:pt-1.5 
          relative left-0 sm:left-1/2 lg:left-2/3 
          flex flex-col justify-start text-2xl
          sm:bg-gradient-to-b bg-gradient-to-r 
          from-cyan-400 via-violet-500 to-fuchsia-700'>
            <div className={`CartModal size-full bg-white`}>

              <div className='CartHeader w-full h-[5rem] px-8 flex justify-between border-b-2 border-black'>
                <span className='my-auto'>
                  Cart
                </span>
                <button className='size-6 my-auto hover:text-3xl active:text-2xl' onClick={()=>handleCartAnimate()}>
                  <FontAwesomeIcon icon={faX}/>
                </button>
              </div>
              <div className='w-full h-auto p-4 flex justify-evenly gap-4 border-b-2 border-black'>
                <Link 
                to={"/checkout"} 
                onClick={() => ToggleCart()}
                className='flex basis-1/2'
                >
                  <button 
                  id="ToCheckoutBtn"
                  className="
                  CartModal-button"
                  onMouseEnter={() => {document.getElementById('ToCheckoutBtn').classList.add('motion-safe:animate-[btnIn_150ms_ease-in]')}}
                  >
                    To Checkout 
                  </button>
                </Link>
                <Link 
                to={"/store"} 
                onClick={() => ToggleCart()}
                className='flex basis-1/2'
                >
                  <button 
                  id="ToCheckoutBtn"
                  className="
                  CartModal-button leading-4"
                  onMouseEnter={() => {document.getElementById('ToCheckoutBtn').classList.add('motion-safe:animate-[btnIn_150ms_ease-in]')}}
                  >
                    {currenthref.includes("/store") && (cartItems > 0 || currenthref.includes("/store")) ?
                    "Continue Shopping" :
                    "Go to Store"
                    }
                  </button>
                </Link>
              </div>
              {ImageGalleryData.map((item)=>{
                if(cartItems[item.id] !== 0) {
                  return (
                    <React.Fragment key={item.id}>
                      <div id='CartCard' 
                      className='Card1 
                      lg:w-full h-32 flex 
                      overflow-hidden border-b-2 border-black
                      bg-gradient-to-tr from-cyan-100 via-slate-300 to-fuchsia-300'
                      >
                        <div className='CardWrapper size-full flex justify-between 
                        max-lg:border-r-2 border-black
                        bg-gradient-to-tr from-cyan-100 via-slate-300 to-fuchsia-300'
                        >
                          <div className='CardImage h-full basis-1/3 lg:basis-40 m-auto border-r-2 border-black bg-white'>
                            <img src={item.image} alt={`image ${item.id}`} className='size-full object-contain' />
                          </div>
                          <div className='CardDescription h-full basis-1/3 lg:basis-1/2 pt-2 lg:pt-8 text-center text-balance text-base lg:text-xl'>
                            <span className='text-ellipsis'>{item.description}</span>
                          </div>
                          <div className='CardQTY&Price h-full basis-1/3 lg:basis-40 pt-2 m-auto flex flex-col text-center text-base'>
                            <span className='basis-full underline'>
                              Quantity: <br/> 
                              <span className='font-bold text-xl'>{cartItems[item.id]}</span>
                            </span>
                            <span className='basis-full underline'>
                              Price: <br/> 
                              <span className='font-bold text-xl'>
                                ${
                                  item.discountPrice.toLocaleString().length >= 1 ?
                                  Math.round(item.discountPrice.slice(1) * cartItems[item.id]) :
                                  Math.round(item.price * cartItems[item.id]) 
                                }
                               </span>
                            </span>
                          </div>
                        </div>
                        <div className='CardLogic
                        h-full basis-32 max-lg:ml-6 
                        flex flex-col justify-evenly flex-wrap text-center text-base'
                        >
                          <button className='h-1/3 basis-1/3'
                          onClick={()=>addToCart(item.id)}>
                            <FontAwesomeIcon 
                            icon={faPlus} 
                            className='size-7 p-1 rounded-full border-2 border-black text-neutral-100
                            bg-gradient-to-bl from-cyan-700 via-slate-800 to-fuchsia-600
                            active:size-6 active:p-0.5' 
                            />
                          </button>
                          <button className='h-1/3 basis-1/3'
                          onClick={()=>removeFromCart(item.id)}>
                            <FontAwesomeIcon 
                            icon={faMinus} 
                            className={`size-7 p-1 rounded-full border-2 border-black text-neutral-100
                            bg-gradient-to-bl from-cyan-700 via-slate-800 to-fuchsia-600
                            active:size-6 active:p-0.5`} 
                            />
                          </button>
                          <button className='h-1/3 basis-full'
                          onClick={()=>deleteItem(item.id)}>
                            <FontAwesomeIcon 
                            icon={faTrash} 
                            className={`w-6 h-2/3 p-1.5 rounded-full border-2 border-black text-neutral-100
                            bg-gradient-to-bl from-cyan-700 via-slate-800 to-fuchsia-600
                            active:w-[1.4rem] active:h-[62%] active:p-1`} 
                            />
                          </button>
                        </div>
                      </div>
                    </React.Fragment>
                  )
                }
              })}
            </div>
          </div>
          <div className='CartOffScreen 
          w-full h-[110vh] -mt-[110vh] relative right-full sm:right-1/2 lg:right-1/3 bg-[rgba(0,0,0,_0.65)] cursor-pointer' 
          onClick={()=>{handleCartAnimate()}}>
          </div>
        </div>
      )
    }
  }

  // (main) \\
  return (
    <>
      <SideBarModal/>
      <SearchModal/>
      <CartModal/>
      <Modal_50OffDeal />
      <HomeHeaderTopBar/>
      <div className={`HeaderWrapper w-screen h-[4.8rem] z-[9] sticky top-0 flex justify-center border-b-[1px] border-zinc-400 bg-gray-100 motion-safe:transition-all duration-300`}
      id='HeaderWrapper'>
        <div className="HeaderContent w-[80rem] h-full flex justify-between">
          <div className="CaptionLeft h-full ml-6 my-auto flex lg:gap-2 overflow-hidden">
            <Link to={'/'}><img src={logo1} alt='logo 1' className='LogoLeft w-0 md:w-24 h-0 md:h-20 relative object-contain'/></Link>
            <button name='button' className='SideBarModalBtn size-8 md:size-0 my-auto lg:overflow-hidden' onClick={()=>{ToggleSideBar()}}>
              <FontAwesomeIcon icon={faBars} className='w-8 hover:w-[2.3rem] h-8 hover:h-[2.1rem] hover:-ml-0.5' />
            </button> 
          </div>
          <div className="CaptionMid lg:overflow-hidden my-auto mr-0 lg:mr-4">
            <Link to={'/'}><img src={logo1} alt='logo 1' className='LogoMid_AppearOnSm w-24 h-20 inline-block md:hidden relative left-5 sm:left-8 object-cover'/></Link>
            <div className='TextMid_AppearOnLg size-0 md:w-80 md:h-12 flex justify-center gap-4'>
              <Link to={'/photo-book'} className='my-auto hidden md:block underline-offset-4 hover:underline'>
                Photo Book
              </Link>
              <div className='w-[2px] h-[90%] bg-zinc-400'></div>
              <Link to={'/tour-locations'} className='my-auto hidden md:block underline-offset-4 hover:underline'>
                Tour Locations
              </Link>
              <div className='w-[2px] h-[90%] bg-zinc-400'></div>
              <Link to={'/store'} className='my-auto hidden md:block underline-offset-4 hover:underline'>
                Shop
              </Link>
            </div>
          </div>
          <div className="CaptionRight h-full mr-5 sm:mr-10 pt-6 flex gap-6 sm:gap-8">
            <button name='button' className='size-6' onClick={()=>ToggleSearch()}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='SearchModalBtn w-full hover:w-[1.8rem] h-full hover:h-[1.65rem] hover:-ml-0.5' />
            </button>
            <div className='size-6 group flex flex-col flex-wrap'>
              <button name='button' className='size-6' onClick={()=>handleCartAnimate()}>
                <FontAwesomeIcon icon={faBasketShopping} className='SearchModalBtn size-full hover:size-[1.8rem] hover:-ml-0.5' />
              </button>
              <div 
              className={`size-5 group-hover:size-6 
              text-center pt-0.5 group-hover:pt-1
              relative bottom-1 bg-blue-500 rounded-full text-xs group-hover:text-[1rem] text-white 
              animate-pulse group-hover:animate-none
              ${cartLocalAmount > 0 ? "bg-blue-500" : "bg-transparent"}`} 
              onMouseEnter={(e)=>{e.target.classList.remove("animate-pulse")}}
              onMouseLeave={(e)=>{e.target.classList.add("animate-pulse")}}  
              >
                {cartToggle > 0 ? 
                  null : 
                  cartLocalAmount
                }
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default SnapHeader
