import React,{useEffect} from 'react';
import ContactComp from '../../components/contact/Contact';
import Template from '../../components/template/Template';
import ApplicationData from '../../Data/data';
import {Helmet} from "react-helmet";
import './ContactPage.css';


export default function ContactPage(props){
    const contactItems = ApplicationData.getContactItems();

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