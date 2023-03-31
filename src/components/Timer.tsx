import { useState } from "react";
import CountdownTimer from "./TimerClock";

const Timer = function () {

  return (
    <div className="card bg-white rounded-2 text-center">
      <p className="card-header fw-semibold"><i className="bi bi-clock-fill me-2"></i>Your timekeeper</p>
      <div className="card-body text-primary p-3 mt-3 mb-3"><CountdownTimer /></div>
    </div>
  )
}

export default Timer;