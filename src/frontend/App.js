import React from 'react';
import Gallery from './components/gallery/Gallery';
import './App.css';
import Details from './components/details/Details';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import NotFound from './components/NotFound/NotFoundPage'

function App() {
  return (
    <Router>   
      <div className="App">
            <Switch>
              <Route exact path='/' component={Gallery} />
              <Route exact path='/notFound' component={NotFound} />
              <Route exact path='/:detailsId' component={Details} />
            </Switch>
      </div>     
    </ Router>
  );
}

export default App;
