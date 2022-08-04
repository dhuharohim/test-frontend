import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Data from './dashboard/Data';
import Input from './dashboard/Input';
import Logout from './dashboard/Logout';
import Card from './login/Card';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Card setToken={setToken} />
  }
  return (
    
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/data" element={<Data />} />
          <Route path="/input" element={<Input />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
