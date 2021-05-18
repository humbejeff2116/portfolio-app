import React,{useEffect} from 'react';
import Template from '../../components/template/Template';
import {Helmet} from "react-helmet";
import IndexComp from '../../components/index/Index';


export default function IndexPage( ) {

    useEffect(()=>{
        window.scrollTo(0,0)       
     },[]);
     
    return (
        <Template>
             <Helmet>
                {/* <!-- HTML Meta Tags --> */}
                <title>Humbe Jeffrey</title>
                <meta charset="utf-8" />
                <meta name="description" content="Humbe Jeffreys' portfolio web application" />
                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemprop="name" content="Humbe Jeffrey" />
                <meta itemprop="description" content="Humbe Jeffreys' portfolio web application" />
                {/* <meta itemprop="image" content="https://humbe-jeffrey.netlify.app/static/favicon.ico" /> */}
                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://humbe-jeffrey.netlify.app" />
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Humbe Jeffrey"/>
                <meta property="og:description" content="Humbe Jeffreys' portfolio web application" />
                {/* <meta property="og:image" content="https://humbe-jeffrey.netlify.app/static/favicon.ico" /> */}
                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Humbe Jeffrey" />
                <meta name="twitter:description" content="Humbe Jeffreys' portfolio web application" />
                {/* <meta name="twitter:image" content="https://humbe-jeffrey.netlify.app/static/favicon.ico" /> */}
                {/* <!-- Meta Tags Generated via http://heymeta.com --> */}
                <link rel="canonical" href="https://humbejeffrey.netlify.app" />
            </Helmet>
            <IndexComp />        
        </Template>
    )
}