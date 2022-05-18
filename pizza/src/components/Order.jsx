import Menu from "./Menu";
import Text from "./Text";
import Modal from "./Modal";
import { useState } from "react";

const Order = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="header-text">
        <button type="button" className="bookatablebtn" onClick={openModal}>
          - Asztalfoglalás -
        </button>
        <h1 className="skandinavian">Skandinavian Pizza</h1>
        <div className="address">
          <span>1010 Budapest, Pizza-szelet tér 8, (+36-55-555-5555)</span>
        </div>
      </div>
      <div className="container">
        <Menu />
        <Text />
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Order;
