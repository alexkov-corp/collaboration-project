import React from 'react';
import './App.scss';
import ContentBlock from "./components/contentBlock/ContentBlock";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentBlock/>
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
