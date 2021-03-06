import React from 'react';
import  PictureComp from '../pictureModule/Picturemodule';
import {PagesTemplate} from '../template/Template';
import ApplicationData from '../../Data/data';
import { motion } from "framer-motion"; 
import framerMotionSettings from '../FramerMotion/FramerSettings';
import {Link} from 'react-router-dom';
import {FaRegEye} from "react-icons/fa"
import './Projects.css';




export default function ProjectComp(props) {
    const projectsData = ApplicationData.getProjectsData();
 
    return(
        < motion.div  
        initial="initial" 
        animate="in" 
        exit="out"  
        variants={ framerMotionSettings.pageVariants} 
        transition={ framerMotionSettings.pageTransitions} 
        className="anim-wrapper"
        >
            <PagesTemplate 
            top={ <PictureComp leftPane={ <ProjectsHeader projectsData={ projectsData } /> }  /> }
        
            />
        </motion.div> 
    )
}

function ProjectsHeader(props){
   
    return(
       <>
       <div className="proj-container" >

       <div className="proj-heading" >
                <h1>My Projects</h1>     
        </div>

            <div className="proj-panel" >     
                {
                    props.projectsData.map((data,i)=>
                    <Project key={i} {...data} />
                    
                    )
                }   
            </div>

       </div>
       
     </>
    
    )
}

function Project(props){

    return(

        <div className="project-mod-intro">
            <div className="project-image">
            <img
            src={props.imageSrc}
            alt="jeffs-project"
            width="100%"
            height="100%"
            className={`smooth-image`}          
        />

            </div>
      

        <div className="projects-info">
            { 

                props.projDetails.map((info,i)=>
                <ProjectBioCard key={i} {...info} />
                )
                
            }      
        </div>
        <div className="proj-bttn">
            <Link to={props.link} className="contact-link" >
                <button className="pic-mod-intro-hire">
                    <i> <FaRegEye className="contact-bttn-icon"/></i>
                  View Live Demo
                </button>
               </Link>

        </div>

       
        </div>
             
    )
}
function ProjectBioCard(props){
    return(
        <>
        {
            (props.gitHubRepo) ? <><span> <b>{props.item} :</b> </span>  <span><a rel="noreferrer" target="_blank" href={props.gitHubRepo}>{props.gitHubRepo}</a></span> </> : 
            <><span className="about-tg" ><b>{props.item} : </b> </span> <span className="about-ts" >{props.content}</span><br /></>

        }
        </>
    )
}