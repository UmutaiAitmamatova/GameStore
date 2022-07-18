import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import {Route, Switch} from 'react-router-dom'
// import { Routes } from 'react-router-dom'

import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import { HomePage } from './pages/home-page/home-page'
import { Header } from './components/header'

function App() {
  return (

    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  </Router>

  );
}

export default App;
