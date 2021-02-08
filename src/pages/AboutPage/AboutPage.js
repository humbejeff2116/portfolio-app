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
                <meta charSet="utf-8" />
                <title>About me</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <AboutComp />
        </Template>
    )

}