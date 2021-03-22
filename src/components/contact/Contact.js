import React from 'react';
import  PictureComp from '../pictureModule/Picturemodule';
import {PagesTemplate} from '../template/Template';
import{ Modal } from '../modalBox/Modal';
import { motion } from "framer-motion"; 
import framerMotionSettings from '../FramerMotion/FramerSettings';
import emailjs from 'emailjs-com';
import './contact.css';



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
        top={ <PictureComp leftPane={ <ContactHeader  contactItems={props.contactItems} /> } /> }
       
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
                
                    <ContactForm  />
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
                    <span className="contact-item"> { props.contactItem } </span>  
                </p> 
           
            </div>
            
    )
}
class ContactForm extends React.Component { 
    constructor(props){
        super(props);
        this.state ={
            name : '',
            email : '',
            subject : '',
            message : '',
            sentMessage :false,
            sendingMessage:false,
            mssgErr:false, 
        }
    }
  sendEmail= (e) => {
      this.setState({
          sendingMessage:true
      })
    const userId = process.env.REACT_APP_USER_ID;
    const  templateId = process.env.REACT_APP_TEMPLATE_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
   
    
    console.log(templateId )
        e.preventDefault()
        emailjs.sendForm(serviceId, templateId, e.target, userId)
        .then(result => {

     
        this.setState({
            sentMessage :true,
            sendingMessage:false 
        })
       
        },
        error => {
       
        this.setState({
            sentMessage :false,
            sendingMessage:false,
            mssgErr:true, 
        })
        })
        .catch( err=>{
            console.error(err)
              this.setState({
            sentMessage :false,
            sendingMessage:false,
            mssgErr:true,  
        })

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

    
      hideModal = ( ) => {
        this.setState({ 
            sentMessage : false ,
            mssgErr :false,
        });
      };

    
    render(){
        return(
            <>
            {
                (this.state.mssgErr) && (
                    <Modal show = {this.state.mssgErr } handleClose={this.hideModal}>
                    <div className="modal-header">
                        <span className="close" onClick={this.hideModal}>&times;</span>
                    </div>
    
                    <div className="modal-content">
                        <p> An error occured while sending message. </p>
                        <p> Please wait and try again.</p>
                    </div>              
                </Modal> 


                )
            }
            {
                (this.state.sentMessage) && (
                    <Modal show = {this.state.sentMessage} handleClose={this.hideModal}>
                        <div className="modal-header">
                            <span className="close" onClick={this.hideModal}>&times;</span>
                        </div>
        
                        <div className="modal-content">
                            <p>Your message have been sent successfully. </p>
                            <p> I'll get back to you as soon as possible.</p>
                        </div>              
                    </Modal> 
                )
            }

          

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
    
                    <div className="contact-form-bttn">
                        <button type="submit" className="btn btn-success">
                        {this.state.sendingMessage ? 'sending...' : 'Send'}
                        </button>
                    </div>
    
                </form>
            </>
        )

    }
   
}