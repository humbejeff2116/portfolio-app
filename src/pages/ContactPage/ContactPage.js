import React,{useEffect} from 'react';
import ContactComp from '../../components/contact/Contact';
import Template from '../../components/template/Template';
import {BiPhone} from "react-icons/bi";
import {FiMail} from "react-icons/fi";
import{FaPhoneSquareAlt} from "react-icons/fa";
import{RiMailSendFill} from "react-icons/ri";
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
            <ContactComp contactItems = {contactItems} />
        </Template>

    )

}