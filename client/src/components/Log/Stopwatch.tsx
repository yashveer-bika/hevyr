import React from 'react';
import { Button } from 'react-bootstrap';
import { useStopwatch } from 'react-timer-hook';

export default function Stopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  function onReset() {
      reset();
      pause();
  }

  let buttonDisplay : JSX.Element;

  if (!isRunning && seconds==0 && minutes==0 && hours==0 && days==0) {
    buttonDisplay = 
        <div className="clock-button-display"> 
            <Button onClick={() => isRunning ? null : start()}>Start</Button> 
        </div>
  } else if (isRunning) {
      buttonDisplay = 
        <div className="clock-button-display"> 
            <Button onClick={pause}>Stop</Button>  
        </div>
  } else {
    buttonDisplay = 
        <div className="clock-button-display"> 
            <Button onClick={ () => onReset() }>Reset</Button> 
            <Button onClick={() => isRunning ? null : start()}>Start</Button>
        </div>
  }

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


  // TODO: add case when timer goes above 1 hour

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        {/* <span>{addLeadingZero(minutes)}</span>:<span>{addLeadingZero(seconds)}</span> */}
        {timeDisplay}
      </div>

      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}

      {buttonDisplay}

      {/* 
      <Button onClick={() => isRunning ? null : start()}>Start</Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={ () => onReset() }>Reset</Button> 
      */}


    </div>
  );
}