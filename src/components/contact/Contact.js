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
         {
             props.contactItems.map((contact,i)=>
             <ContactCard {...contact} key={i} />
             )
         }

     </div>
     

    )
}

function ContactCard(props){
    return(
           
             <div className={`about-bio  `}>
            <span className="about-tg" >{props.contactType} </span> 
            <span className="about-ts" >{props.contactItem}  </span><br />
            </div>
            
    )
}



