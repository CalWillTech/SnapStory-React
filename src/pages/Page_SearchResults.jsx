import React, { useState } from "react"
import { Link, useParams } from "react-router-dom";
import { ImageGalleryData } from '../data/StorePageData'
import Breadcrumb_Search from "../components/Breadcrumb_Search";

function Page_SearchResults() {

  const myParams = useParams();
  const [query, setQuery] = useState(myParams.id);

  return (
    <div className='SearchResultsPage w-screen h-auto'>
      <Breadcrumb_Search />
      <div className="SearchSection w-full h-20 flex justify-center bg-gradient-to-r from-cyan-800 to-violet-900">
        <form action={`/search-results/${query}`} className="w-2/3 h-auto pt-10">
          <input
          name="entry"
          type="text"
          value={query}
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          className="w-1/3 border-2 border-black rounded-lg"/>
        </form>
      </div>
      <div className="ResultsForItem w-full h-auto border-b-[1px] border-white flex justify-center bg-gradient-to-r from-cyan-800 to-violet-900">
        <span className="w-2/3 h-auto m-auto text-3xl text-white font-bold">
          Results For:
          <span className="font-normal"> {myParams.id}</span>
        </span>
      </div>
      <div className="ResultsSection w-full min-h-screen h-auto py-6 
      flex flex-col justify-center gap-8
      bg-gradient-to-br from-cyan-950 via-black to-fuchsia-950">
        {ImageGalleryData.filter((e)=> {
          if(e.description.toLowerCase().includes(myParams.id) + e.description.toUpperCase().includes(myParams.id))
          {return e;}
        })
        .map((item)=> { 
          return (
            <React.Fragment key={item.id}>
              <div className="ResultCardWrapper w-2/3 h-72 mx-auto px-2 flex flex-col justify-start 
              border-4 border-white rounded-lg shadow-md shadow-black 
              bg-gradient-to-bl from-cyan-100 to-purple-200">
                <div className="ResultName w-full h-auto border-b-4 font-bold text-3xl border-black
                transition duration-200 text-cyan-900 hover:text-fuchsia-800">
                  <Link to={`/store/item/${item.link}`}>{item.description}</Link>
                </div>
                <div className="ResultDescription w-full h-60 flex justify-between text-xl">
                  <span className="ResultDescriptionText ">
                    {item.details}
                  </span>
                  <div className="ResultDesctiptionPicture w-1/3 h-full border-[1px] border-black bg-slate-100">
                    <img src={item.image} className="size-full object-contain" />
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Page_SearchResults

