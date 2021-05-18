import React,{useEffect} from 'react';
import Template from '../../components/template/Template';
import  PictureComp from '../../components/pictureModule/Picturemodule';
import {PagesTemplate} from '../../components/template/Template';
import { motion } from "framer-motion";
import framerMotionSettings from '../../components/FramerMotion/FramerSettings';
import {Helmet} from "react-helmet";
import './404.css';




export default function NotFoundPage( ) {
    useEffect(()=> {
        window.scrollTo(0,0)       
     },[]);
    return (
        <Template>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Not found</title>
                <meta name="description" content="Nnot found page" />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           <PagesTemplate  top={ <PictureComp leftPane={ <NotFoundComp  /> } /> } />
        </Template>
    )
}

function NotFoundComp( ) {
    return (
        <motion.div
        initial="initial"  
        animate="in" exit="out"  
        variants={framerMotionSettings.pageVariants} 
        transition={framerMotionSettings.pageTransitions} 
         className="not-found-intro"
         >
            <div>
            <h2>
                 Seems resource not found at that address, but nothing to worry about
            </h2>
            </div>
            <p>
               A good reason could be that The link you entered or followed is either broken, removed or does not exist
            </p>             
        </motion.div>
    )
}