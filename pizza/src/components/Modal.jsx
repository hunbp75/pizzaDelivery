import { useState } from "react";
import TableDate from "./TableDate";
import TableTime from "./TableTime";

const Modal = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);

  console.log("The name is: ", name);
  console.log("The emeail address: ", email);
  console.log("The email address is: valid? ", valid);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      return alert("A név nem megfelelő");
    }

    if (!valid) {
      return alert("Az Email cím nem valid");
    }
    props.closeModal();
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
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
                onChange={handleChangeName}
              />
              <input
                type="number"
                id="number"
                placeholder="Vendégek száma:"
                min="1"
                max="30"
              />
              <input
                type="email"
                id="email"
                placeholder="Email:"
                value={email}
                onChange={handleChangeEmail}
              />
              <div className="dateTime">
                <TableDate />
                <TableTime />
              </div>
              <button type="submit" id="submitbtn">
                Foglalás
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
