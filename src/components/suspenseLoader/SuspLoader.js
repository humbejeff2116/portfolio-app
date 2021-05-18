import React,{ useEffect } from 'react';
import Template from '../template/Template';
import {SkeletonLoader} from '../Loader/loader';
import './SuspLoader.css';



export default function FallbackLoader( ) {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <Template >
            <SkeletonLoader/>
        </Template>
    )
} 
