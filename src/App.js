import React from "react";
import { Provider } from "react-redux";
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
import { GamePage } from './pages/game-page/game-page'
import { OrderPage } from './pages/order-page/order-page'
import { Header } from './components/header'
import { store } from './redux'

function App() {
  return (

    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/"  element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
