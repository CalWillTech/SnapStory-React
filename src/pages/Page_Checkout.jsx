import React, { useContext, } from 'react'
import { ImageGalleryData } from '../data/StorePageData'
import { ShopContext } from '../context/shop_context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faMinus, faPlus, faStar, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Page_Checkout() {
  const { cartItems, addToCart, removeFromCart, deleteItem } = useContext(ShopContext);

  const itemID = ImageGalleryData.filter((e) => {
    if(cartItems[e.id] !== 0) 
    return e
  }).map((item)=>{
    return item.id
  })

  const priceTotal = [...ImageGalleryData].filter((e)=>{
    if(cartItems[e.id] !== 0)
    return e
  }).map((item)=> {
    return Math.round(item.price * cartItems[item.id])
  })

  const quantityTotal = [...ImageGalleryData].filter((e)=>{
    if(cartItems[e.id] !== 0)
    return e
  }).map((item)=> {
    return Math.round(cartItems[item.id])
  }).reduce((a,b)=>a+b, 0)

  return (
    <div className='Page_Checkout w-screen max-h-[280vh] bg-gradient-to-br from-cyan-950 via-black to-fuchsia-950'>
      <div className='SectionWrapper w-[95%] lg:w-3/4 min-h-[60rem] m-auto flex flex-wrap bg-gradient-to-b from-gray-50 to-gray-200'>
        <div className='ItemCard  basis-full lg:basis-3/4 min-h-[35rem] p-4 flex flex-col gap-4 lg:border-r-[1px] border-black'>
          {ImageGalleryData.map((item)=>{
            if(cartItems[item.id] !== 0) 
            return (
              <React.Fragment key={item.id}>
                <div className='Card1 w-full h-32 flex justify-between border-4 border-neutral-400/40 rounded-xl bg-gradient-to-br from-cyan-100 via-violet-300 to-fuchsia-300'>
                  <div className='CardImage h-full basis-40 m-auto bg-white border-2 border-black rounded-xl'>
                    <img src={item.image} className='size-full object-contain' />
                  </div>
                  <div className='CardDescription h-full basis-1/2 m-auto sm:pt-4 lg:pt-8 text-center text-base sm:text-xl lg:text-2xl'>
                    <span>{item.description}</span>
                  </div>
                  <div className='CardQTY&Price h-full basis-40 pt-2 m-auto flex flex-col border-l-2 border-black text-center underline'>
                    <span className='basis-full'>
                      Quantity: <br/> 
                      <span className='font-bold text-xl'>{cartItems[item.id]}</span>
                    </span>
                    <span className='basis-full'>
                      Price: <br/> 
                      <span className='font-bold text-xl'>${Math.round(item.price * cartItems[item.id])}</span>
                    </span>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
          {itemID.length <= 0 ?
            <div className='w-full h-32 text-4xl text-center underline'>
              No Items In Cart
            </div>
          : null 
          }
        </div>
        <div className='ItemLogic basis-0 lg:basis-1/4 max-lg:hidden bg-gradient-to-br from-slate-50 to-neutral-300'>
          {ImageGalleryData.map((item)=>{
              if(cartItems[item.id] !== 0) 
              return (
                <React.Fragment key={item.id}>
                  <div className='Card2 w-full h-32 mt-4 pb-4 flex flex-wrap border-y-2 border-black bg-blue-50'>
                    <div className='basis-full flex justify-evenly text-center'>
                      <span className='basis-1/4 mt-auto'>Add 1</span>
                      <span className='basis-1/4 mt-auto'>Remove 1</span>
                      <span className='basis-1/4 mt-auto'>Remove Item</span>
                      <span className='basis-1/4 mt-auto'>Save For Later</span>
                    </div>
                    <div className='basis-full flex justify-evenly text-center'>
                      <button className='AddToCart h-1/3 m-auto'
                      onClick={()=>addToCart(item.id)}>
                        <FontAwesomeIcon icon={faPlus} className='buttonLayout' />
                      </button>
                      <button className='Remove1FromCart h-1/3 m-auto'
                      onClick={()=>removeFromCart(item.id)}>
                        <FontAwesomeIcon icon={faMinus} className='buttonLayout' />
                      </button>
                      <button className='DeleteItemFromCart h-1/3 m-auto'
                      onClick={()=>deleteItem(item.id)}>
                        <FontAwesomeIcon icon={faX} className='buttonLayout' />
                      </button>
                      <button className='SaveForLater h-1/3 m-auto'
                      onClick={null}>
                        <FontAwesomeIcon icon={faStar} className='buttonLayout' />
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              ) 
          })}
        </div>
        <div className='CheckoutSection h-40 basis-full max-sm:pb-10 max-lg:px-12 text-3xl flex justify-around flex-wrap border-y-2 bg-neutral-200 border-black'>
          <div className='CheckoutText basis-3/4 text-center my-auto flex justify-center border-black'>
            <span className='font-bold border-black border-b-2'>
              Total:
            </span>
            <span className='text-right pl-20 lg:pl-80  border-black border-b-2'>
              ${priceTotal.reduce((a,b)=>a+b, 0) < 1 ? "0" : priceTotal.reduce((a,b)=>a+b, 0)}
            </span>
          </div>
          <div className='CheckoutBtn h-full basis-full sm:basis-1/4 p-4 gap-4 flex flex-col text-base text-white sm:border-l-[1px] border-black'>
            <Link to={'/store'} className='basis-1/2'>
              <button className='size-full text-center rounded-md hover:text-lg active:text-base bg-blue-600'>
                Contiue Shopping 
                <FontAwesomeIcon icon={faBasketShopping} className='size-4 ml-2' />
              </button>
            </Link>
            <Link to={'/'} className='basis-1/2'>
              <button disabled={quantityTotal >= 1 ? false : true} className={`${quantityTotal >= 1 ? "hover:text-lg active:text-base bg-neutral-900" : "bg-gray-400/80"} size-full text-center rounded-md`}>
                Purchase {quantityTotal >= 1 ? quantityTotal : "0" } items
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page_Checkout
