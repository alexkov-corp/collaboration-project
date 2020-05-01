import React from 'react';
import './App.scss';
import Routes from './components/routes/Routes'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
