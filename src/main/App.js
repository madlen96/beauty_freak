import React from 'react';
import { MakeUpProvider } from './MakeUpContext';
import MakeUpItems from './../components/MakeUpItems';
import AppHeader from './AppHeader';
import Nav from './../navigation/Nav';
import About from './../navigation/About';
import Contact from './../navigation/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MakeUpItemsSearch from './../navigation/MakeUpItemsSearch';
const App = () => {
  return (
    <Router>
      <MakeUpProvider >
        <div className="App" >
          <AppHeader />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={MakeUpItemsSearch} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </MakeUpProvider>
    </Router>
  );
}
const Home = () => (
  <div className="makeUpItems" >
    <MakeUpItems />
  </div>
);
export default App;