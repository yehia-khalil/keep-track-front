import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './components/auth/login';
import Home from './components/home';
import NavBar from './components/navbar'

function App() {
  let [value, setValue] = useState(null);
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  return (
    <Router>
      <div>
        <NavBar getCookie={getCookie} setValue={setValue}/>

        <Switch>
          <Route path="/login">
            <Login setValue={setValue}/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
