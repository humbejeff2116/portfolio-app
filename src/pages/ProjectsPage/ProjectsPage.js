import React,{useEffect} from 'react';
import Template from '../../components/template/Template';
import ProjectComp from '../../components/projects/Projects';



export default function ProjectsPage(props){
    
    useEffect(()=>{
        window.scrollTo(0,0)       
     },[]);

    return(
        
        <Template>
            < ProjectComp />
        </Template>
        
    )

}