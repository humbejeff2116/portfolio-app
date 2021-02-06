import React from 'react';
import  PictureComp from '../pictureModule/Picturemodule';
import {PagesTemplate} from '../template/Template'
import RightPane from '../pictureModule/Rightpane';

import './contact.css';





export default function ContactComp(props) {

    return(
    
        <PagesTemplate 
        top={ <PictureComp leftPane={ <ContactHeader contactItems={props.contactItems} /> } rightPane={ <RightPane/> } /> }
       
        />
       
    )

}


function ContactHeader(props){
   
   
    return(

       
     <div className="contact-intro" >
         <div>
             <h2>Contact Me</h2>
         </div>
         <div className="contact-ls" >
         {
             props.contactItems.map((contact,i)=>
             <ContactCard {...contact} key={i} />
             )
         }

         </div>
        

     </div>
     

    )
}

function ContactCard(props){
    return(
           
             <div className={`contact-bio `}>

                 
           <p className="about-tg">
               <i> {props.contactIcon} </i>
               <span>{ props.contactType +" :"}  </span>    
               <span className="contact-item"> {props.contactItem } </span>  
            </p> 
           
            </div>
            
    )
}



