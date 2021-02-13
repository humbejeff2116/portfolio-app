import React from 'react';
import {Link} from 'react-router-dom';
import { BsArrowRight} from "react-icons/bs";
import {RiMailSendLine} from "react-icons/ri";
import ApplicationData from '../../Data/data';


export default function IndexLeftPane(props){
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const indexInfoData = ApplicationData.getIndexInfo();
    return(
        <>
       
        <div 
        className={`pic-mod-intro image-${imageLoaded ? 'visible' :  'hidden'}` }  
        onLoad={ ()=> setImageLoaded(true) } >
            {
                indexInfoData.map( (data,i) =>
                <IndexInfoCard key={i} {...data} imageLoaded={ imageLoaded } />
                )

            }      
        </div>

        <div className="pic-mod-arrow" >
        <span><i><BsArrowRight className="arrow-down"/></i></span>
        </div>
        
        </>

    )
}

function IndexInfoCard(props){

    return(
    <>
        <div className="smooth-image-wrapper">
        <img
          src={props.imageSrc}
          alt="about-me"
          width="100%"
          height="100%"
          className={`smooth-image image-${props.imageLoaded ? 'visible' :  'hidden'}`}
         
        />
      
      </div> 
           <h1>{props.heading} </h1> 
           <p>{props.body}</p>
              
               <Link to="contact" className="contact-link" >
                <button className="pic-mod-intro-hire">
                    <i> <RiMailSendLine className="contact-bttn-icon"/></i>
                    Contact me
                </button>
               </Link>
    </>

    )
}