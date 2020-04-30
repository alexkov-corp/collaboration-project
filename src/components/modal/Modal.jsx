import React, {useState} from 'react';
import './modal.scss';
import ReactModal from 'react-modal';
import {customStyles} from '../../constants/modalConstants';
import {connect} from "react-redux";
import modalReducer from "../../reducers/modal-reducer";

const Modal = props => {
  const [modalIsOpen,setIsOpen] = useState(false);
  const {children} = props;

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
    console.log('after open modal handler');
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return(
    <ReactModal
      isOpen={false}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Menu Modal Window"
    >
      {children}
    </ReactModal>
  )
};

const mapStateToProps = state => {
  const {modalReducer} = state;
  return {
    modalReducer
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
