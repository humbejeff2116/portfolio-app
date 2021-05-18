import React from 'react';
import  PictureComp from '../pictureModule/Picturemodule';
import {PagesTemplate} from '../template/Template'
import { motion } from "framer-motion"; 
import ApplicationData from '../../Data/data';
import framerMotionSettings from '../FramerMotion/FramerSettings';
import './About.css';


export default function AboutComp(props) {
    const aboutBioData = ApplicationData.getAboutData().aboutBio;

    return (
        <motion.div  
        initial="initial"  
        animate="in" 
        exit="out"  
        variants={ framerMotionSettings.pageVariants } 
        transition={ framerMotionSettings.pageTransitions } 
        className="anim-wrapper"
        >
            <PagesTemplate top={ <PictureComp leftPane={ <AboutHeader aboutInfo={aboutBioData} /> } /> } />
        </motion.div>      
    )
}


function AboutBodyRight(props) {

    return (
        props.aboutInfoData.map((data, i) =>
        <AboutBodyCard key={i} {...data} />
        )    
    )
}

function AboutBodyCard(props) {
    return (
        <div className="about-info">
        {
            props.body.map((para, i) =>
                <AboutPara key={i} {...para}/>
            )
        }
        </div>       
    )
}

function AboutPara(props) {
    return (
        <p>
            {props.para}
        </p>
    )
}

function AboutHeader(props) {
    const [imageLoaded, setImageLoaded] = React.useState(false);
   
    return (
        <>
        {
            props.aboutInfo.map((data, i) =>
             <AboutHeaderCard key={i} {...data} imageLoaded={imageLoaded} setImageLoaded={setImageLoaded} />
            )
        }
     </>
    )
}

function AboutHeaderCard(props) {
    const aboutInfoData = ApplicationData.getAboutData().aboutInfo;
 
    return (
        <div className="about-container" >
             <div className="about-heading" >
                <h1>About Me</h1>       
            </div>
            <div className="about-panel" >
                 <div className="about-intro">
                    <div className="smooth-image-wrapper">
                        <img
                            src={props.imageSrc}
                            alt="about-me"
                            width="100%"
                            height="100%"
                            className={`smooth-image image-${props.imageLoaded ? 'visible' :  'hidden'}`}
                            onLoad={ ()=> props.setImageLoaded(true) }
                        />
                    </div>
                    <div className={`about-bio image-${props.imageLoaded ? 'visible' :  'hidden'}`}>
                    { 
                        props.aboutBio.map((bio, i)=>
                        <AboutBioCard key={i} {...bio} imageLoaded={props.imageLoaded} />
                        )
                    }
                    </div>
                </div>
                <>
                    <AboutBodyRight aboutInfoData={aboutInfoData} />
                </>
            </div>
        </div>   
    )
}

function AboutBioCard(props) {
    return(
        <>
        <span className="about-tg" >{props.item} : </span> <span className="about-ts" >{props.content}</span><br />
        </>
    )
}