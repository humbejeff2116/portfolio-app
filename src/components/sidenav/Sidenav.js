import React from 'react';
import { Link , NavLink} from 'react-router-dom';
import { BsArrowRight} from "react-icons/bs";
import './Sidenav.css';



export default function SideNav(props){

    return (
        <>
        <section className="side-nav"> 

            <div className="side-nav-open">
                <Link to='#' className="side-nav-open-link" >
                    <i><BsArrowRight className="nav-icon"/></i> 
                </Link>
            </div>

            <nav>

                {
                    props.links.map((link,i)=>
                    <NavLinks  key={i} {...link} />

                        )
                }
            
            </nav>

        </section>
        </>

    )
    
}



function NavLinks(props){

    return (

        <div className="side-nav-item" >

        <NavLink
        exact 
        to={props.href} 
        activeClassName="sidenav-link-active"
        className="side-nav-link" >
            <i>{props.icon}</i> <span className="sidenav-link-text">{props.name}</span>
        </NavLink> 

        </div>

    ) 

}