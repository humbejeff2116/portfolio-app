import React from 'react';
import './Skillsmodule.css';
import {SkillsComp , SkillsTemplate} from './Skillsmodule'; 
import LeftPaneComp from './Leftpane'
import SkillsRightPane from './Rightpane';
import ApplicationData from '../../Data/data';



function SkillsLeftPane(props){
    const skills = ApplicationData.getSkills();
    return(
        <LeftPaneComp >
             <SkillsComp skills={ skills } />
        </LeftPaneComp>
    )
}

export default function SkillsModule(){
    return(
       <SkillsTemplate leftPane = {<SkillsLeftPane />} rightPane = { <SkillsRightPane /> } />
    )
}