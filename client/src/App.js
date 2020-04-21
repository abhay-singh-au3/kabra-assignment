import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import withAuth from './components/withAuth/withAuth';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={withAuth(Home)} />
        <Route path="/cart" component={withAuth(Cart)} />
      </Switch>
    </Router>
  );
};

export default App;
