import { useState, useEffect } from "react";

const Modal = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const [actualDate, setActualDate] = useState(null);
  const [actualTime, setActualTime] = useState(null);
  const [guest, setGuest] = useState(null);
  const [today, setToday] = useState(null);
  const [todayTime, setTodayTime] = useState(null);
  const [tableText, setTableText] = useState("");
  const [count, setCount] = useState();
  const [closeText, setCloseText] = useState("");

  //  console.log("The name is: ", name);
  //  console.log("The emeail address: ", email);
  //  console.log("The email address is: valid? ", valid);

  useEffect(() => {
    let currentDate = new Date();
    let ddd =
      currentDate.getFullYear() +
      "-" +
      (currentDate.getMonth() + 1) +
      "-" +
      currentDate.getDate();
    setToday(ddd);
  }, []);

  useEffect(() => {
    let currentTime = new Date();
    let time = currentTime.getHours() + ":" + currentTime.getMinutes();
    setTodayTime(time);
  }, []);

  const sendData = () => {
    return fetch("/api/booking", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        today,
        todayTime,
        name,
        email,
        guest,
        actualDate,
        actualTime,
      }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      return alert("A név nem megfelelő");
    }

    if (!valid) {
      return alert("Az Email cím nem valid");
    }
  };

  const handleChangeEmail = (e) => {
    const {
      target: { value },
    } = e;
    if (value.includes("@") && value.includes(".")) {
      setValid(true);
    }
    setEmail(value);
  };

  const tableOk = () => {
    const txt = "A foglalását fogadtuk, Szeretettel várjuk. ";
    const txt2 = "Az ablak bezárodik: ";
    setTableText(txt);
    setCloseText(txt2);
  };

  const waitModal = () => {
    setTimeout(() => {
      props.closeModal();
    }, 20000);
  };

  useEffect(() => {
    const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <div
        className="modal"
        style={{ display: props.isOpen ? "flex" : "none" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h1>Asztalfoglalás</h1>
            <button
              type="button"
              className="btnCloseX"
              onClick={props.closeModal}
            >
              X Close
            </button>
          </div>
          <div className="modal-body">
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="name"
                placeholder="Név:"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="number"
                id="number"
                placeholder="Vendégek száma:"
                min="1"
                max="30"
                onChange={(e) => {
                  setGuest(e.target.value);
                }}
              />
              <input
                type="email"
                id="email"
                placeholder="Email:"
                value={email}
                onChange={handleChangeEmail}
              />
              <div className="dateTime">
                <div className="date">
                  <h4>A foglalás napja</h4>
                  <input
                    type="date"
                    id="datebtn"
                    onChange={(e) => {
                      setActualDate(e.target.value);
                    }}
                    min={actualDate}
                  />
                </div>
                <div className="date">
                  <h4>A foglalás időpontja</h4>
                  <input
                    type="time"
                    id="datebtn"
                    onChange={(e) => {
                      setActualTime(e.target.value);
                    }}
                    min="16:00"
                    max="21:00"
                  ></input>
                </div>
              </div>
              <button
                type="submit"
                id="submitbtn"
                onClick={() => {
                  sendData();
                  tableOk();
                  waitModal();
                  setCount(20);
                }}
              >
                Foglalás
              </button>
            </form>
            <h4 className="count">{tableText}</h4>
            <h5 className="count">
              {closeText}
              {count}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
