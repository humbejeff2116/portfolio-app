import React from 'react';
import  PictureComp from '../pictureModule/Picturemodule';
import { BsArrowRight} from "react-icons/bs";
import {PagesTemplate} from '../template/Template'
import RightPane from '../pictureModule/Rightpane';
import './About.css';
import ApplicationData from '../../Data/data'




export default function AboutComp(props) {
    const aboutInfoData = ApplicationData.getAboutData().aboutInfo;
    const aboutBioData = ApplicationData.getAboutData().aboutBio;

    return(
    
        <PagesTemplate 
        top={ <PictureComp leftPane={ <AboutHeader aboutInfo={aboutBioData} /> } rightPane={ <RightPane/> } /> }
        bottomLeftPane={<AboutBodyLeft aboutInfoData={aboutInfoData} />}
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
        props.aboutInfoData.map((data,i)=>
        <AboutBodyCard key={i} {...data}/>
        )

       
    )

}


function AboutBodyCard(props){
    return(
        <div className="about-info">

            <h2>{props.heading}</h2>
           {
           props.body.map((para,i)=>
           <AboutPara key={i} {...para}/>

           )
           }

        </div>       

    )
}
function AboutPara(props){
    return(
        <p>
            {props.para}
        </p>
    )
}

function AboutHeader(props){
    const [imageLoaded, setImageLoaded] = React.useState(false);
   
    return(
        <>
        {
            props.aboutInfo.map((data,i)=>
            <AboutHeaderCard key={i} {...data} imageLoaded={imageLoaded} setImageLoaded={setImageLoaded} />
            )
        }
     <div className="arrow">  <p><i><BsArrowRight className="arrow-down"/></i> </p></div>
     </>

    )
}

function AboutHeaderCard(props){
    return(
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
             
             props.aboutBio.map((bio,i)=>
             <AboutBioCard key={i} {...bio} imageLoaded={props.imageLoaded} />
             )
         }
          </div>
    
        </div>
        
    )
}

function AboutBioCard(props){
    return(
        <>
        <span className="about-tg" >{props.item} : </span> <span className="about-ts" >{props.content}</span><br />
        </>
    )
}