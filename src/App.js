import React from 'react';
import './App.css';


import {BrowserRouter, Route, Routes, Redirect} from 'react-router-dom';



import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from './components/NotFound';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <NavBar />
      <Routes>
      <Route exact path="/">
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="404" element={<NotFound />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
