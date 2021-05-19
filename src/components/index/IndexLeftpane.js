import React from 'react';
import {Link} from 'react-router-dom';
import { BsArrowRight} from "react-icons/bs";
import {RiMailSendLine} from "react-icons/ri";
import ApplicationData from '../../Data/data';
// import { SplitText } from '../FramerMotion/SplitText'
import { AnimatePresence, motion } from 'framer-motion';


export default function IndexLeftPane(props) {
    const indexInfoData = ApplicationData.getIndexInfo();

    return (
        <div className="index-info">   
          <AnimatePresence >
              <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`pic-mod-intro ` } 
              >
              {
                indexInfoData.map( (data,i) =>
                <IndexInfoCard key={i} {...data} />
                )
              }   
              </motion.div> 
            </AnimatePresence>      
            <div className="arrow">  
            <p> <i> <BsArrowRight className="arrow-down"/> </i> </p>
            </div>
        </div>
    )
}

function IndexInfoCard(props) {

    return(
        <>
          <div className="index-content">
           <h1>{props.heading} </h1> 
           <p>{props.body}</p>
          </div>
            <Link to="contact" className="contact-link" >
              <button className="pic-mod-intro-hire">
                  <i> <RiMailSendLine className="contact-bttn-icon"/> </i>
                  Contact me
              </button>
            </Link>
               {/* <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SplitText
                initial={{ y: '100%' }}
                animate="visible"
                variants={{
                  visible: i => ({
                    y: 0,
                    transition: {
                      delay: i * 0.1
                    }
                  })
                }}
              >
                Hello CodeSandbox Lorem Ipsum Dolor Sit Amet
              </SplitText>
            </motion.div> */}
        </>
    )
}