import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const OptionModal = ({selectedOption, handleCloseModal}) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleCloseModal}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {selectedOption && <p>{selectedOption}</p>}
    <button onClick={handleCloseModal}>Okay</button>
  </Modal>
)
 
export default OptionModal;