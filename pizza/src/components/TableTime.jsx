import { useEffect, useState } from "react";

const TableTime = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    let currentTime = new Date();
    let time = currentTime.getHours() + ":" + currentTime.getMinutes();
    setTime(time);
  }, []);

  console.log("The current time is: ", time);

  return (
    <div className="date">
      <h4>A foglalás időpontja</h4>
      <input type="time" id="datebtn"></input>
    </div>
  );
};

export default TableTime;
