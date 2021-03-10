import React,{useEffect} from 'react';
import Template from '../../components/template/Template';
import  AboutComp from '../../components/about/About';
import {Helmet} from "react-helmet";



export default function AboutPage(props){
    useEffect(()=>{
        window.scrollTo(0,0)       
     },[]);
    return(
        
        <Template>
             <Helmet>
                <meta charset="utf-8" />
                <title>About Humbe Jeffrey</title> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Information about Humbe Jeffrey"/> 
                {/* google search engine tags */}
                <meta itemprop="name" content="About Humbe Jeffrey "/>
                 <meta itemprop="description" content="Information about Humbe Jeffrey"/>
                 {/* <meta itemprop="image" content="%PUBLIC_URL%/favicon.ico"/> */}       
            </Helmet>
            <AboutComp />
        </Template>
    )

}