import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Shop from './components/shop';
import { Seller } from './components/seller';
import * as serviceWorker from './serviceWorker';
import api from '../services/api';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<App />} />
        <Route path="/Seller" element={<Seller />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router />
);

serviceWorker.unregister();
