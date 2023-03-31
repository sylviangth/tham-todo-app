import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [duration, setDuration] = useState({ minutes: 0, seconds: 0 });
  const [timer, setTimer] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const countdown = setInterval(() => {
        setDuration((prevDuration) => {
          const { minutes, seconds } = prevDuration;
          if (minutes === 0 && seconds === 0) {
            clearInterval(countdown);
            setIsRunning(false);
          } else if (seconds === 0) {
            return { minutes: minutes - 1, seconds: 59 };
          } else {
            return { minutes, seconds: seconds - 1 };
          }
        });
      }, 1000);
  
      setTimer(countdown);
  
      return () => clearInterval(countdown);
    } else {
      clearInterval(timer); // clear interval if timer is not running
    }
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timer);
  };

  const resetTimer = () => {
    setDuration({ minutes: 0, seconds: 0 });
    setIsRunning(false);
    clearInterval(timer);
  };

  const minutes = duration ? duration.minutes : 0;
  const seconds = duration ? duration.seconds : 0;

  return (
    <div>
      <div className="row">
        <div className="col input-group">
          <input
            className="form-control"
            type="number"
            id="minutes"
            value={minutes}
            onChange={(e) =>
              setDuration({ ...duration, minutes: Number(e.target.value) })
            }
          />
          <label htmlFor="minutes" className="input-group-text">minutes</label>
        </div>
        <div className="col input-group">
          <input
            className="form-control"
            type="number"
            id="seconds"
            value={seconds}
            onChange={(e) =>
              setDuration({ ...duration, seconds: Number(e.target.value) })
            }
          />
          <label htmlFor="seconds" className="input-group-text">seconds</label>
        </div>
      </div>
      
      <h1 className="display-3 mt-3 mb-3 fw-normal">
        {`${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </h1>

      <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button onClick={startTimer} type="button" className="btn btn-outline-primary"><i className="bi bi-play me-2"></i>Start</button>
        <button onClick={stopTimer}type="button" className="btn btn-outline-primary"><i className="bi bi-pause me-2"></i>Stop</button>
        <button onClick={resetTimer} type="button" className="btn btn-outline-primary"><i className="bi bi-arrow-repeat me-2"></i>Reset</button>
      </div>
    </div>
  );
}

export default CountdownTimer;


