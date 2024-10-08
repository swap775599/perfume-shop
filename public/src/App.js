// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'; // Optional: Add some global styling

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
