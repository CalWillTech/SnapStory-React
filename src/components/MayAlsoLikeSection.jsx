import React from 'react';
import { ImageGalleryData } from '../data/StorePageData'
import { Link } from 'react-router-dom';

function MayAlsoLikeSection() {
  return (
    <div className="MayAlsoLikeSection w-screen max-h-[1000vh] lg:h-[25rem] mb-10 md:mb-0 flex flex-col">
      <div className="MayAlosLikeText w-full h-10 md:pl-20 border-b-4 border-black max-md:text-center text-3xl font-bold text-black">
        <span>You May Also Like</span>
      </div>
      <div id='MayAlsoLikeImages' className="MayAlsoLikeImages h-full py-4 px-8 flex gap-10 max-lg:overflow-x-auto">
        {ImageGalleryData.filter((e)=>{
          if(e.inStock == true && e.price < 200 && !e.brand.match("SnapMerch") && !window.location.href.match(e.link)) {
            return e
          } else if(e.discountPrice.toString().length >= 1) {
            return e
          }
        }).map((item)=>{
          return (
            <React.Fragment key={item.id}>
              <div 
              id='AlsoLikeCards'
              className='basis-full max-lg:flex-[1_0_10rem] rounded-2xl bg-white
              shadow-md md:shadow-xl shadow-neutral-700 border-[1px] border-black
              relative hover:top-3'>
                <div className='h-[60%] lg:h-3/4 flex justify-center object-center'>
                  <Link to={'/store/item/' + item.link}>
                      <img src={item.image} alt={`image ${item.id}`} className='max-md:size-[8rem] size-[90%] m-auto object-cover' />
                  </Link>
                </div>
                <div className='h-[40%] lg:h-1/4 px-2 border-t-2 flex flex-col justify-between leading-none border-black font-bold'>
                    {item.description}
                    <span className='DealCardDescBlack text-white text-xl leading-3 pb-1'>
                        {item.discountPrice.toLocaleString().length >= 1 ? 
                        <><span className='line-through text-xs mr-2'>${item.price}</span> <br/>{item.discountPrice}</> : 
                        <>${item.price}</>
                        }
                      </span>
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default MayAlsoLikeSection
