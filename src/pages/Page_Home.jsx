import HomeImageSlides from '../components/HomeImageSlides'
import HomeProductCards from '../components/HomeProductCards';
import HomeProductDeal from '../components/HomeProductDeal';
import HomeReviews from '../components/HomeReviews';
import HomeTourLocation from '../components/HomeTourLocation';
import Home_StoreNotice from '../components/Home_StoreNotice';
import SnapDivider from '../components/SnapDivider';



function Page_Home() {
  return (
    <>
      <HomeImageSlides />
        <SnapDivider />
      <HomeProductCards />
      <Home_StoreNotice />
      <HomeReviews />
      <HomeProductDeal />
        <SnapDivider />
      <HomeTourLocation />
    </>
  )
}

export default Page_Home
