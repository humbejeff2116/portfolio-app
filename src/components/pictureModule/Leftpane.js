








import React from 'react';
import { BsArrowRight} from "react-icons/bs";


export default function LeftPane(props){
    return(
        <>
       
        <div className="pic-mod-intro">
           <h1>Hi, I am Humbe Jeffrey, a software developer. </h1> 
           <p>I am a, mordern, self taught web and mobile application software developer, from &#127475;&#127468; Nigeria, whose 
               priorities in software development include scalability, high performance and security. </p>
               {/* <h3>what motivates you?</h3>
               <p>"the fear of not knowing enough motivates me"</p> */}

               <button className="pic-mod-intro-hire"> Contact me</button>
             
        </div>
        <div className="arrow">  <p><i><BsArrowRight className="arrow-down"/></i> </p></div>
        </>

    )
}