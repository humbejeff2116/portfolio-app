import React from 'react';
import  PictureComp from '../pictureModule/Picturemodule';
import {PagesTemplate} from '../template/Template';
// import RightPane from '../pictureModule/Rightpane';
// import ApplicationData from '../../Data/data';

import './contact.css';
import { motion } from "framer-motion"; 
import framerMotionSettings from '../FramerMotion/FramerSettings';
import emailjs from 'emailjs-com';

import emailjsApiKeys from '../../config/config';


export default function ContactComp(props) {
 
    return(
        <motion.div     
        initial="initial" 
        animate="in" 
        exit="out"  
        variants={framerMotionSettings.pageVariants} 
         transition={framerMotionSettings.pageTransitions} 
         className="anim-wrapper"
        >
    
        <PagesTemplate 
        top={ <PictureComp leftPane={ <ContactHeader contactItems={props.contactItems} /> } /> }
       
        />
         </motion.div> 
       
    )

}


function ContactHeader(props){

     
    return(
        <>
        <div className="contact-container" >
            <div className="contact-heading" >
                <h1>Contact Me</h1>
                <p>
                    I am always intrested in all kinds of positive projects.
                    Feel free to call or email me. 
                </p>
            </div>

                <div className="contact-panel">
            
                <div className="contact-intro" >
                    <div className="contact-ls" >
                    {
                        props.contactItems.map((contact,i)=>
                        <ContactCard {...contact} key={i} />
                        )
                    }
            
                    </div>
                    
                </div>
                {/* contact form starts here */}
                <div className="contact-form" >
                
                    <ContactForm />
                </div>
        
            </div>
        </div>
        </>
    )
}

function ContactCard(props){
    return(
           
             <div className={`contact-bio `}>
                 
                <p className="about-tg">
                    <i> {props.contactIcon} </i>
                    <span>{ props.contactType +" :"}  </span>    
                    <span className="contact-item"> {props.contactItem } </span>  
                </p> 
           
            </div>
            
    )
}
class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name:'',
            email:'',
            subject:'',
            message:''

        }
    }
  sendEmail= (e) => {
        e.preventDefault()
        emailjs.sendForm(emailjsApiKeys.SERVICE_ID, emailjsApiKeys.TEMPLATE_ID, e.target, emailjsApiKeys.USER_ID)
        .then(result => {
        alert('Message Sent successfully, I\'ll get back to you shortly', result.text);
        },
        error => {
        alert( 'An error occured, Plese try again',error.text)
        })
        .catch( err=>{
            console.error(err)

        })
        }

    handleInputChange= (e) =>{
      
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    toggleBlur =(e)=>{

        if(e.target.value.length > 0 ) {
  
         return e.target.classList.add('not-empty');
       
        }
  
         return e.target.classList.remove('not-empty')
                  
      }

    
    render(){
        return(
            <>
                 <form onSubmit={this.sendEmail}  autoComplete="off" >
    
                    <div className="contact-form-group">
                        <label>
                        <input type="text" onBlur={ this.toggleBlur }  onInput ={this.capitalize}  name="name" onChange={this.handleInputChange} />
                        <span className="placeholder">Name</span>
                        </label>
                    </div>
    
                    <div className="contact-form-group">
                        <label>
                        <input type="text" onBlur={ this.toggleBlur } className="form-control" name="email" onChange={this.handleInputChange}  />
                        <span className="placeholder">Email</span>
                        </label>
                    </div>
    
                    <div className="contact-form-group">
                        <label>
                        <input type="text" onBlur={ this.toggleBlur } className="form-control" name="subject" onChange={this.handleInputChange}  />
                        <span className="placeholder"> Subject</span>
                        </label>
                    </div>
                    <div className="contact-form-group">
                        <label>
                        <textarea value={this.state.message}  name="message"  onBlur={ this.toggleBlur } onChange={this.handleInputChange} />
                        <span className="placeholder">Message</span>
                        </label>
                    </div>
    
                    <div className="conct-form-bttn">
                        <button type="submit" className="btn btn-success">Send</button>
                    </div>
    
                </form>
            </>
        )

    }
   
}