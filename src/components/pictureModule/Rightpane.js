import React from 'react';
import AnimClock from '../animClock/Animclock'
import SocialBar from '../socialbar/SocialBar';
import { FaTwitter,FaFacebookSquare,FaLinkedinIn,FaGithubSquare} from 'react-icons/fa';



export default function RightPane(){

  
     
   
        const socialLinks = [
            {name:"Li",href:"linkedin.com/jeffrey123",icon:< FaLinkedinIn/>},
            {name:"Gi",href:"linkedin.com/jeffrey123",icon:< FaGithubSquare/>},
            {name:"Fa",href:"linkedin.com/jeffrey123",icon:< FaFacebookSquare />},
            {name:"Tw",href:"linkedin.com/jeffrey123",icon:< FaTwitter/>}
        ]
    
       

    return(
       

        <RightPaneComp
         topComponent={  
                  
            <AnimClock/>
              
        }
         bottomComponent={                          
            <SocialBar links={socialLinks} />
        } />
    )
}



function RightPaneComp({topComponent,bottomComponent}){
    return(
      <>
        <div className="pic-mod-right-top">
           {topComponent}
        </div>
     
        <div className="pic-mod-right-bottom">
            {bottomComponent}
        </div>

        </> 
    )
}