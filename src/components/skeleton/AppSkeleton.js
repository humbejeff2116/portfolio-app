import React from 'react';
import Skeleton,{SkeletonTheme} from "react-loading-skeleton";
import Template, {PagesTemplate} from '../template/Template';
import PageLoader from '../Loader/loader'
import PictureComp from '../pictureModule/Picturemodule';
import { SkillsTemplate} from '../skillsModule/Skillsmodule';
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
            <div className="picture">
            <Skeleton height={250} width={`95%`} />

            </div>
            <h1>
                <Skeleton height={30} width={`95%`} />

            </h1>

           <p>
            <Skeleton height={10}  width={`95%`} count={4} />
           </p>            
            <Skeleton height={50} width={`80%`} />
             
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
        
        <div className="about-intro">

         <div  className="picture">
         <Skeleton height={250} width={`100%`}/>
         </div>
        <div className="about-bio">
            <span className="about-tg" > <Skeleton height={10} width={`90%`}/> </span><br />
            <span  className="about-tg" > <Skeleton  height={10} width={`90%`}/> </span><br />
            <span className="about-tg" > <Skeleton  height={10} width={`90%`}/> </span><br />
            <span  className="about-tg" > <Skeleton  height={10} width={`90%`}/> </span> 
        </div>
 
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
        
        />

        </Template>
        </SkeletonTheme>
    )
}



function ProjectsHeader(props){

    return(
       
        <div className="pic-mod-intro">
        <h1> <Skeleton width={`95%`}/> </h1> 
        <p> <Skeleton height={10}  width={`95%`} count={4} /> </p>
            <div>
                <p> <Skeleton height={10}  width={`95%`}  /></p>
            </div>
     </div>

    

    )
}


// contact skeleton start here

export function ContactSkeleton(props){
    return(
        <SkeletonTheme color="#55759c" highlightColor="#8fb1da">
        <Template>
        <PagesTemplate 
        top={ <PictureComp leftPane={ <ContactHeader/> } rightPane={ <IndexPictureRightPane/> } /> }
        />

        </Template>
        </SkeletonTheme>

    )
}

function ContactHeader(){
    return(
        <div className="contact-skel-intro">
            <PageLoader/> 
        </div>
    )

}