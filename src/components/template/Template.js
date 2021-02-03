import React from 'react';
import SideNav from '../sidenav/Sidenav';
import Footer from '../footer/Footer';
import  './Template.css';
// side nav icons 
import {BiHome,BiUser,BiFolder} from "react-icons/bi";
import {RiBookOpenLine,RiContactsBookLine} from "react-icons/ri";



let links =[
 
    {name:"Home",href:"/",icon:<BiHome className="nav-icon" />},
    {name:"About",href:"/about-me",icon:<BiUser className="nav-icon"/>},
    {name:"Projects",href:"/projects",icon:<BiFolder className="nav-icon"/>},
    {name:"Contact",href:"/contact",icon:<RiContactsBookLine className="nav-icon"/>},
    {name:"Blog",href:"/blog",icon:<RiBookOpenLine className="nav-icon"/>}
  ]

export default function Template(props){

    return(
        <>

      <SideNav links={links} />
      <div className="container">
          {props.children}
      </div>
        <Footer />

        </>
    )

}

export function PagesTemplate(props){
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