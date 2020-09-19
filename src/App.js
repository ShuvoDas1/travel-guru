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
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RoomBooking from './Components/RoomBooking/RoomBooking';
export const UserContext = createContext();


function App() {
   const [loggedInUser,setLoggedInUser] = useState({
     name: '',
     email: '',
     photo: '',
     password: ''
   })
  
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>

      <Header></Header>
      <Switch>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route path='/location/:placeId'>
          <LocationDetail></LocationDetail>
        </Route>
        <Route path='/login'>
            <Login></Login>
        </Route>
        <PrivateRoute path='/roombooking'>
          <RoomBooking></RoomBooking>
        </PrivateRoute>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
