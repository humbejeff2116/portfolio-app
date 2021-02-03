








import React from 'react';
import {Link} from 'react-router-dom';
import { BsArrowRight} from "react-icons/bs";
import {RiMailSendLine} from "react-icons/ri";
import jeffweb1  from '../../images/jeffweb1.jpg';


export default function LeftPane(props){
    return(
        <>
       
        <div className="pic1-mod-intro">
           
            <img src={ jeffweb1 } width="100%" height="45%" alt="about-me"  />

           
           <h1>Hi, I am Humbe Jeffrey </h1> 
           <p>I am a, mordern, self taught web and mobile application software developer, from &#127475;&#127468; Nigeria, who is opportuned to have
               great hands on experience using React.js, Node.js and Spring Boot in developing scalable, high performing and secured applications </p>
              
               <Link to="contact" className="contact-link" >
                <button className="pic-mod-intro-hire">
                    <i> <RiMailSendLine className="contact-bttn-icon"/></i>
                    Contact me
                </button>
               </Link>
               
             
        </div>
        <div className="pic-mod-arrow" >
        <span><i><BsArrowRight className="arrow-down"/></i></span>

        </div>
        
        {/* <div className="pic-mod-arrow">  <p><i><BsArrowRight className="arrow-down"/></i> </p></div> */}
        </>

    )
}