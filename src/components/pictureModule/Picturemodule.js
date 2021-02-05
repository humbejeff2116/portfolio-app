import React from 'react';


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

