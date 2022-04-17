import { useEffect, useState } from "react";

const TableDate = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setDate(date);
  }, []);

  console.log("The current Date is: ", date);

  return (
    <div className="date">
      <h4>A foglalás napja</h4>
      <input type="date" id="datebtn" min={date} />
    </div>
  );
};

export default TableDate;
