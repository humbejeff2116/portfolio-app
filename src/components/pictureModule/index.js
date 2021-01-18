import React from 'react';
import LeftPane from './Leftpane';
import RightPane from './Rightpane';
import PictureComp from './Picturemodule';
import './picturemodel.css'





export default function PictureModule(props){
    return(

        <PictureComp leftPane = {<LeftPane/>} rightPane = {<RightPane />} />

    )
}