import React from 'react';
import {SkillsComp , SkillsTemplate} from './Skillsmodule'; 
import LeftPaneComp from './Leftpane';
import SkillsRightPane from './Rightpane';
import ApplicationData from '../../Data/data';
import './Skillsmodule.css';



export default function SkillsLeftPane( ) {
    const skills = ApplicationData.getSkills();
    return (
        <LeftPaneComp >
             <SkillsComp skills={ skills } />
        </LeftPaneComp>
    )
}

export function SkillsModule( ) {
    return(
       <SkillsTemplate leftPane = {<SkillsLeftPane />} rightPane = { <SkillsRightPane /> } />
    )
}