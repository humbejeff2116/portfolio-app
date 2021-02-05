import React from 'react';
import { BsArrowRight} from "react-icons/bs";
import  PictureComp from '../pictureModule/Picturemodule';
import RightPane from '../pictureModule/Rightpane';
import {PagesTemplate} from '../template/Template';
import './Projects.css';




export default function ProjectComp(props) {

    return(

        <PagesTemplate 
        top={ <PictureComp leftPane={ <ProjectsHeader/> } rightPane={ <RightPane/> } /> }
        bottomLeftPane={< ProjectsBodyLeft />}
        bottomRightPane={<ProjectsBodyRight/>} 
        />

    )


}

function ProjectsHeader(props){

    return(
        <>
        <div className="pic-mod-intro">
        <h1>Hi, I am Humbe Jeffrey, a software developer. </h1> 
        <p>I am a, mordern, self taught web and mobile application software developer, from &#127475;&#127468; Nigeria, whose 
            priorities in software development include scalability, high performance and security. </p>
            <div>
                <p>projects sits here</p>
            </div>
     </div>
     <div className="arrow">  <p><i><BsArrowRight className="arrow-down"/></i> </p></div>
     </>

    )
}
function ProjectsBodyLeft(){
    return(
        <div className="project-info">
            <h2>My Projects</h2> 
        </div>
    )
}
function ProjectsBodyRight(props){
    return(
        <>
        </>
    )
}