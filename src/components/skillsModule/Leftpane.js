import React from 'react';

export default  function LeftPaneComp(props) {
    return (
        <>
            <div className="skills-mod-hd" >
                <div className="skills-mod-hd-title">
                   <h2>SKILLS</h2> 
                </div>
            </div>
            <div className="skills-mod-panel" >
                {props.children}
            </div>
        </>  
    )
}