import React from "react";
import {Link} from "react-router-dom";
import {routes} from "../routes/router-path";
import './header.scss'
import {connect} from "react-redux";

const HeaderComponent = props => {
    const {navigation} = routes;
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
            </nav>
            <figure className='logo'>
                <a>
                    <img src='../img/logo.png'/>
                </a>
            </figure>
            <figure className='social'>
                <a>
                    <img src='../img/social.png'/>
                </a>
            </figure>
        </header>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

