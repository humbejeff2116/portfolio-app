import React,{useEffect} from 'react';
import Template from '../../components/template/Template';
import  PictureComp from '../../components/pictureModule/Picturemodule';
import {PagesTemplate} from '../../components/template/Template'
import RightPane from '../../components/pictureModule/Rightpane';
import './404.css';




export default function NotFoundPage(props){
    useEffect(()=>{
        window.scrollTo(0,0)       
     },[]);
    return(
        
        <Template>
           
           <PagesTemplate 
                top={ 
                <PictureComp 
                leftPane={ <NotFoundComp  /> } 
                rightPane={ <RightPane/> } /> }
        />
        </Template>
    )

}


function NotFoundComp(props){
    return(
        <div className="not-found-intro">
            <div>
            <h2>
           oopss!! seems resource not found at that address
           
            </h2>

            </div>
           
            <p>
                The link you entered is either broken, removed or does not exist
            </p>
            
        </div>
    )
}