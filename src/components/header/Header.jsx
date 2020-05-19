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
            <nav onClick={menuClickHandler} className="react-link">
                <span/>
                <span/>
                <span/>
            </nav>
            <figure className='logo'>
                <Link to={'/'}>
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

