import React from 'react';
import Header from "./components/header/Header.jsx"
import Main from "./components/main/Main.jsx"
import Basket from "/src/pages/basket/Basket.jsx"
import {Routes, Route} from 'react-router-dom';

const App = () => {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />}/>
      </Routes>
    </>
  );
};

if (!window.App) {
  window.App = {};
}

window.App.start = (config) => {
  // Ваш код для инициализации приложения с использованием конфигурации config
  console.log('App started with config:', config);
};

export default App;
