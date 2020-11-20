import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Beers from './components/Beers.js'
import NewBeer from './components/NewBeer.js'
import RandomBeer from './components/RandomBeer.js'
import Header from './components/Header.js'


function App() {
  return (
    <div className="App">
    <Header />

      <Switch>

        <Route exact path="/beers" render={(props) => <Beers {...props} />} />
        <Route exact path="/new-beer" render={(props) => <NewBeer {...props} />} />
        <Route exact path="/random-beer" render={(props) => <RandomBeer {...props} />} />


      </Switch>





    </div>
  );
}

export default App;
