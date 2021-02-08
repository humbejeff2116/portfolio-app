import React,{useEffect} from 'react';
import ContactComp from '../../components/contact/Contact';
import Template from '../../components/template/Template';
import{FaPhoneSquareAlt} from "react-icons/fa";
import{RiMailSendFill} from "react-icons/ri";
import {Helmet} from "react-helmet";
import './ContactPage.css';

const contactItems =[
    {contactType:"Telephone 1", contactIcon:<FaPhoneSquareAlt className="contact-icon" />, contactItem:"+2348134308049"},
    {contactType:"Telephone 2",contactIcon:<FaPhoneSquareAlt className="contact-icon" />, contactItem:"+2348134308049"},
    {contactType:"Email",contactIcon:<RiMailSendFill className="contact-icon" />, contactItem:"humbejeff2116@gmail.com"}
]




export default function ContactPage(props){

    useEffect(()=>{
        window.scrollTo(0,0)       
     },[]);
     
    return(
        <Template>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Contact me</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <ContactComp contactItems = {contactItems} />
        </Template>

    )

}