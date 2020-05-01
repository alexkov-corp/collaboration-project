import React from "react";
import './footer.scss'
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const FooterComponent = () => {
    return (
        <footer className="footer-wrapper">
            <span>LUBIAM ® . P.IVA 01221630203</span>
            <div className='footer-nav' >
                <ul className='nav-switch'>
                    <li>
                        <Link to={'/editrout'}>Privacy</Link>
                    </li>
                    <li>
                        <Link to={'/editrout'}>Web agency</Link>
                    </li>
                </ul>
                <ul className='nav-language'>
                    <li>
                        <Link to={'/editrout'}>itl</Link>
                    </li>
                    <li>
                        <Link to={'/editrout'}>eng</Link>
                    </li>
                    <li>
                        <Link to={'/editrout'}>ua</Link>
                    </li>
                    <li>
                        <Link to={'/editrout'}>jap</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);

