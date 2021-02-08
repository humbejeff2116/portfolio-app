import React,{useEffect} from 'react';
import Template from '../../components/template/Template';
import PictureModule from '../../components/pictureModule/index';
import SkillsModule from '../../components/skillsModule/index';
import {Helmet} from "react-helmet";



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
            <PictureModule />
           
            <SkillsModule />
        </Template>

    )

}