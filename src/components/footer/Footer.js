









import React from 'react';
import './Footer.css';



export default function Footer(props){
    return(
        <div className="footer">

            <div className="footer-legal"> 

                <div className ="footer-legal-list">
                       <span><a href="/term">Developed by Humbe Jeffrey</a></span> 
                </div>

                <div  className ="footer-legal-list">
                        <span><a href='/#'>&copy;{ new Date().getFullYear()} Copyright Huje Soft Inc.</a></span>
                </div>  

           </div>

        </div>
       
    )
}