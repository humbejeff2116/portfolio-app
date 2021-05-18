import React,{useEffect} from 'react';
import ContactComp from '../../components/contact/Contact';
import Template from '../../components/template/Template';
import ApplicationData from '../../Data/data';
import {Helmet} from "react-helmet";
import './ContactPage.css';


export default function ContactPage( ) {
    const contactItems = ApplicationData.getContactItems();

    useEffect(()=>{
        window.scrollTo(0,0)       
     },[]);
     
    return (
        <Template>
             <Helmet>   
             <meta charset="utf-8" />
                <title>Contact Humbe Jeffrey</title> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0" ></meta>
                <meta name="description" content="Get in touch, contact or message Humbe Jeffrey"/> 
                {/* google search engine tags */}
                <meta itemprop="name" content="Contact Humbe Jeffrey"/>
                <meta itemprop="description" content="Get in touch, contact or message Humbe Jeffrey"/>
                {/* <meta itemprop="image" content="%PUBLIC_URL%/favicon.ico"/> */}  
            </Helmet>
            <ContactComp contactItems = {contactItems} />
        </Template>
    )

}