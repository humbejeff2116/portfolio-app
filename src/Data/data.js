






import { 
    FaTwitter,FaFacebookSquare,FaLinkedinIn,FaGithubSquare,FaJava, 
    FaGitSquare, FaYarn, FaHtml5, FaCss3, FaReact,FaPhoneSquareAlt 
} from 'react-icons/fa';
// skills icons
import {SiSpring,SiNodeDotJs, SiApachemaven, SiWebpack, SiBabel} from "react-icons/si";
import { DiJavascript1, DiNpm } from "react-icons/di";
// side navigation links
import {BiHome,BiUser,BiFolder} from "react-icons/bi";
import {RiBookOpenLine,RiContactsBookLine,RiMailSendFill} from "react-icons/ri";
import jeffweb1 from '../images/jeffweb1.jpg';
import Humbes_portfolio from '../images/Humbe_Jeffreys_portfolio(1).png';
// import quick_buy from '../images/quick_buy.png'



const ApplicationData= function(){ };


// function to inject unicode to html using javascript
function setUnicode(unicode){
    let dummy;
         let decoded
         if(!unicode){
            return decoded ="";
                
         }
          dummy = document.createElement('textarea');
          dummy.innerHTML = unicode;
          decoded = dummy.value;
          return decoded;
 }
 const entity ='&#127475;&#127468;';
//  set unicode value
 const unicode =setUnicode(entity);

