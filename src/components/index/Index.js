import React from 'react';
import SkillsModule from '../skillsModule/index'
import RightPane from '../pictureModule/Rightpane';
import IndexLeftPane from './IndexLeftpane';
import  PictureComp from '../pictureModule/Picturemodule'; 
import './indexMod.css';



export default function IndexComp(props) {
   
    return(
        <>
        <PictureComp leftPane = {<IndexLeftPane/>} rightPane = {<RightPane />} />
        <  SkillsModule />
        </> 
             
    )

}