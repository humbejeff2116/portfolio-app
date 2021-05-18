import React from 'react';
import AnimClock from '../animClock/Animclock';


export default function RightPane(){
      
    return(
        <RightPaneComp
        topComponent={ <AnimClock/> }
        />
    )
}

function RightPaneComp({ topComponent, bottomComponent }) {
    if (!bottomComponent) {
        return (
            <>
            <div className="pic-mod-right-top">
               {topComponent}
            </div>
            <div className="pic-mod-right-bottom">
            </div>
            </> 
        )
    }
    return (
        <>
        <div className="pic-mod-right-top">
           {topComponent}
        </div>
        <div className="pic-mod-right-bottom">
            {bottomComponent}
        </div>
        </> 
    )
}