


















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
        leftPane={< ProjectsBodyLeft />}
        rightPane={<ProjectsBodyRight/>} 
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
        <p> knowing fully well the community i find my self in and the global reputation that might come with it, 
            when i started out on this journey my biggest challenge wasnt about learning to write algorithms or program it was accepting the challenges 
            that comes with who i am and where am from.
            on my journey here i have been so many things i thought i shouldnt be but only now do i realize they were all part of the process and i am glad i didnt cheat it
             .
             i could tell you about my programming cababilities and how much i love what i do or what i have achieved and would like to achieve in the tech world but that story
             is bettter told with what i have achomplisehed which is how much impact i have made in the software develoment community rather than the man whose life revolves around this system.
            
             </p>
             {/* <p>
            
              i love  paying attention to details and 
             </p> */}

        </div>
    )
}
function ProjectsBodyRight(props){
    return(
        <>
        </>
    )
}