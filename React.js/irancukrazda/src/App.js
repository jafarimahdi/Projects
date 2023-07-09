
import React from "react";
import Navbar from "./component/Navbar";
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/product" exact component={Product} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
