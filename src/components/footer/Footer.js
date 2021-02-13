import React from 'react';
import {Link} from 'react-router-dom';
import ApplicationData from '../../Data/data';
import './Footer.css';


export default function Footer(props){
    let links = ApplicationData.getFooterSocialLinks();
   
    return(
        <div className="footer">
           

            <div className="footer-legal"> 

                <div className ="footer-legal-list">
                       <span><a href="/term" target="_blank">Developed by Humbe Jeffrey</a></span> 
                </div>

                <div  className ="footer-legal-list">
                        <span><a href='/#'>&copy;{ new Date().getFullYear()} Copyright Huje Soft Inc.</a></span>
                </div>  

           </div>

           <div className="footer-social">
              < FooterSocialbarComp links={links}/>
            </div>

        </div>
       
    )
}



 function FooterSocialbarComp(props){
    return(
        <nav className="footer-social-nav" >              
        {
             props.links.map((link,i)=>
             <FooterSocailLinks  key={i} {...link} />

                )
        }
        </nav>
    )

}
function FooterSocailLinks(props){
    return(
        <div className="footer-nav-item">
          <Link to={props.href}>  <i>{props.icon}</i></Link>
        </div> 

    )
}