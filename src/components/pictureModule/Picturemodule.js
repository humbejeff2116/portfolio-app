


















import React from 'react';




// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// const user1 = <FontAwesomeIcon  icon={['fas', "user"]}   />





export default function PictureComp({leftPane,rightPane}){
  
  
    return(
                // flex row
    <div className="pic-mod-contnr">
         <div className="pic-mod-left">
             {leftPane}
         </div>
         <div className="pic-mod-right" >
             {rightPane}
         </div>
     
    </div>          
    )

}

