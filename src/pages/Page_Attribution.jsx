/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../images/antenna-EL4CGRnwwNc-unsplash.jpg"
import img2 from "../images/jannis-edelmann-G69CWIw1SEU-unsplash.jpg"
import img3 from "../images/pink-beanie-with-cuff-women-s-winter-accessories-rawpixel-freepik.jpg"
import img4 from "../images/SnapStory-portrait-landscape.jpeg"
import favIcon from "../images/freepik-favicon-96x96.webp"
import favIcon2 from "../images/AdobeExpress-favicon.png"
import { Link } from "react-router-dom";
import { faUnsplash } from "@fortawesome/free-brands-svg-icons";


function Page_Attribution() {
  return (
    <div className="w-screen max-h-[1000vh] h-auto flex flex-col">
      <div className="SectionAttribution w-full h-[30rem] flex">
        <img src={img1} alt="image 1" className="size-full object-cover flex-[1_0_100%]"/>
        <div className="BlackTextOutline size-full pt-40 flex-[1_0_100%] flex-wrap relative right-full text-center font-black text-white text-5xl md:text-7xl bg-black/30">
          <span className="h-3/4 basis-full text-center cursor-default">
            Attributions
          </span>
          <span className="basis-full pr-80 text-right text-2xl font-normal hidden md:block">
            <Link to={"https://unsplash.com/photos/person-looking-at-gallery-art-pieces-on-wall-EL4CGRnwwNc"}
            className="hover:text-cyan-100">
              <span className="">Antenna - Francisca Montes</span>
            </Link>
          </span>
        </div>
      </div>
      <div className="w-full min-h-[25rem] flex flex-col text-2xl text-center">
        <span className="basis-full pt-20 py-10">
          Thanks to these sites free license and amazing talent, this store would be pretty boring... <br/> 
          ('*v* ) <br/><br/> 
          If you have the time, please take a look these wonderful artists and models works and go support them. <br/>
          Any help will be greatly appreciated. <br/>
          Thank you! <br/>
          <span className="group">
            '\ (^v^) /' <span className="group-hover:text-red-700 transition-all duration-200">♥</span>
          </span>
        </span>
      </div>
      <div className="SectionUnSplash w-full h-[30rem] flex">
        <img src={img2} alt="image 2" className="size-full object-cover flex-[1_0_100%]"/>
        <span className="size-full pt-40 flex-[1_0_100%] relative right-full text-center font-black text-white text-5xl md:text-7xl bg-black/30 cursor-default">
          <Link reloadDocument to={"https://unsplash.com/"}
          className="WhiteTextOutline hover:text-white transition-all duration-200">
            <FontAwesomeIcon icon={faUnsplash} className="pr-4 text-white" />
            Unsplash
          </Link>
        </span>
      </div>
      <div className="Attribute-li">
        <ul className="basis-full mx-auto flex flex-col pt-20 py-10 list-disc">
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Danny Howe -<em className="font-normal">"Concert, strobing red lights."</em></li>
            <Link to={"https://unsplash.com/photos/group-of-people-inside-the-concert-gwQAhisLnRA"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1504680177321-2e6a879aac86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">ActionVance -<em className="font-normal">"The crowd goes wild."</em></li>
            <Link to={"https://unsplash.com/photos/crowd-facing-lighted-stage-eXVd7gDPO9A"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Tengku Nadia -<em className="font-normal">"gathering under hanging laterns."</em></li>
            <Link to={"https://unsplash.com/photos/people-near-balloons-fz8_SONkBB8"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1569930784237-ea65a2f40a83?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Nainoa Shizuru -<em className="font-normal">"Band members in yellow lights."</em></li>
            <Link to={"https://unsplash.com/photos/concert-photos-NcdG9mK3PBY"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Jannis Edelmann -<em className="font-normal">"Camera in front of light panel."</em></li>
            <Link to={"https://unsplash.com/photos/person-holding-dslr-camera-G69CWIw1SEU"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1563404203912-0b424db17de6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Francisca Montes -<em className="font-normal">"person looking at gallery art pieces on wall."</em></li>
            <Link to={"https://unsplash.com/photos/person-looking-at-gallery-art-pieces-on-wall-EL4CGRnwwNc"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1515169974372-0a322886d279?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">jhin5 -<em className="font-normal">"person holding black camera."</em></li>
            <Link to={"https://unsplash.com/photos/person-holding-black-camera-2MYcbBBh9kE"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1579260729526-ca1e77ad9092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">skyhookfx -<em className="font-normal">"A simple picture frame on an office desk with potted plants behind it."</em></li>
            <Link to={"https://unsplash.com/photos/a-white-frame-sitting-on-top-of-a-table-next-to-a-potted-plant-wjaFG81Or0Y"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1640231026037-ffef7d41a14e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Joey Nicotra -<em className="font-normal">"Man holding camera."</em></li>
            <Link to={"https://unsplash.com/photos/man-holding-dslr-camera-wearing-green-button-up-jacket-beside-cars-2FhRTB11FGg"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1542103131-b4a52ad279d0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Noah F -<em className="font-normal">"Rin live."</em></li>
            <Link to={"https://unsplash.com/photos/man-holding-microphone-ZMwZGBTgEUs"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1576967402682-19976eb930f2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Tijs van Leur -<em className="font-normal">"A music fan enjoying a rock concert."</em></li>
            <Link to={"https://unsplash.com/photos/people-watching-band-on-the-stage-So6YckShOVA"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1565035010268-a3816f98589a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Austin Neill -<em className="font-normal">"Lead singer."</em></li>
            <Link to={"https://unsplash.com/photos/man-in-gray-quarter-sleeved-shirt-singing-hgO1wFPXl3I"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Rachel Coyne -<em className="font-normal">"Cue the lights."</em></li>
            <Link to={"https://unsplash.com/photos/group-of-people-watching-concert-U7HLzMO4SIY"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Dmitry Mashkin -<em className="font-normal">"Blank wooden picture frame."</em></li>
            <Link to={"https://unsplash.com/photos/white-wooden-framed-mirror-on-brown-wooden-table-hyGXlmNeK-I"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1611651525144-42027e7f45ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Derick Mckinney -<em className="font-normal">"Person taking in the arts."</em></li>
            <Link to={"https://unsplash.com/photos/sketches-on-wall-oARTWhz1ACc"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1573512443418-c6768862dda7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Yong Chuan Tan -<em className="font-normal">"City with high rise buildings at night."</em></li>
            <Link to={"https://unsplash.com/photos/city-with-high-rise-buildings-at-night-tWdhZivlOig"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1538831539254-abe4ffd1a812?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div border-b-0">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Joe Lavigne -<em className="font-normal">"red and white stop sign."</em></li>
            <Link to={"https://unsplash.com/photos/red-and-white-stop-sign-CV1KEOa7258"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1622662934825-28510da42b77?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
        </ul>
      </div>
      <div className="SectionRawPixel w-full h-[30rem] flex">
        <img src={img3} alt="image 3" className="size-full object-cover flex-[1_0_100%]"/>
        <span className="size-full pt-40 flex-[1_0_100%] relative right-full text-center font-black text-white text-5xl md:text-7xl bg-black/40 cursor-default">
          <Link reloadDocument to={"https://www.freepik.com/author/rawpixel-com"}
          className="BlackTextOutline-Hover size-12 md:size-20 m-auto flex justify-center hover:text-black text-blue-400 transition-all duration-200">
            <img src={favIcon} alt="freepik favicon" className="pr-4 h-auto text-white" />
            FreePik
          </Link>
        </span>
      </div>
      <div className="Attribute-li">
        <ul className="basis-full mx-auto flex flex-col pt-20 py-10 list-disc">
          <div className="AttributeTextWrapper-div">
            <li className="basis-1/4 text-wrap font-bold cursor-default">rawpixel -<em className="font-normal">"Free photo pink beanie with cuff women's winter accessories."</em></li>
            <Link reloadDocument to={"https://www.freepik.com/free-photo/pink-beanie-with-cuff-women-s-winter-accessories_15439782.htm#query=pink%20beanie&position=23&from_view=search&track=ais&uuid=4c0053f2-f95b-4376-a780-32952a0b84ef#position=23&query=pink%20beanie"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://img.freepik.com/free-photo/pink-beanie-with-cuff-women-s-winter-accessories_53876-101507.jpg?w=826&t=st=1708074877~exp=1708075477~hmac=096891c38a57c968ae02bd908601d87314cdfc20a80591843ec581cc250992c4"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="basis-1/4 text-wrap font-bold cursor-default">ibrandify -<em className="font-normal">"Realistic photo frame."</em></li>
            <Link to={"https://www.freepik.com/free-vector/realistic-photo-frame_1112769.htm"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://img.freepik.com/free-vector/realistic-photo-frame_1057-4359.jpg?w=826&t=st=1708077383~exp=1708077983~hmac=0b8c1e23aab79224b4fc3d2ea9395b88f34226b939cef0a98f00793f6fa18cd7"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="basis-1/4 text-wrap font-bold cursor-default">Vectonauta -<em className="font-normal">"Free photo black cap front view isolated."</em></li>
            <Link to={"https://www.freepik.com/free-photo/black-cap-front-view-isolated_15197835.htm#query=black%20baseball%20cap&position=7&from_view=search&track=ais&uuid=192d2f83-7719-4b88-97d6-f203631620c1"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://img.freepik.com/free-photo/black-cap-front-view-isolated_125540-1019.jpg?w=1380&t=st=1708081354~exp=1708081954~hmac=06a47d60f018ab3ac898d4a9f207e2e51f19ee6f9c937b43520fe04f36c8b6be"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="basis-1/4 text-wrap font-bold cursor-default">Vectonauta -<em className="font-normal">"Free PSD isolated white t-shirt front view."</em></li>
            <Link to={"https://www.freepik.com/free-psd/isolated-white-t-shirt-front-view_16188195.htm#query=black%20tee%20shirt&position=0&from_view=search&track=ais&uuid=ffa01e6f-12ac-4f2c-8ca2-e848ed42434e"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg?w=1380&t=st=1708081463~exp=1708082063~hmac=c98f93190fc3140037fe13cb224ddcc4929986a6a529b37de674b2746094e4b8"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div border-b-0">
            <li className="basis-1/4 text-wrap font-bold cursor-default">Vectonauta -<em className="font-normal">"Free photo dark modern blank picture frame on a shelf."</em></li>
            <Link to={"https://www.freepik.com/free-photo/dark-modern-blank-picture-frame-shelf_19096904.htm#page=3&query=black%20picture%20frame&position=21&from_view=search&track=ais&uuid=740bce99-de73-43c9-8109-887a2264bc96"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://img.freepik.com/free-photo/dark-modern-blank-picture-frame-shelf_53876-146612.jpg?w=1380&t=st=1708081762~exp=1708082362~hmac=d8688979cb6a1fb545353291572e4706809c2a5f4aba750d8efe2fdac0819b7c"} className="Cyan-Link"> Photo</Link>
          </div>
        </ul>
      </div>
      <div className="SectionAdobeExpress w-full h-[30rem] flex">
        <img src={img4} alt="image 4" className="size-full object-fill flex-[1_0_100%]"/>
        <span className="size-full pt-40 flex-[1_0_100%] relative right-full text-center font-black text-white text-4xl bg-black/55 cursor-default">
          <span className="text-2xl">Made with</span>
          <Link reloadDocument to={"https://new.express.adobe.com"}
          className="size-20 m-auto flex justify-center hover:text-black transition-all duration-200">
            <img src={favIcon2} alt="adobe express favicon" className="pr-4 size-full text-white object-contain" />
            <span className="FaviconTextOutline transition-all duration-500 text-black hover:text-transparent">Adobe Express</span>
          </Link>
        </span>
      </div>
    </div>
  )
}

export default Page_Attribution
