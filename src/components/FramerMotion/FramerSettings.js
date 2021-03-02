











const framerMotionSettings = {
    pageVariants: {
        initial:{
            opacity:0,
            x:"-100vh",
        },
    
        in:{ 
            opacity:1,
            x:0,       
         },
    
        out:{
            opacity:0,
            z:"100vh",     
        },
        
    },

    pageTransitions : {
        type:"tween",
        ease:"anticipate",
        duration:0.5
    }

}
export default framerMotionSettings;