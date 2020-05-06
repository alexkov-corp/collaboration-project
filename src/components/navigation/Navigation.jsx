import React from "react";
import './navigation.scss'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {routes} from "../routes/router-path";
import {switchModalShow} from '../../actions/modal-actions';


const Navigation = props => {
  const {switchModalShow} = props;
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

  const selectPageHandler = () => {
    const closeModalWindow = false;
    switchModalShow(closeModalWindow);
  };

  return (
    <div className='navigation-container'>
      <nav className='navigation-block'>
        <ul className='navigation-ul'>
          <li ><Link className=' active_line' to={root}>home</Link></li>
          <li><Link to={collections} onClick={selectPageHandler}>collections</Link></li>
          <li><Link to={boutique} onClick={selectPageHandler}>boutique</Link></li>
          <li><Link to={measure} onClick={selectPageHandler}>measure</Link></li>
          <li><Link to={corporate} onClick={selectPageHandler}>corporate</Link></li>
          <li><Link to={services} onClick={selectPageHandler}>services</Link></li>
          <li><Link to={storeLocator} onClick={selectPageHandler}>storeLocator</Link></li>
          <li><Link to={pressRoom} onClick={selectPageHandler}>pressRoom</Link></li>
          <li><Link to={careers} onClick={selectPageHandler}>careers</Link></li>
          <li><Link to={social} onClick={selectPageHandler}>social</Link></li>
          <li><Link to={contacts} onClick={selectPageHandler}>contacts</Link></li>
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
  switchModalShow
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

