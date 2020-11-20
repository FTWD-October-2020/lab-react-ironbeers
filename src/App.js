import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Beers from './components/Beers.js'
import NewBeer from './components/NewBeer.js'
import RandomBeer from './components/RandomBeer.js'
import Header from './components/Header.js'
import OneBeer from './components/OneBeer.js'
//http://localhost:3000/beers/5fb6a86265b9c209606e10e0

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>

        <Route exact path="/beers" render={(props) => <Beers {...props} />} />
        <Route exact path="/new-beer" render={(props) => <NewBeer {...props} />} />
        <Route exact path="/random-beer" render={(props) => <RandomBeer {...props} />} />
        <Route exact path="/beers/:beerId" render={(props) => <OneBeer {...props} />} />

      </Switch>





    </div>
  );
}

export default App;
