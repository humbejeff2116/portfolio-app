import React from 'react';
import Template from '../template/Template';
import {SkeletonLoader} from '../Loader/loader';
import './SuspLoader.css'



// app fallback suspense loader 
export default function FallbackLoader(props){
    return(
        <Template >
            <SkeletonLoader/>
        </Template>

    )

} 
