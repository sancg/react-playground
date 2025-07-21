import { useState } from 'react';
import Modal from '../components/Modal/Modal';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal((prev) => !prev);
  };
  const modal = <Modal handleShow={handleShow} />;
  return (
    <div className="">
      <button onClick={handleShow}>Open Modal</button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
