import React,{useEffect} from 'react';
import Template from '../../components/template/Template';
import ProjectComp from '../../components/projects/Projects';
import {Helmet} from "react-helmet";



export default function ProjectsPage(props){
    
    useEffect(()=>{
        window.scrollTo(0,0)       
     },[]);

    return(
        
        <Template>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Projects</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            < ProjectComp />
        </Template>
        
    )

}