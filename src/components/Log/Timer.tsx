import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';


// TODO: type this correctly and robustly
// TODO: onExpire make a sound
export default function Timer({ defaultTimerStartTime } : any) {

    // in seconds (s)
    const [currentStartTime, setCurrentStartTime] = useState(defaultTimerStartTime / 1000);
 
  let expiryTimestamp : Date = Date.now() + defaultTimerStartTime;
  let {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, autoStart: false, onExpire: () => null });


  function addLeadingZero(x : number) {
    return (x < 10) ? `0${x}` : x
  }

  let timeDisplay : JSX.Element;
  if (days < 1 && hours < 1) {
      timeDisplay = 
        <div className="clock-time-display"> 
            <span>{addLeadingZero(minutes)}</span>:<span>{addLeadingZero(seconds)}</span> 
        </div>
  } else if (days < 1) {
      timeDisplay = 
        <div className="clock-time-display"> 
            <span>{addLeadingZero(hours)}</span>:<span>{addLeadingZero(minutes)}</span>:<span>{addLeadingZero(seconds)}</span> 
        </div>
  } else {
      timeDisplay = 
        <div className="clock-time-display"> 
            <span>{addLeadingZero(days)}</span>:<span>{addLeadingZero(hours)}</span>:<span>{addLeadingZero(minutes)}</span>:<span>{addLeadingZero(seconds)}</span> 
        </div>
  }

//   const time = new Date();
//     time.setSeconds(time.getSeconds() + 60);
//     restart(time);
//     pause();

  function onCancel() {
    const defaultTime = 60;
    const time = new Date();
    time.setSeconds(time.getSeconds() + currentStartTime);
    restart(time);
    pause();
  }

  // delta : in seconds (s)
  function changeClockTime(delta : number) {
    // Restarts to 5 minutes timer
    const time = new Date();
    time.setSeconds(time.getSeconds() + currentStartTime + delta);
    setCurrentStartTime(currentStartTime + delta);
    restart(time);
    pause();
  }

  return (
    <div style={{textAlign: 'center'}}>
      
      <div style={{fontSize: '100px'}}>
        {timeDisplay}
      </div>
      
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      
      <button onClick={start}>Start</button>
      
      {/* <button onClick={pause}>Pause</button> */}
      
      {/* <button onClick={resume}>Resume</button> */}

      <button onClick={() => changeClockTime(-15)}> -15s </button>
      <button onClick={() => changeClockTime(15)}> +15s </button>

      <button onClick={onCancel}> Cancel </button>
    
    </div>
  );
}