import { useState, useEffect } from "react";
import "./DgClock.css";

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  const addingDecimal = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };
  const ampm = (hour)=>{
    return hour >= 12 ? " PM " : " AM "
  }

  return (
    <>
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="timer-class">
          <p>
            {addingDecimal(formatHour(currentTime.getHours()))} :{" "}
            {addingDecimal(currentTime.getMinutes())} :{" "}
            {addingDecimal(currentTime.getSeconds())} {ampm(addingDecimal((currentTime.getHours())))}
          </p>
        </div>
        <div className="date-class">
          <p>{currentTime.getDate()}/{currentTime.getMonth()}/{currentTime.getFullYear()}</p>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
