import React from 'react';
import SideNav from '../sidenav/Sidenav';
import Footer from '../footer/Footer';
import  './Template.css';
import ApplicationData from '../../Data/data';
import SocialBar from '../socialbar/SocialBar';


export default function Template(props){
    const sideNavLinks = ApplicationData.getSideNavLinks()
    const socialLinks = ApplicationData.getMainSocialLinks()

    return(
        <>

      <SideNav links={sideNavLinks} />
      <div className="container">
          <div className="children-container" >
          {props.children}

          </div>
         
          <div className="social-nav" >
          <SocialBar links={socialLinks}/>
          </div>
      </div>
        <Footer />

        </>
    )

}

export function PagesTemplate(props){

    if(!props.bottomLeftPane && !props.bottomRightPane){
        return(
            <div  className="pge-top-contr">
            {props.top} 
            </div>         
        )
    }
   

  return(
      
      <>
      {props.top}
      <div className="pgtemp-bottom-contr">
          <div className="pgtemp-bttm-bdy-left">
              {props.bottomLeftPane}

          </div>
          <div className="pgetemp-bttm-bdy-right">
              {props.bottomRightPane}
          </div>
      </div>
      </>
    
  )
}
export function IndexPageTemplate(props){
   
        return(
            <>
                {props.top}
            <div className="pgtemp-only-bottom-contr">               
                {props.bottom}               
            </div>
            </>

        )
    

}