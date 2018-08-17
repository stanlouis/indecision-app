import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const OptionModal = ({ selectedOption, handleCloseModal }) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleCloseModal}
    closeTimeoutMS={200}
    className="modal"
    contentLabel="Selected Option"
  >
    <h3 className="modal__title">Selected Option</h3>
    {selectedOption && <p className="modal__body">{selectedOption}</p>}
    <button className="button" onClick={handleCloseModal}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
