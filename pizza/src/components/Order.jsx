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
      <h1 className="skandinavian">Skandinavian Pizza</h1>
      <div className="container">
        <Menu />
        <Text />
      </div>
      <button type="button" className="bookatablebtn" onClick={openModal}>
        Asztalfoglalás
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Order;
