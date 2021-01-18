import React from 'react';
import './Skillsmodule.css';
import {SkillsComp , SkillsTemplate} from './Skillsmodule'; 
import LeftPaneComp from './Leftpane'
import RightPane from './Rightpane';

// skills icons
import {SiSpring,SiNodeDotJs, SiApachemaven, SiWebpack, SiBabel} from "react-icons/si";
import { DiJavascript1, DiNpm } from "react-icons/di";
import { FaJava, FaGitSquare, FaYarn, FaHtml5, FaCss3, FaReact} from 'react-icons/fa';


let skills = [
    {
        title:"Programming Langauage",
        list:[
            {item:"JavaScript",icon:<DiJavascript1 className="js"/>,spanClass:"js-spn"},
            {item:"Java",icon:< FaJava className="java"/>,spanClass:"java-spn"}
        ]
    },
    {
        title:"Frontend Technologies",
        list:[
            {item:"HTML",icon:<FaHtml5 className="html"/>,spanClass:"html-spn"},
            {item:"CSS",icon:<FaCss3 className="css"/>,spanClass:"css-spn"},
            {item:"React.js",icon:<FaReact className="react"/>,spanClass:"react-spn"},
            {item:"React Native",icon:<FaReact className="react"/>,spanClass:"react-spn"}
        ]
    },
    {
        title:"Backend Technologies",
        list:[
            {item:"Node.js",icon:< SiNodeDotJs className="node"/>,spanClass:"node-spn"},
            {item:"Spring Boot",icon:<SiSpring className="spring"/>,spanClass:"spring-spn"}
        ]
    },
    {
        title:"Other Tools",
        list:[
            {item:"Git",icon:< FaGitSquare className="git"/>,spanClass:"git-spn"},
            {item:"WebPack",icon:<SiWebpack className="webpack"/>,spanClass:"webpack-spn"}
        ]
    }
]

function LeftPane(props){
    return(
        <LeftPaneComp >
             <SkillsComp skills={ skills } />
        </LeftPaneComp>
    )
}

export default function SkillsModule(){
    return(
       <SkillsTemplate leftPane = {<LeftPane />} rightPane = { <RightPane /> } />
    )
}