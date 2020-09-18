import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import LocationDetail from './Components/LocationDetail/LocationDetail';
export const locationContext = createContext();


function App() {
  const [locations,setLocations] = useState([]);
   console.log(locations);
  return (
    <locationContext.Provider value={[locations,setLocations]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route path='/booking/:placeId'>
          <LocationDetail></LocationDetail>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
    </locationContext.Provider>
  );
}

export default App;
