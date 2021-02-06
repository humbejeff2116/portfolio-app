import React from 'react';
import  PictureComp from '../pictureModule/Picturemodule';
import RightPane from '../pictureModule/Rightpane';
import {PagesTemplate} from '../template/Template';
import './Projects.css';




export default function ProjectComp(props) {

    return(

        <PagesTemplate 
        top={ <PictureComp leftPane={ <ProjectsHeader/> } rightPane={ <RightPane/> } /> }
       
        />

    )

}

function ProjectsHeader(props){

    return(
       
        <div className="project-mod-intro">
        <h1>Hi, I am Humbe Jeffrey, a software developer. </h1> 
        <p>I am a, mordern, self taught web and mobile application software developer, from &#127475;&#127468; Nigeria, whose 
            priorities in software development include scalability, high performance and security. </p>
            <div>
                <p>projects sits here</p>
            </div>
     </div>
    
    )
}
