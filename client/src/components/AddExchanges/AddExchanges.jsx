import { useState } from 'react';
import './Modal.scss'; // Create a CSS file for styling
import ExchangeForm from '../Form/Form';

export default function AddExchanges({ fetchData }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Add Exchanges</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>X</span>
            <h2>Add Exchanges Title</h2>
            <ExchangeForm fetchData={fetchData} setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </div>
  );
}
