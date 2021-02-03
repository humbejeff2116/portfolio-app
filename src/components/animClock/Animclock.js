









import React from 'react';

import './Animclock.css'





// export default function Clock(props){
//   const [hours, setHours] = useState('');
//   const [minutes, setMinutes]  = useState('');
//   const [seconds, setSeconds] = useState('');
 
//   const secondsStyle = {
//     transform: `rotate(${seconds * 6}deg)`
//   };
//   const minutesStyle = {
//     transform: `rotate(${minutes * 6}deg)`
//   };
//   const hoursStyle = {
//     transform: `rotate(${hours * 30}deg)`
//   };

//   function initLocalClocks() {
//     // Get the local time using JS
//     let date = new Date();
//    let seconds = date.getSeconds();
//    let minutes = date.getMinutes();
//    let hours = date.getHours();
   
  
//     // Create an object with each hand and it's angle in degrees
//     var hands = [
//       {
//         hand: 'hours',
//         angle: (hours * 30) + (minutes / 2)
//       },
//       {
//         hand: 'minutes',
//         angle: (minutes * 6)
//       },
//       {
//         hand: 'seconds',
//         angle: (seconds * 6)
//       }
//     ];
//     // Loop through each of these hands to set their angle
//     for (var j = 0; j < hands.length; j++) {
//       var elements = document.querySelectorAll('.' + hands[j].hand);
//       for (var k = 0; k < elements.length; k++) {
//           elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
//           elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
//       }
//     }
//   }



//   useEffect(()=>{
//     initLocalClocks();

    
//     const handleDate = function (){
    
//       const date = new Date();
//       let hours = date.getHours();
//       let minutes = date.getMinutes();
//       let seconds = date.getSeconds();
//      setHours(hours);
//      setMinutes(minutes);
//      setSeconds(seconds);

//     }
   
//     const inter = setInterval(handleDate,1000);
 
//     return ()=>{
//       clearInterval(inter);
//     };
//   },[hours,minutes,seconds]);

//     return(
//         <div className="pic-mod-clock">

//             <section className="clock">
//             <div className="hours-container"   >
//             <div className="hours"style={hoursStyle}></div>
//             </div>
//             <div className="minutes-container" >
//             <div className="minutes" style={minutesStyle} ></div>
//             </div>
//             <div className="seconds-container" >
//             <div className="seconds" style={secondsStyle}></div>
//             </div>
//             </section>

//         </div>


//     )
// }








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

































   /*
  * Starts any clocks using the user's local time
  * From: cssanimation.rocks/clocks
  */
 function initLocalClocks() {
  // Get the local time using JS
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
 

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
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
}

/*
* Move the second containers
*/
function moveSecondHands() {
  var containers = document.querySelectorAll('.seconds-container');
 var inter = setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 6;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 1000);
}