const data = {
    indexInfo : [
        {
           
            imageSrc : jeffweb1,
            heading : "Hi, I am Humbe Jeffrey, a software developer",
            body : `I am a, mordern, web and mobile application software developer, from ${unicode} 
                    Nigeria. Highly experienced in building scalable, high performing and secured applications` 
        }
    ],

    aboutData : {
        aboutBio : [
            {
               
                imageSrc:jeffweb1,
                aboutBio : [
                    { item:"Name", content :"Humbe Jeffrey" },
                    { item:"Nationality", content :` ${unicode} Nigeria ` },
                    { item:"Programming Languages", content:" JavaScript & Java" },
                    { item:"Specialization", content :" Web and mobile software dev  " }
                ]
            }
        ],
        aboutInfo : [
            {
                heading : "About Me",
                body : [
                    {
                        para : `Knowing fully well the community I find my self in and the global reputation that 
                                might come with it, when I started out on this journey ( software development ), my
                                biggest challenge wasn't about learning to write algorithms, program or build things,
                                it was accepting the challenges that comes with who I am, and where am from. On my 
                                journey here I have been a poet, an artist, and an Electrical/Electronics technologist, 
                                but only at some point did I realize they were all part of the proccess to making me 
                                the software developer that I am, and I'm glad I didnt cheat it.` 
                                
                                
                                
                                 
                                
                    },
                    {
                        para : `I could go on to tell you about my programming capabilities, how I taught myself how 
                                to write codes, and build things, or how much I love using JavaScript, Java and their 
                                related libraries and frameworks in building scalable, high performing and secured 
                                applications,but I think that story is bettter told with what I have accomplished, 
                                which for me is how much I have positively impacted the software development community, 
                                rather than the man whose life revolves around his computer system. I hardly see myself 
                                being a special developer in any way, as I believe anyone could do the same things I do, 
                                if only they sacrifice part of their time, stay focused, work hard, and continiously 
                                learn like I do.`
                    }
                ]
            }
    
        ]
    },

    sideNavLinks : [
        { name:"Home", href:"/", icon:<BiHome className="nav-icon" /> },
        { name:"About", href:"/about-me", icon:<BiUser className="nav-icon"/> },
        { name:"Projects", href:"/projects", icon:<BiFolder className="nav-icon"/> },
        { name:"Contact", href:"/contact", icon:<RiContactsBookLine className="nav-icon"/> },
        { name:"Blog", href:"/blog", icon:<RiBookOpenLine className="nav-icon"/> }
      ],

    footerSocialLinks : [
    { name:"Li", href:"linkedin.com/jeffrey123", icon:< FaLinkedinIn className="footer-nav-icon" /> },
    { name:"Gi", href:"linkedin.com/jeffrey123", icon:< FaGithubSquare className="footer-nav-icon"/> },
    { name:"Fa", href:"linkedin.com/jeffrey123", icon:< FaFacebookSquare className="footer-nav-icon" /> },
    { name:"Tw", href:"linkedin.com/jeffrey123", icon:< FaTwitter className="footer-nav-icon" /> }
    ],

    mainsocialLinks : [
        { name:"Li",title:"Linkedin", href:"linkedin.com/jeffrey123", icon:< FaLinkedinIn/> },
        { name:"Gi",title:"Github", href:"linkedin.com/jeffrey123", icon:< FaGithubSquare/> },
        { name:"Fa",title:"Facebook", href:"linkedin.com/jeffrey123", icon:< FaFacebookSquare /> },
        { name:"Tw",title:"Twitter", href:"linkedin.com/jeffrey123", icon:< FaTwitter/> }
    ],

    skills : [
        {
            title:"Programming Langauage",
            list : [
                { item:"JavaScript", icon:<DiJavascript1 className="js"/>, spanClass:"js-spn" },
                { item:"Java", icon:< FaJava className="java"/>, spanClass:"java-spn" }
            ]
        },
        {
            title:"Frontend Technologies",
            list : [
                { item:"HTML", icon:<FaHtml5 className="html"/> ,spanClass:"html-spn"},
                { item:"CSS", icon:<FaCss3 className="css"/>, spanClass:"css-spn" },
                { item:"React.js", icon:<FaReact className="react"/>, spanClass:"react-spn" },
                {  item:"React Native", icon:<FaReact className="react"/>, spanClass:"react-spn" }
            ]
        },
        {
            title:"Backend Technologies",
            list : [
                { item:"Node.js", icon:< SiNodeDotJs className="node"/>, spanClass:"node-spn" },
                { item:"Spring Boot", icon:<SiSpring className="spring"/>, spanClass:"spring-spn" }
            ]
        },
        {
            title:"Other Tools",
            list : [
                { item:"Git", icon:< FaGitSquare className="git"/>, spanClass:"git-spn" },
                { item:"WebPack", icon:<SiWebpack className="webpack"/>, spanClass:"webpack-spn" },
                { item:"Yarn", icon:< FaYarn className="yarn"/>, spanClass:"yarn-spn" },
                { item:"npm", icon:< DiNpm className="npm"/>, spanClass:"npm-spn" },
                { item:"Babel", icon:< SiBabel className="babel"/>, spanClass:"babel-spn" },
                { item:"maven", icon:<SiApachemaven className="maven"/>, spanClass:"maven-spn" },
            ]
        }
    ],

    contactItems : [
        { contactType:"Telephone 1", contactIcon:<FaPhoneSquareAlt className="contact-icon" />, contactItem:"+2348134308049" },
        { contactType:"Telephone 2", contactIcon:<FaPhoneSquareAlt className="contact-icon" />, contactItem:"+2348077026676" },
        { contactType:"Email", contactIcon:<RiMailSendFill className="contact-icon" />, contactItem:"humbejeff2116@gmail.com" }
    ],
    projectsData:[
        {
            imageSrc:Humbes_portfolio,
            link:"/",          
            projDetails : [
                { item:"Application Name", content :"Quick buy" },
                { item:"Application Stack", content :`MongoDb, Express, React.js, Node.js` },
                { item:"Description", content:" A web based e-commerce clothing store application with secured user payment gateways " },
                { item:"Github-Repo", gitHubRepo:" https://github.com/humbejeff2116/quickbuy-e-store"},
               
            ]
    
        },
        {
            imageSrc:jeffweb1,
            link:"/",
            projDetails : [
                { item:"Application Name", content :"Hospital Mangement System " },
                { item:"Application Stack", content :`MongoDb, Express, Node.js, ` },
                { item:"Description", content:" A Hospital Management System backend Application Programming Interface" },
                { item:"Github-Repo", gitHubRepo:" https://github.com/humbejeff2116/portfolio-app"},
               
            ]
    
        },
        {
            imageSrc:Humbes_portfolio,
            link:"/",
            projDetails : [
                { item:"Application Name", content :"Jeff's Portfolio" },
                { item:"Application Stack", content :` React.js` },
                { item:"Description", content:" My personal portfolio web application" },
                { item:"Github-Repo", gitHubRepo:" https://github.com/humbejeff2116/portfolio-app"},
               
            ]
    
        }
    ]
}

ApplicationData.prototype.data = data;

ApplicationData.prototype.getFooterSocialLinks = function(){
    return this.data.footerSocialLinks;
}
ApplicationData.prototype.getMainSocialLinks = function(){
    return this.data.mainsocialLinks;
}
ApplicationData.prototype.getSkills = function(){
    return this.data.skills;
}
ApplicationData.prototype.getSideNavLinks = function(){
    return this.data.sideNavLinks;
}
ApplicationData.prototype.getContactItems= function(){
    return this.data.contactItems;
}
ApplicationData.prototype.getIndexInfo= function(){
    return this.data.indexInfo;
}
ApplicationData.prototype.getAboutData= function(){
    return this.data.aboutData;
}
ApplicationData.prototype.getProjectsData= function(){
    return this.data.projectsData;
}

export default new ApplicationData();