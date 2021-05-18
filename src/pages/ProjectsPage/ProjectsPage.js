import React,{useEffect} from 'react';
import Template from '../../components/template/Template';
import ProjectComp from '../../components/projects/Projects';
import {Helmet} from "react-helmet";



export default function ProjectsPage( ) {
    
    useEffect(()=>{
        window.scrollTo(0,0)       
     },[]);

    return(
        <Template>
            <Helmet>
            <meta charset="utf-8" />
                <title> Humbe Jeffreys' projects</title> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0" ></meta>
                <meta name="description" content="Projects developed by Humbe Jeffrey"/> 
                {/* google search engine tags */}
                <meta itemprop="name" content="Humbe Jeffreys projects"/>
                 <meta itemprop="description" content="Projects developed by Humbe Jeffrey"/>
                 {/* <meta itemprop="image" content="%PUBLIC_URL%/favicon.ico"/> */}   
            </Helmet>
            < ProjectComp />
        </Template>  
    )
}