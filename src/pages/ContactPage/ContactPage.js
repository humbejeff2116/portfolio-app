import React,{useEffect} from 'react';
import ContactComp from '../../components/contact/Contact';
import Template from '../../components/template/Template';

const contactItems =[
    {contactType:"Telephone 1", contactIcon:'', contactItem:"08134308049"},
    {contactType:"Telephone 2",contactIcon:'', contactItem:"08134308049"},
    {contactType:"Email",contactIcon:'', contactItem:"08134308049"}
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