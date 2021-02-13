import React from 'react';
import AnimClock from '../animClock/Animclock'
import SocialBar from '../socialbar/SocialBar';
import ApplicationData from '../../Data/data';



export default function RightPane(){

    const socialLinks = ApplicationData.getMainSocialLinks()
      
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