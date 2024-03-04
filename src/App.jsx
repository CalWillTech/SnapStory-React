import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import React from "react";
import './App.css'

import { ImageGalleryData } from './data/StorePageData'
import { ShopContextProvider } from "./context/shop_context";
import Page_TourLocations from "./pages/Page_TourLocations";
import Error404 from "./pages/Error404";
import Page_Checkout from "./pages/Page_Checkout";
import Layout from "./layout/Layout";
import Page_Home from "./pages/Page_Home";
import Page_PhotoBook from "./pages/Page_PhotoBook";
import Page_Store from "./pages/Page_Store";
import Page_ItemSelection from "./pages/Page_ItemSelection";
import Page_Attribution from "./pages/Page_Attribution";
import Page_SearchResults from "./pages/Page_SearchResults";
import Page_FAQ from "./pages/Page_FAQ";
import Page_HelpCenter from "./pages/Page_HelpCenter";
import Page_Shipping from "./pages/Page_Shipping";
import Page_OurStory from "./pages/Page_OurStory";

function App() {
  return (
    <div id="App" className='box-border overflow-x-clip font-RedHatDisplay'>
      <ShopContextProvider>
        <Router>
          <Routes >
            <Route path='/' element={<Layout />}> 
              <Route index element={<Page_Home />} /> 

              <Route path='photo-book' element={<Page_PhotoBook />} />
              <Route path='tour-locations' element={<Page_TourLocations />} />
                
              <Route path='search-results' element={<Page_SearchResults />} />
              <Route path='search-results/:id' element={<Page_SearchResults />} />

              <Route path='/store' element={<Page_Store />} />
              <Route path="/store/snapmerch" element={<Page_Store />} />
              <Route path="/store/snapframes" element={<Page_Store />} />
              {ImageGalleryData.map((item)=> {
                return(
                  <React.Fragment key={item.id}>
                    <Route path={`/store/item/${item.link}`} element={<Page_ItemSelection />} />
                  </React.Fragment>
                )}
              )}
              <Route path="checkout" element={<Page_Checkout />} />

              <Route path='help-center' element={<Page_HelpCenter />} />
              <Route path='attribution' element={<Page_Attribution />} />
              <Route path='FAQ' element={<Page_FAQ />} />
              <Route path='shipping' element={<Page_Shipping />} />
              <Route path='our-story' element={<Page_OurStory />} />

              <Route path='*' element={<Error404 />} />
            </Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
