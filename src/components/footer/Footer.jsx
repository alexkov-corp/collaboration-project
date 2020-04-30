import React from "react";
import './footer.scss'
import {connect} from "react-redux";

const FooterComponent = props => {
    console.log(props)
    return (
        <footer className="footer-wrapper">
            <span>LUBIAM ® . P.IVA 01221630203</span>
            <div className='footer-nav' >
                <ul className='nav-switch'>
                    <li>
                        <a >Privacy</a>
                    </li>
                    <li>
                        <a>Web agency</a>
                    </li>
                </ul>
                <ul className='nav-language'>
                    <li>
                        <a >itl</a>
                    </li>
                    <li>
                        <a >eng</a>
                    </li>
                    <li>
                        <a >ua</a>
                    </li>
                    <li>
                        <a >jap</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);

