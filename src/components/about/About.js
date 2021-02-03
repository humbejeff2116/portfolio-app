








import React from 'react';
import  PictureComp from '../pictureModule/Picturemodule';
// import {SkillsTemplate} from '../skillsModule/Skillsmodule';
import { BsArrowRight} from "react-icons/bs";

import {PagesTemplate} from '../template/Template'

import RightPane from '../pictureModule/Rightpane';
import jeffweb2  from '../../images/jeffweb1.jpg';
import './About.css';




export default function AboutComp(props) {

    return(
    
        <PagesTemplate 
        top={ <PictureComp leftPane={ <AboutHeader/> } rightPane={ <RightPane/> } /> }
        bottomLeftPane={<AboutBodyLeft />}
        bottomRightPane={<AboutBodyRight/>} 
        />
       
    )

}

function AboutBodyRight(props){
    return(
        <>
        </>
    )
}
function AboutBodyLeft(props){

    return(

        <div className="about-info">

            <h2>About Me</h2>

        <p> 
            Knowing fully well the community I find my self in and the global reputation that might come with it, 
            when I started out on this journey my biggest challenge wasn't about learning to write algorithms,
            program or build things it was accepting the challenges that comes with who I am and where am from.
            On my journey here I have been so many things like being a poet, to being an artist, and at some point to also beign an Electrical/Electronics technician(love this role till now),
            but only now do I realize they were all part of the proccess to bringing me here and I am glad I didnt cheat it.
        </p>

        <p>
             I could go on to tell you about my programming capabilities, how I taught myself how to program and develop things or how much I love using JavaScript, 
             Java and their related libraries and frameworks in building scalable, high performing and secured applications,
             but I think that story is bettter told with what I have achomplised, which for me is how much I have positively impacted the software development community,
             rather than the man whose life revolves around his computer system. 
             I hardly see myself being a special developer in any way, as I believe anyone could do the same things I do, if only they are ready to sacrifice their time,
             stay focused, work hard, and continiously learn like I do.
      
        </p>

        </div>

    )

}

function AboutHeader(props){

    return(

        <>
     <div className="about-intro">
     <img src={ jeffweb2 } width="100%" height="100%" alt="about-me"  />
        {/* <h1>Please call me Jeff </h1> */}
        <div className="about-bio">
            <span className="about-tg" >Name : </span> <span className="about-ts" > Humbe Jeffrey </span><br />
            <span  className="about-tg" >Nationality : </span > <span className="about-ts" > &#127475;&#127468; Nigeria </span><br />
            <span className="about-tg" >Programming Languages : </span> <span className="about-ts" > JavaScript & Java </span><br />
            <span  className="about-tg" >Specialization : </span> <span className="about-ts" > Web and mobile software dev </span> 
        </div>
 
        {/* <p>I am a, mordern, self taught web and mobile application software developer, from &#127475;&#127468; Nigeria, whose 
            priorities in software development include scalability, high performance and security.
        </p> */}
     </div>
     <div className="arrow">  <p><i><BsArrowRight className="arrow-down"/></i> </p></div>
     </>

    )
}