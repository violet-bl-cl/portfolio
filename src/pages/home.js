import React, {useRef} from 'react';
import DesktopHeader from '../components/header';
import NavigationMenu from '../components/navigationBar';
import {BrowserView,MobileView} from 'react-device-detect';


const Home = () =>
{
      //scroll system
  const listInnerRef = useRef();
  const heightValue = window.innerHeight;
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
    //  const temp = (scrollTop + clientHeight);
      if (scrollTop + clientHeight === scrollHeight) {
        console.log("reached bottom");
       // <Header></Header>
      }
      else if(((scrollTop + clientHeight)) === heightValue) {
        console.log("reached top");
      }
      else  {
        console.log((scrollTop + clientHeight));
      }
    }
  };
    return (
        //Only Website , Mobile view is only
        <>
     <BrowserView>
     <div onScroll={onScroll} ref={listInnerRef} style={{overflowY: "scroll", height: heightValue}}>
         <DesktopHeader/>
         <NavigationMenu/>
     </div>
     </BrowserView>
      
     <MobileView>
           <div onScroll={onScroll} ref={listInnerRef} style={{overflowY: "scroll", height: heightValue}}>
         
     </div>
     </MobileView>
     </> );
}
export default Home;