import React,{useEffect} from 'react';
import Template from '../../components/template/Template';
import {Helmet} from "react-helmet";
import IndexComp from '../../components/index/Index';



export default function IndexPage(props){

    useEffect(()=>{
        window.scrollTo(0,0)       
     },[]);
     
    return(
        <Template>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Humbe Jeffreys' portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <IndexComp />        
        </Template>

    )

}