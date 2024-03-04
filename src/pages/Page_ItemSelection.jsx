import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { ImageGalleryData } from '../data/StorePageData'
import MayAlsoLikeSection from '../components/MayAlsoLikeSection';
import Breadcrumb_ItemSelection from '../components/Breadcrumb_ItemSelection';
import { ShopContext } from '../context/shop_context';


function Page_ItemSelection() {
  const { addToCart, cartAmount, setCartAmount, } = useContext(ShopContext);

  const currenthref = window.location.href
  let [slideIndex, setSlideIndex] = useState(0);
  let slides = document.getElementsByClassName('ItemPicture');

  const [img1Toggle, setImg1Toggle] = useState(true);
  const [img2Toggle, setImg2Toggle] = useState(false);
  const [img3Toggle, setImg3Toggle] = useState(false);

  const [sizeSmToggle, setSizeSmToggle] = useState(false);
  const [sizeMdToggle, setSizeMdToggle] = useState(true);
  const [sizeLgToggle, setSizeLgToggle] = useState(false);
  const [sizeXlToggle, setSizeXlToggle] = useState(false);
  const [size2XlToggle, setSize2XlToggle] = useState(false);


  function clearSizeToggle() {
    sizeSmToggle ? setSizeSmToggle(false) :
    sizeMdToggle ? setSizeMdToggle(false) :
    sizeLgToggle ? setSizeLgToggle(false) :
    sizeXlToggle ? setSizeXlToggle(false) :
    size2XlToggle ? setSize2XlToggle(false) :
    null
  }
 
  function handleimg1Toggle() {
    setImg1Toggle(true)
    img2Toggle ? setImg2Toggle(!img2Toggle) : null 
    img3Toggle ? setImg3Toggle(!img3Toggle) : null 
    setSlideIndex(0)
  }
  function handleimg2Toggle() {
    setImg2Toggle(true)
    img1Toggle ? setImg1Toggle(!img1Toggle) : null 
    img3Toggle ? setImg3Toggle(!img3Toggle) : null 
    setSlideIndex(1)
  }
  function handleimg3Toggle() {
    setImg3Toggle(true)
    img1Toggle ? setImg1Toggle(!img1Toggle) : null  
    img2Toggle ? setImg2Toggle(!img2Toggle) : null 
    setSlideIndex(2)
  }

  function plusSlides() {
    if(slideIndex <= slides.length) {
      slides.item(slideIndex).classList.add('hidden') 
      {slides.item(slideIndex + 1) ? slides.item(slideIndex+1).classList.remove('hidden') : slides.item(0).classList.remove('hidden')}
    }
    
    slideIndex = slideIndex + 1
    if(slideIndex >= slides.length) {
      slideIndex = 0
    }

    handleOverlay()
  }
  function subtractSlides() {
    if(slideIndex <= slides.length) {
      slides.item(slideIndex).classList.add('hidden') 
      {slides.item(slideIndex - 1) ? slides.item(slideIndex-1).classList.remove('hidden') : slides.item(slides.length - 1).classList.remove('hidden')}
    }
    
    slideIndex = slideIndex - 1
    if(slideIndex < 0) {
      slideIndex = slides.length - 1
    }

    handleOverlay()
  }
  function handleOverlay() {
    switch (slideIndex) {
      case 0:
        handleimg1Toggle()
        break;
      case 1:
        handleimg2Toggle()
        break;
      case 2:
        handleimg3Toggle()
        break;
      default:
        throw console.error('handleOverlay Default Error');
    }
  }
  function handleCartBtn() {
    addToCart(itemID)
  }
  function handleCheckoutBtn() {
    addToCart(itemID)
    setCartAmount(1)
  }
  function handleSizeToggle(size) {
    clearSizeToggle()
    var targetSize = size.target.innerHTML
    switch (targetSize) {
      case "SM":
        setSizeSmToggle(true)
        break;
      case "MD":
        setSizeMdToggle(true)
        break;
      case "LG":
        setSizeLgToggle(true)
        break;
      case "XL":
        setSizeXlToggle(true)
        break;
      case "2XL":
        setSize2XlToggle(true)
        break;
      default:
        null
    }
  }

  const itemID = ImageGalleryData.filter((e) => {
    if(currenthref.includes(e.link)) return e; 
  }).map((item) => {
    return item.id
  });

  const ItemBrandDesc = [...ImageGalleryData].filter((e)=>{
    if(currenthref.includes(e.link)) 
    return e.image
  }).map((e)=>{
    return e.brand
  });

  const ItemTagsDesc = [...ImageGalleryData].filter((e)=>{
    if(currenthref.includes(e.link)) 
    return e.image
  }).map((e)=>{
    return e.tags
  });

  const ItemPrice = [...ImageGalleryData].filter((e)=>{
    if(currenthref.includes(e.link)) 
    return e.image
  }).map((e)=>{
    return e.price
  })

  const ItemDiscountPrice = [...ImageGalleryData].filter((e)=>{
    if(currenthref.includes(e.link)) 
    return e.image
  }).map((e)=>{
    return e.discountPrice
  })

  return (
    <div className='ItemSelectionPage w-screen h-auto flex flex-col'>
      <Breadcrumb_ItemSelection />
      <div className='ItemSelectionWrapper w-screen max-lg:max-h-[1000vh] lg:h-[120vh] flex justify-center gap-10 max-md:flex-wrap bg-gradient-to-b from-slate-200 to-gray-300'>
        <div className="ItemImageGallery w-[50vw] md:h-[75vh] mt-6 md:mt-[10vh] max-md:flex-[1_0_100%] max-lg:px-8 static md:sticky md:top-[4.8rem] lg:top-[8.8rem] flex flex-col md:flex-row gap-4 md:gap-0">
          <div className='SubGalleryWrapper w-full md:w-1/5 h-40 md:h-full px-2 overflow-x-auto overflow-y-hidden'>
            <div className='size-full flex flex-row md:flex-col justify-start gap-2'>
              {ImageGalleryData.filter((e) => {
                if(currenthref.includes(e.link)) return e; 
              }).map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <div className='w-full h-full md:h-44 rounded-2xl border-2 border-black shadow-black shadow-sm bg-gradient-to-br from-cyan-900 via-black/80 to-fuchsia-900'>
                      <img 
                      src={item.image} 
                      alt={`image ${item.id}, grey`} 
                      className='w-full h-2/3 relative top-[15%] cursor-pointer object-cover' 
                      onClick={handleimg1Toggle} />
                      <div className={`ImageOverlay w-full h-2/3 relative bottom-[52%] border-yellow-500 border-2 bg-black/50
                      ${img1Toggle ? '' : 'hidden'}`}>
                      </div>
                    </div>                    
                    <div className='w-full h-full md:h-44 rounded-2xl border-2 border-black shadow-black shadow-sm bg-gradient-to-br from-cyan-900 via-black/80 to-fuchsia-900'>
                      <img 
                      src={item.activeImage} 
                      alt={`image ${item.id}, grey`} 
                      className='w-full h-2/3 relative top-[15%] cursor-pointer object-cover' 
                      onClick={handleimg2Toggle} />
                      <div className={`ImageOverlay obj2 w-full h-2/3 relative bottom-[52%] border-yellow-500 border-2 bg-black/50
                      ${img2Toggle ? '' : 'hidden'}`}>
                      </div>
                    </div>
                    {item.imageWood ? 
                    <div className='w-full h-full md:h-44 rounded-2xl border-2 border-black shadow-black shadow-sm bg-gradient-to-br from-cyan-900 via-black/80 to-fuchsia-900'>
                      <img 
                      src={item.imageWood} 
                      alt={`image ${item.id}, wood`} 
                      className='w-full h-2/3 relative top-[15%] cursor-pointer object-cover' 
                      onClick={handleimg3Toggle} />
                      <div className={`ImageOverlay obj3 w-full h-2/3 relative bottom-[52%] border-yellow-500 border-2 bg-black/50
                      ${img3Toggle ? '' : 'hidden'}`}>
                      </div>
                    </div> :
                    null}
                  </React.Fragment>
                )
              })}
            </div>
          </div>
          <div className='MainGalleryWrapper w-full h-80 md:h-full flex flex-col'>
            <div className='ItemMainImage size-full flex flex-[1_0_100%] border-2 border-black shadow-md shadow-neutral-800 overflow-x-hidden'>
              {ImageGalleryData.filter((e) => {
                if(currenthref.includes(e.link)) return e;
              }).map((item) => {
                return (
                <React.Fragment key={item.id}>
                  <img 
                  src={item.image} 
                  alt={`image ${item.id}, grey`}
                  id='ItemPicture'
                  className={`ItemPicture h-full w-full mx-auto object-cover flex-[1_0_100%]
                  ${img1Toggle ? '' : 'hidden'}`} 
                  />
                  <img 
                  src={item.activeImage} 
                  alt={`image ${item.id}, grey`} 
                  id='ItemPicture'
                  className={`ItemPicture h-full w-full mx-auto object-cover flex-[1_0_100%]
                  ${img2Toggle ? '' : 'hidden'}`}
                  />
                  {item.imageWood ? 
                  <img 
                  src={item.imageWood}
                  alt={`image ${item.id}, wood`}  
                  id='ItemPicture'
                  className={`ItemPicture h-full w-full mx-auto object-cover flex-[1_0_100%]
                  ${img3Toggle ? '' : 'hidden'}`}/> :
                  null}
                </React.Fragment>
                );
              })}
            </div>
            <div className='ItemGalleryArrows size-full px-4 flex justify-between relative bottom-1/2'>
              <FontAwesomeIcon 
              icon={faArrowLeft} 
              style={{color: '#fff',}}
              onClick={subtractSlides}
              className='ItemGalleryPrev
              size-14 border-2 border-black rounded-full transition-all duration-300 
              bg-gradient-to-br from-cyan-700 via-black to-fuchsia-700 
              bg-[length:200%_200%] bg-left-top hover:bg-right-bottom
              cursor-pointer' 
              />
              <FontAwesomeIcon 
              icon={faArrowRight} 
              style={{color: '#fff',}}
              onClick={plusSlides}
              className='ItemGalleryNext
              size-14 border-2 border-black rounded-full transition-all duration-300 
              bg-gradient-to-bl from-cyan-700 via-black to-fuchsia-700 
              bg-[length:200%_200%] bg-right-top hover:bg-left-bottom
              cursor-pointer' 
              />
            </div>
          </div>
        </div>
        <div className="ItemDescription w-[35vw] h-auto mt-0 lg:mt-12 max-md:flex-[1_0_100%]">
          <div className='Section1 w-full h-[40%] lg:h-auto px-6 flex flex-col'>
            <div className="BrandSection w-full h-full mt-10 flex justify-between border-b-4 border-black">
              <span 
              className={`ItemBrandDesc
              w-40 h-10 ml-4 relative bottom-3
              text-xl font-bold text-neutral-700/80`}>
                {ItemBrandDesc}
              </span>
              <span className={`ItemBrandDesc
              w-80 h-10 mr-4 relative bottom-3
              text-xl font-bold text-end text-neutral-700/80`}>
                {ItemTagsDesc}
              </span>
            </div>
            <span className='DescriptionSpan w-full h-auto mt-4 text-3xl font-bold'>
              {[...ImageGalleryData].filter((e)=>{if(currenthref.includes(e.link)) return e.image}).map((e)=>{return e.description})}
            </span>
            <span className='PriceSpan w-full h-auto text-4xl'>
              {ItemDiscountPrice.toLocaleString().length >= 1 ? 
                <><span className='line-through text-2xl'>${ItemPrice}</span> <br/> {ItemDiscountPrice}</> : 
                <>${ItemPrice}</>
              }
            </span>
            <span className='TaxSpan w-full h-auto text-base text-neutral-600/80 underline font-bold'>
              Tax Included.
            </span>
            <div className='ProductSection size-auto mr-auto pr-2 rounded-xl bg-neutral-300'>
              <FontAwesomeIcon 
              icon={[...ImageGalleryData].filter((e)=>{if(currenthref.includes(e.link)) return e.image}).map((e)=>{return e.inStock ? 1 : 0}) == 1 ? 
              faCheck : faX} 
              style={[...ImageGalleryData].filter((e)=>{if(currenthref.includes(e.link)) return e.image}).map((e)=>{return e.inStock ? 1 : 0}) == 1 ? 
              {color: '#16a34a',} : {color: '#991b1b',}} 
              className='px-2 border-r-2 border-black' 
              />
              <span className={`pl-2 size-auto text-lg text-center font-bold
              ${[...ImageGalleryData].filter((e)=>{if(currenthref.includes(e.link)) return e.image}).map((e)=>{return e.inStock ? 1 : 0}) == 1 ? 'text-green-600' : 'text-red-800'}`}
              >
                {[...ImageGalleryData].filter((e)=>{if(currenthref.includes(e.link)) return e.image}).map((e)=>{return e.inStock ? 1 : 0}) == 1 ? 
                [...ImageGalleryData].filter((e)=>{if(currenthref.includes(e.link)) return e.image}).map((e)=>{return e.inStock ? e.stockValue + ' Products In Stock' : null }) : 
                'Out of Stock.'}
              </span>
            </div>
            <div className="ColorSection w-full h-auto mt-4 ">
              {[...ImageGalleryData].filter((e)=>{if(currenthref.includes(e.link)) return e.image}).map((e)=>{return e.brand.includes("SnapFrame") ? 1 : 0}) == 1 ? 
              <>
                <span className='w-full h-auto text-xl font-bold underline underline-offset-2 text-black'>
                  Frame Color:
                </span>
                <span className={`${img3Toggle ? 'text-orange-900' : 'text-slate-500'} 
                pl-2 text-xl transition ease-in-out duration-200`}>
                  {img3Toggle ? 'Brown' : 'Grey'}
                </span>
                <div className='BtnWrapper w-60 h-12 flex justify-start gap-2'>
                  <div className='size-8 my-auto flex rounded-full border-2 border-spacing-8 border-black'>
                    <button className={`${img3Toggle !== true ? 'size-7 border-yellow-400 border-2' : 'size-4'} 
                    m-auto rounded-full bg-slate-500
                    hover:size-7 hover:border-yellow-400 hover:border-2`}
                    onClick={img1Toggle ? handleimg2Toggle : handleimg1Toggle} 
                    />
                  </div>
                  <div className='size-8 my-auto flex rounded-full border-2 border-spacing-8 border-black'>
                    <button className={`${img3Toggle ? 'size-7 border-yellow-400 border-2' : 'size-4'} 
                    m-auto rounded-full bg-amber-900
                    hover:size-7 hover:border-yellow-400 hover:border-2`}
                    onClick={handleimg3Toggle} 
                    />
                  </div>
                </div>
              </>
              :  
              <>
                <span className='w-full h-auto text-xl font-bold underline underline-offset-2 text-black'>
                  Apperal Color:
                </span>
                <span className={`${img1Toggle ? 'text-black' : 'text-white bg-fuchsia-950/30 pr-2'} 
                pl-2 text-xl transition ease-in-out duration-200`}>
                  {img1Toggle ? 'Black' : 'White'}
                </span>
                <div className='w-60 h-12 flex justify-start gap-2'>
                  <div className='size-8 my-auto flex rounded-full border-2 border-spacing-8 border-black'>
                    <button className={`${img1Toggle ? 'size-7 border-yellow-400 border-2' : 'size-4'} 
                    m-auto rounded-full bg-neutral-950
                    hover:size-7 hover:border-yellow-400 hover:border-2`}
                    onClick={handleimg1Toggle} 
                    />
                  </div>
                  <div className='size-8 my-auto flex rounded-full border-2 border-spacing-8 border-black'>
                    <button className={`${img1Toggle !== true ? 'size-7 border-yellow-400 border-2' : 'size-4'} 
                    m-auto rounded-full bg-white
                    hover:size-7 hover:border-yellow-400 hover:border-2`}
                    onClick={handleimg2Toggle} 
                    />
                  </div>
                </div>
              </>}
            </div>
            <div className="SizeSection w-full h-auto pb-4 border-b-2 border-black">
              <span className='w-full h-auto text-xl font-bold underline underline-offset-2 text-black'>
                Size:
              </span>
              <span className={`text-black pl-2 text-xl`}>
                {
                  sizeSmToggle ? 'Small' : 
                  sizeMdToggle ? 'Medium' :
                  sizeLgToggle ? 'Large' :
                  sizeXlToggle ? 'X-Large' :
                  size2XlToggle ? '2X-Large' :
                  null
                }
              </span>
              <div className='BtnWrapper w-60 h-12 flex justify-start gap-2'>
                <div className='size-10 my-auto flex rounded-md border-2 border-spacing-8 border-black'>
                  <button className={`${sizeSmToggle === true ? "border-yellow-400 border-[1px]" : ""} 
                  size-full m-auto rounded-md bg-neutral-950
                  hover:size-9 hover:border-yellow-400 hover:border-[1px]
                  text-white text-xs`}
                  onClick={(size)=>{handleSizeToggle(size)}} 
                  >
                    SM
                  </button>
                </div>
                <div className='size-10 my-auto flex rounded-md border-2 border-spacing-8 border-black'>
                  <button className={`${sizeMdToggle === true ? "border-yellow-400 border-[1px]" : ""} 
                  size-full m-auto rounded-md bg-neutral-950
                  hover:size-9 hover:border-yellow-400 hover:border-[1px]
                  text-white text-xs`}
                  onClick={(size)=>{handleSizeToggle(size)}} 
                  >
                    MD
                  </button>
                </div>
                <div className='size-10 my-auto flex rounded-md border-2 border-spacing-8 border-black'>
                  <button className={`${sizeLgToggle === true ? "border-yellow-400 border-[1px]" : ""} 
                  size-full m-auto rounded-md bg-neutral-950
                  hover:size-9 hover:border-yellow-400 hover:border-[1px]
                  text-white text-xs`}
                  onClick={(size)=>{handleSizeToggle(size)}} 
                  >
                    LG
                  </button>
                </div>
                <div className={`${ItemBrandDesc.includes('SnapMerch') ?  "block" : "hidden"} size-10 my-auto flex rounded-md border-2 border-spacing-8 border-black`}>
                  <button className={`${sizeXlToggle === true ? "border-yellow-400 border-[1px]" : ""} 
                  size-full m-auto rounded-md bg-neutral-950
                  hover:size-9 hover:border-yellow-400 hover:border-[1px]
                  text-white text-xs`}
                  onClick={(size)=>{handleSizeToggle(size)}} 
                  >
                    XL
                  </button>
                </div>
                <div className={`${ItemBrandDesc.includes('SnapMerch') ?  "block" : "hidden"} size-10 my-auto flex rounded-md border-2 border-spacing-8 border-black`}>
                  <button className={`${size2XlToggle === true ? "border-yellow-400 border-[1px]" : ""} 
                  size-full m-auto rounded-md bg-neutral-950
                  hover:size-9 hover:border-yellow-400 hover:border-[1px]
                  text-white text-xs`}
                  onClick={(size)=>{handleSizeToggle(size)}} 
                  >
                    2XL
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`Section2 
          w-full min-h-[20rem] p-8 flex justify-around flex-wrap border-b-2 border-black
          ${[...ImageGalleryData].filter((e)=>{if(currenthref.includes(e.link)) return e.image}).map((e)=> {return e.inStock == true ? 1 : 0}) == 1 ? "block" : "hidden"} 
          `}>
            <div className='QuantityOption h-20 basis-1/3 m-auto flex gap-0.5 rounded-xl text-2xl text-white border-4 border-transparent bg-gradient-to-br from-cyan-500 via-violet-700 to-fuchsia-700'>
              <button onClick={()=>{if(cartAmount > 1) setCartAmount((prev) => prev - 1)}} className='size-full m-auto text-4xl hover:text-5xl active:text-4xl rounded-l-xl bg-neutral-950/35'>
                -
              </button>
              <span className='w-full h-full flex flex-col justify-center text-center bg-neutral-950/30'>
                {cartAmount}
              </span>
              <button onClick={()=>setCartAmount((prev) => prev + 1)} className='size-full m-auto text-4xl hover:text-5xl active:text-4xl rounded-r-xl bg-neutral-950/35'>
                +
              </button>
            </div>
            <div className='AddItemBtn h-20 basis-1/2 lg:basis-60 m-auto rounded-xl text-white bg-blue-600'>
              <button onClick={() => handleCartBtn()} className='size-full m-auto text-xl hover:text-[1.4rem] active:text-xl'>
                Add to Cart
              </button>
            </div>
            <div className='BuyNowOption h-20 w-full basis-full m-auto rounded-xl bg-black'>
              <Link to="/checkout">
                <button onClick={() => handleCheckoutBtn()} className='size-full m-auto text-2xl text-white hover:text-[1.7rem] active:text-2xl'>
                  Buy {cartAmount} Now
                </button>
              </Link>
            </div>
          </div>
          <div className='Section3 w-full h-full p-6 overflow-x-hidden overflow-y-auto'>
            <span className='text-center text-wrap text-2xl text-black'>
              <span className='font-bold'>Insert Product Description Here.</span> 
              <br/>
              <span className='text-lg'>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
              </span>
            </span>
          </div>
        </div>
      </div> 
      
      <div className='AlsoLikeSection w-screen max-lg:[1000vh] lg:h-[60vh] pt-8 flex flex-col justify-center bg-gradient-to-b from-gray-300 to bg-neutral-400'> 
        <MayAlsoLikeSection />
      </div>

    </div>
  )
}

export default Page_ItemSelection
