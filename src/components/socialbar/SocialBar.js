import React from 'react';
import {Link} from 'react-router-dom';
import './SocialBar.css';





function SocailLinks(props){
    return(
        <div className="pic-mod-nav-item">
          <Link to={props.href}>  <i>{props.icon}</i></Link>
        </div> 

    )
}

export default function SocialbarComp(props){
    return(
        <nav className="pic-mod-social-nav" >              
        {
             props.links.map((link,i)=>
             <SocailLinks  key={i} {...link} />

                )
        }
        </nav>
    )

}