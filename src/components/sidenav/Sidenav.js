import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidenav.css';

export default function SideNav(props) {
 
    return (
        <>
        <section className="side-nav" id="open-side-nav" > 
            <nav>
            {
                props.links.map((link, i) =>
                    <NavLinks  key={i} {...link} />
                )
            }
            </nav>
        </section>
        </>
    )   
}

function NavLinks(props) {
    return (
        <div className="side-nav-item" >
            <NavLink
            exact 
            to={props.href} 
            activeClassName="sidenav-link-active"
            className="side-nav-link" 
            title={props.name} >
                <i>{props.icon}</i> 
            </NavLink> 
        </div>
    ) 
}