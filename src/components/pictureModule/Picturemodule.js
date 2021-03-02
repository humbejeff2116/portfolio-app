import React from 'react';


export default function PictureComp({leftPane,rightPane}){
    if(!rightPane){
        return(
            
    <div className="pic-mod-contnr">
         <div className="pic-mod-no-right">
             {leftPane}
         </div>
        
    </div>

        )
    }
  
    return(

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
