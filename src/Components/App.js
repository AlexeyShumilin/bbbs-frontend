import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import About from './About';

function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route exact path='/'> <Main /></Route>
        <Route path='/about'><About /></Route> 
      </Switch>
          <Footer />
    </div>
  );
}

export default App;
