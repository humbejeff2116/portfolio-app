








import React from 'react';
import  PictureComp from '../pictureModule/Picturemodule';
// import {SkillsTemplate} from '../skillsModule/Skillsmodule';
import { BsArrowRight} from "react-icons/bs";
import {PagesTemplate} from '../template/Template'

import RightPane from '../pictureModule/Rightpane';
import './About.css';




export default function AboutComp(props) {

    return(
    
        <PagesTemplate 
        top={ <PictureComp leftPane={ <AboutHeader/> } rightPane={ <RightPane/> } /> }
        leftPane={<AboutBodyLeft />}
        rightPane={<AboutBodyRight/>} 
        />
       
    )

}

function AboutBodyRight(props){
    return(
        <>
        </>
    )
}
function AboutBodyLeft(){
    return(
        <div className="about-info">
            <h2>About me</h2>
        <p> 
            Knowing fully well the community I find my self in and the global reputation that might come with it, 
            when I started out on this journey my biggest challenge wasn't about learning to write algorithms,
            program or build things it was accepting the challenges that comes with who I am and where am from.
            On my journey here I have been so many things like being a poet to being an artist and at some point to also beign an Electrical/Electronics technician(love it till now),
            but only now do I realize they were all part of the process to bringing me here and I am glad I didnt cheat it.
        </p>
        <p>
             I could go on to tell you about my programming capabilities, how much I love what I do or what I have achieved and would like to achieve in the tech terrain, but that story
             is bettter told with what I have achomplised which for me is how much positive impact I have to the software development community rather than the man whose life revolves around his computer system. 
             Since i have a strong eye for details and always curious about anything about software development,   a reason why i love learning new things          
        </p>
             {/* <p>
            
              i love  paying attention to details and 
             </p> 
             When most people would  pay attention to the science of programming or development i
              see it more as an art-of-science */}

        </div>
    )
}

function AboutHeader(props){

    return(
        <>
    <div className="pic-mod-intro">
        <h1>Hi, I am Humbe Jeffrey, a software developer. </h1> 
        <p>I am a, mordern, self taught web and mobile application software developer, from &#127475;&#127468; Nigeria, whose 
            priorities in software development include scalability, high performance and security.
        </p>
     </div>
     <div className="arrow">  <p><i><BsArrowRight className="arrow-down"/></i> </p></div>
     </>
     

    )
}