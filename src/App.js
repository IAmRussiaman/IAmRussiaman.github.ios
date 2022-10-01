import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import React, { createContext, useState } from 'react';
import './App.css';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';

export const SearchContext = createContext('');
const App = () => {
  let [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <div className="wrapper">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </SearchContext.Provider>
  );
};

export default App;
