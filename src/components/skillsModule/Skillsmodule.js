import React from 'react';
import './Skillsmodule.css';




export function SkillsTemplate(props) {
    return (
        <div className="skills-temp-contr">
            <div className="skills-temp-left">
                {props.leftPane}
            </div>
            <div className="skills-temp-right">
                {props.rightPane}
            </div>
        </div>  
    )
}

export function SkillsComp(props) {
    return(
        <>
        {
            props.skills.map((skill, i) =>
                <SkillList key={i} {...skill}/>
            )
        }
        </>
    )
}

 function SkillList(props) {
    return (
        <div  className="skills-mod">
            <div className="skills-mod-ttle">
                <h3>{props.title}</h3>
            </div>
            <div className="skills-mod-ls">
            {
                props.list.map((item, i) =>
                    <Item key={i} {...item}/>
                )
            }
            </div>
        </div>
    )
}

 function Item(props) {
    return(
        <div className="skills-mod-ittm"> 
            <p>
                <i>{props.icon }</i>
                <span className={props.spanClass}> {props.item }</span>
            </p>
        </div>
    )
}