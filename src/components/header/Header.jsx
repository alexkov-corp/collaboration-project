import React from "react";
import {Link} from "react-router-dom";
import {routes} from "../routes/router-path";
import {connect} from "react-redux";
import './header.scss'
import {switchModalShow} from '../../actions/modal-actions';

const HeaderComponent = props => {
  const {navigation} = routes;
  const {switchModalShow} = props;

  const menuClickHandler = () => {
    const openModalWindow = true;
    switchModalShow(openModalWindow);
  };

  return (
    <header className="header-wrapper">
      <nav className="react-link">
        <Link to={navigation} className="react-link">
          <div className='wrap-menu'>
            <span/>
            <span/>
            <span/>
          </div>
        </Link>
        <div onClick={menuClickHandler} className="react-link">
          <div className='wrap-menu'>
            <span/>
            <span/>
            <span/>
          </div>
        </div>
      </nav>
      <figure className='logo'>
        <Link to={'/editrout'}>
          <img src='../img/logo.png'/>
        </Link>
      </figure>
      <figure className='social'>
        <Link to={'/editrout'}>
          <img src='../img/social.png'/>
        </Link>
      </figure>
    </header>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

