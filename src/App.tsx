import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import About from "./components/About";

import {Space} from "antd";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {


  return (
      <Space direction="vertical" style={{width: '100%'}} size={[0,48]}>
          <Navbar/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/about'} element={<About/>}/>
          </Routes>
      </Space>
  );
}

export default App;
