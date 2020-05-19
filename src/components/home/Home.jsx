import React from "react";
import { connect } from "react-redux";
import { withNamespaces } from 'react-i18next';
import './home.scss';
import {
  HomeContainer
} from './home-styled-component';

const HomeComponent = props => {
  const { t: customText,  } = props;


  return (
    <HomeContainer>
      <h1 className="home-title">HOME Page</h1>
      <h1 className="home-title">{customText('title')}</h1>
      <h1>{customText('Welcome to React')}</h1>
    </HomeContainer>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {

};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default withNamespaces()(Home);