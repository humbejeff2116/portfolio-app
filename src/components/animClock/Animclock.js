import React from 'react';
import './Animclock.css'


class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),    
      hours: '',
      minutes:'',
      seconds:'',

    }
  }
   initLocalClocks = ( ) => {
    // Get the local time using JS
    let date = new Date();
   let seconds = date.getSeconds();
   let minutes = date.getMinutes();
   let hours = date.getHours();
   
  
    // Create an object with each hand and it's angle in degrees
    var hands = [
      {
        hand: 'hours',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        angle: (minutes * 6)
      },
      {
        hand: 'seconds',
        angle: (seconds * 6)
      }
    ];
    // Loop through each of these hands to set their angle
    for (var j = 0; j < hands.length; j++) {
      var elements = document.querySelectorAll('.' + hands[j].hand);
      for (var k = 0; k < elements.length; k++) {
          elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
          elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
      }
    }
  }

   updateTime = ( )=> {
    // Get the local time using JS
 let date = new Date();
 let seconds = date.getSeconds();
 let minutes = date.getMinutes();
 let hours = date.getHours();
 
 
  this.setState({
    seconds,
    minutes,
    hours
  })

 }
  componentDidMount(){
    // set clock hands position when component mounts
    this.initLocalClocks();
    // set interval to update time in components state every 1 second
    this.inter = setInterval(this.updateTime,1000);
    

  }
  componentDidUpdate(prevState,prevProps){
    // re run function to set hands when the component updates;
    
    this.initLocalClocks();
   
  }
  componentWillUnmount(){
    clearInterval(this.inter);

  }
  render(){
    return(
      <div className="pic-mod-clock">

                   <section className="clock">
                   <div className="hours-container"   >
                 <div className="hours"></div>
                   </div>
                   <div className="minutes-container" >
                   <div className="minutes" ></div>
                   </div>
                   <div className="seconds-container" >
                   <div className="seconds" ></div>
                   </div>
                   </section>
      </div>
                     

    )
  }

}
export default Clock;