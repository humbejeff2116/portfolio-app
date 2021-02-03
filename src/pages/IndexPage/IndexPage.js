








import React,{useEffect} from 'react';
import Template from '../../components/template/Template';
import PictureModule from '../../components/pictureModule/index';
import SkillsModule from '../../components/skillsModule/index';
import PageLoader from '../../components/Loader/loader'





export default function IndexPage(props){

    useEffect(()=>{
        window.scrollTo(0,0)       
     },[]);
     
    return(
        <Template>
            <PictureModule />
            {/* <PageLoader/> */}
            <SkillsModule />
        </Template>

    )

}