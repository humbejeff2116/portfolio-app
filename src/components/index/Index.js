import React from 'react';
import IndexLeftPane from './IndexLeftpane';
import  PictureComp from '../pictureModule/Picturemodule';
import {IndexPageTemplate} from '../template/Template'
import { motion } from "framer-motion"; 
import SkillsLeftPane from '../skillsModule/index';
import framerMotionSettings from '../FramerMotion/FramerSettings';
// import SplitText from '../FramerMotion/SplitText'
import './indexMod.css';

export default function IndexComp(props) {
   
    return (
         <motion.div           
         initial="initial"  
         animate="in" 
         exit="out"  
         variants={framerMotionSettings.pageVariants} 
         transition={framerMotionSettings.pageTransitions} 
         className="anim-wrapper" 
         >            
            <>
            <IndexPageTemplate top={ <PictureComp leftPane = {<IndexLeftPane/>}  /> } bottom={<  SkillsLeftPane /> } />
            </>
        </motion.div>        
    )
}