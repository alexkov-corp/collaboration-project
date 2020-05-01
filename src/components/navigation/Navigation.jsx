import React from "react";
import './navigation.scss'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {routes} from "../routes/router-path";

const Navigation = props => {
  const {
    root,
    collections,
    boutique,
    measure,
    corporate,
    services,
    storeLocator,
    pressRoom,
    careers,
    social,
    contacts,
  } = routes;
  return (
    <div className='navigation-container'>
      <nav className='navigation-block'>
        <ul className='navigation-ul'>
          <li ><Link className=' active_line' to={root}>home</Link></li>
          <li><Link to={collections}>collections</Link></li>
          <li><Link to={boutique}>boutique</Link></li>
          <li><Link to={measure}>measure</Link></li>
          <li><Link to={corporate}>corporate</Link></li>
          <li><Link to={services}>services</Link></li>
          <li><Link to={storeLocator}>storeLocator</Link></li>
          <li><Link to={pressRoom}>pressRoom</Link></li>
          <li><Link to={careers}>careers</Link></li>
          <li><Link to={social}>social</Link></li>
          <li><Link to={contacts}>contacts</Link></li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = store => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

