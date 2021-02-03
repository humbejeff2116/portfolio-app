










import React from 'react';
import Skeleton,{SkeletonTheme} from "react-loading-skeleton";
import Template, {PagesTemplate} from '../template/Template';
import PageLoader from '../Loader/loader'
import Clock from '../animClock/Animclock';
import PictureComp from '../pictureModule/Picturemodule';
import { SkillsTemplate} from '../skillsModule/Skillsmodule';
import  SkillsModule from '../skillsModule/index';
import Socialbar from '../socialbar/SocialBar';
import { FaTwitter,FaFacebookSquare,FaLinkedinIn,FaGithubSquare} from 'react-icons/fa';
const socialLinks = [
    {name:"Li",href:"linkedin.com/jeffrey123",icon:< FaLinkedinIn/>},
    {name:"Gi",href:"linkedin.com/jeffrey123",icon:< FaGithubSquare/>},
    {name:"Fa",href:"linkedin.com/jeffrey123",icon:< FaFacebookSquare />},
    {name:"Tw",href:"linkedin.com/jeffrey123",icon:< FaTwitter/>}
]


// index page skeleton begins here
export default function IndexSkeleton(props){
    return(
        <Template >
            <PictureComp leftPane={<IndexPictureLeftPane/>} rightPane={<IndexPictureRightPane/>} />
            <SkillsTemplate leftPane={<SkillsLeftPane/>} rightPane={<SkillsRightPane/>} />

        </Template>

    )

} 
function SkillsRightPane(props){
    return(
        <div className="skill-mod-right-pane">

        </div>
    )
}

function SkillsLeftPane(props){
    return(
    
        <>
        <div className="skills-mod-hd" >
            <div className="skills-mod-hd-title">
               <h2>SKILLS</h2> 
            </div>

        </div>


         <div className="skills-mod-panel" >

  <div  className="skills-mod">
  
    <div className="skills-mod-ls">
       
      <PageLoader/>

      

    </div>

</div>


<div  className="skills-mod">
    {/* <div  className="skills-mod-ttle">
    <h3><Skeleton height={30} /></h3>

    </div> */}
    <div className="skills-mod-ls">
    <PageLoader/>

    </div>

</div>


<div className="skills-mod">
   
    <div className="skills-mod-ls">
       
    <PageLoader/>

    </div>

</div>


<div className="skills-mod">
   
    <div className="skills-mod-ls">
    <PageLoader/>

    </div>

</div>

</div> 
    </>
    )
}

function IndexPictureLeftPane(){
    return(
        <>
        <SkeletonTheme color="#55759c" highlightColor="#8fb1da">
       
        <div className="pic-mod-intro">
            <h2>
                <Skeleton height={30} width={`95%`} count={2} />
            </h2>

           <p>
            <Skeleton height={10}  width={`95%`} count={4} />
           </p>            
            <Skeleton height={50} width={`80%`} />
             
        </div>
        <div className="arrow">  
            <i>
            <Skeleton height={15} width={5} />
            </i>
        </div>
        </SkeletonTheme>
        </>

    )
}
function IndexPictureRightPane(){
    return( <>
        <div className="pic-mod-right-top">
        <div className="pic-mod-clock">
        <section className="cloc">
        <PageLoader/>
        </section>
        </div>
            {/* <Clock /> */}
           
        </div>
        
        <div className="pic-mod-right-bottom">

           <Socialbar links={socialLinks}/>
          
        </div>

        </> 

    )
}

// about page skeleton start here

export function AboutSkeleton(props){
    return(
        <SkeletonTheme color="#55759c" highlightColor="#8fb1da">
        <Template>
            <PagesTemplate 
        top={ <PictureComp leftPane={ <AboutHeader/> } rightPane={ <IndexPictureRightPane/> } /> }
        bottomLeftPane={<AboutBodyLeft />}
        bottomRightPane={<AboutBodyRight/>} 
        />
        </Template>
        </SkeletonTheme>
    )
}

function AboutHeader( ){

    return(

        <>
     <div className="pic-mod-intro">
        <h1><Skeleton/></h1> 
        <p>
        <Skeleton height={10}  width={`95%`} count={4} />
        </p>
     </div>
     <div className="arrow"> 
        <i>
            <Skeleton height={15} width={5} />
        </i>
     </div>
     </>

    )
}
function AboutBodyLeft(props){

    return(

        <div className="about-info">

<PageLoader/>
        </div>

    )

}
function AboutBodyRight(props){
    return(
        <>
        </>
    )
}

// projects page skeleton start here
export function ProjectsSkeleton(){
    return(
        <SkeletonTheme color="#55759c" highlightColor="#8fb1da">
        <Template>
        <PagesTemplate 
        top={ <PictureComp leftPane={ <ProjectsHeader/> } rightPane={ <IndexPictureRightPane/> } /> }
        bottomLeftPane={< ProjectsBodyLeft />}
        bottomRightPane={<ProjectsBodyRight/>} 
        />

        </Template>
        </SkeletonTheme>
    )
}



function ProjectsHeader(props){

    return(
        <>
        <div className="pic-mod-intro">
        <h1> <Skeleton width={`95%`}/> </h1> 
        <p> <Skeleton height={10}  width={`95%`} count={4} /> </p>
            <div>
                <p> <Skeleton height={10}  width={`95%`}  /></p>
            </div>
     </div>
     <div className="arrow">  <i>  <Skeleton height={15} width={5} /></i></div>
     </>

    )
}
function ProjectsBodyLeft(){
    return(
        <div className="project-info">
            <PageLoader/>
           
         
        </div>
    )
}
function ProjectsBodyRight(props){
    return(
        <>
        </>
    )
}