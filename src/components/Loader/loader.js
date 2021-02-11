import React from 'react';
import './loader.css'

export default function PageLoader(){
    return(
        <div className="loader-container" id="loader">
        <div className="loader"></div>
        </div>
    )

}
export function SkeletonLoader(){
    return(
        <div className="skel-loader-container" >
        <div className="skel-loader"></div>
        </div>

    )
}

