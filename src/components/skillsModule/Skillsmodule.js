








import React from 'react';
import './Skillsmodule.css';




export function SkillsTemplate(props){
    return(
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




export function SkillsComp(props){
    return(
        < >
            {
                props.skills.map((skill,i)=>
                    <SkillList key={i} {...skill}/>
                    )
            }

        </>

    )
}

 function SkillList(props){
    return(
        <div  className="skills-mod">
    <div className="skills-mod-ttle">
       <h3>{props.title}</h3>

    </div>
  
    <div className="skills-mod-ls">
      {
      props.list.map((item,i)=>
      <Item key={i} {...item}/>
      )
      }
    </div>

</div>

    )
}

 function Item(props){
    return(
        <div className="skills-mod-ittm">
          
       <p><i>{props.icon }</i><span className={props.spanClass}> {props.item }</span></p>
    </div>

    )
}










/* <div className="skills-mod-panel" >

<div  className="skills-mod-prog-lang">
    <div className="skills-mod-prog-lang-ttle">
        programming langauge

    </div>
   
    <div className="skills-mod-prog-lang-ls">
        <div className="skills-mod-prog-lang-ittm">
            javascript

        </div>
        <div className="skills-mod-prog-lang-ittm" >
            java

        </div>

    </div>

</div>


<div  className="skills-mod-front-tech">
    <div  className="skills-mod-front-tech-ttle">
        front end tech

    </div>
    <div className="skills-mod-front-tech-ls">
        <div className="skills-mod-front-tech-ittm">
            html

        </div>
        <div className="skills-mod-front-tech-ittm" >
            css

        </div>
        <div className="skills-mod-front-tech-ittm">
            react.js

        </div>
        <div className="skills-mod-front-tech-ittm" >
            react native

        </div>

    </div>

</div>


<div className="skills-mod-back-tech">
    <div className="skills-mod-back-tech-ttle">
        backend tech

    </div>
    <div className="skills-mod-back-tech-ls">
        <div className="skills-mod-back-tech-ittm">
            Node.js

        </div>
        <div className="skills-mod-back-tech-ittm">
            spring boot

        </div>

    </div>

</div>


<div className="skills-mod-vers-cont">
    <div className="skills-mod-vers-cont-ttle">
        version control

    </div>
    <div className="skills-mod-vers-cont-ls">
        <div className="skills-mod-vers-cont-ittm">
            git

        </div>

    </div>

</div>

</div> */