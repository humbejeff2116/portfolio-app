









import React from 'react';
import {Link} from 'react-router-dom';
import { FaTwitter,FaFacebookSquare,FaLinkedinIn,FaGithubSquare} from 'react-icons/fa';
import './Footer.css';



const socialLinks = [
    {name:"Li",href:"linkedin.com/jeffrey123",icon:< FaLinkedinIn className="footer-nav-icon" />},
    {name:"Gi",href:"linkedin.com/jeffrey123",icon:< FaGithubSquare className="footer-nav-icon"/>},
    {name:"Fa",href:"linkedin.com/jeffrey123",icon:< FaFacebookSquare className="footer-nav-icon" />},
    {name:"Tw",href:"linkedin.com/jeffrey123",icon:< FaTwitter className="footer-nav-icon" />}
]
export default function Footer(props){
    return(
        <div className="footer">
            <div className="footer-social">
              < FooterSocialbarComp links={socialLinks}/>
            </div>

            <div className="footer-legal"> 

                <div className ="footer-legal-list">
                       <span><a href="/term" target="_blank">Developed by Humbe Jeffrey</a></span> 
                </div>

                <div  className ="footer-legal-list">
                        <span><a href='/#'>&copy;{ new Date().getFullYear()} Copyright Huje Soft Inc.</a></span>
                </div>  

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