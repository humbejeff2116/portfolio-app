import React,{useEffect} from 'react';
import Template from '../../components/template/Template';
import  AboutComp from '../../components/about/About';



export default function AboutPage(props){
    useEffect(()=>{
        window.scrollTo(0,0)       
     },[]);
    return(
        
        <Template>
            <AboutComp />
        </Template>
    )

}