import React,{ useEffect } from 'react';
import Template from '../template/Template';
import {SkeletonLoader} from '../Loader/loader';
import './SuspLoader.css'



// app fallback suspense loader 
export default function FallbackLoader(props){
    useEffect(()=>{
        window.scrollTo(0,0)


    },[])
    return(
        <Template >
            <SkeletonLoader/>
        </Template>

    )

} 
