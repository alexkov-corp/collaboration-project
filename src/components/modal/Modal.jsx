import React from 'react';
import './modal.scss';
import ReactModal from 'react-modal';
import {customStyles} from '../../constants/modal-constants';
import {connect} from "react-redux";
import {switchModalShow} from '../../actions/modal-actions';
import Navigation from '../navigation/Navigation'

const Modal = props => {
  const {modalReducer, switchModalShow} = props;

  const afterOpenModal = () => {
    console.log('after open modal handler');
  };

  const closeModal = () => {
    const closeModalWindow = false;
    switchModalShow(closeModalWindow);
  };

  return(
    <ReactModal
      isOpen={modalReducer.isModalShow}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Menu Modal Window"
    >
      <Navigation />
    </ReactModal>
  )
};

const mapStateToProps = store => {
  const {modalReducer} = store;
  return {
    modalReducer
  };
};

const mapDispatchToProps = {
  switchModalShow
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
