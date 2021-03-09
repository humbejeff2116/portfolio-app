



import React from 'react';
import Flickity from 'react-flickity-component'
import './Carousel.css';

const flickityOptions = {
    initialIndex: 1,
    autoPlay: false
}





export default function Carousel(props) {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    
    return (

        
      <Flickity
      
        
        options={flickityOptions} 
        disableImagesLoaded={false} 
        reloadOnUpdate={true} 
        static={false} 
      >
          {
               props.projImages.map((image,i)=>
               <ImageComp key={i} {...image} imageLoaded={imageLoaded} setImageLoaded={setImageLoaded} />
           )
          }
       
        
      </Flickity>
    )
  }

  function ImageComp(props){
      return(
        <img src={props.imageSrc} 
        alt="img"  
        width="100%"  
        height="auto"
        className={`smooth-image image-${props.imageLoaded ? 'visible' :  'hidden'}`}
        onLoad={ ()=> props.setImageLoaded(true) }
         />
      )
  }