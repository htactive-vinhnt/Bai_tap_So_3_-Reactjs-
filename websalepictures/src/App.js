import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import SlideShow from './components/Slide/SlideShow';
import Menu from './components/Menu/boxMenu';

function App() {
  
  return (
    <div className="App">
      <Header linkLogo="https://brasol.vn/public/ckeditor/uploads/tin-tuc/brasol.vn-logo-instargram-logo-instagram-vector.png" nameWeb="K4-CN offical"/>
      <Menu />
      <Content />
    </div>
  );
}

export default App;
