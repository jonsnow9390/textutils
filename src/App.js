import './App.css';
import About from './Components/About.js';
import Alert from './Components/Alert.js';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/Textform.js';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "grey";
      showAlert(" dark mode has been enabled", "success")
      document.title = "Textutils-Darkmode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert(" dark mode has been disabled", "success")
      document.title = "Textutils-Lightmode"
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }

  return (
    <>
      <Router>
        <Navbar title='Textutils' aboutext='About' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          <Switch>
            <Route path="/Main">
              <TextForm mode={mode} showAlert={showAlert} toggleMode={toggleMode} />
            </Route>
            <Route path="/Home">
              <TextForm mode={mode} showAlert={showAlert} toggleMode={toggleMode} />
            </Route>
            <Route path="/About">
              <About/>
            </Route>
          </Switch >
        </div>
      </Router>



    </>


  );
}

export default App;
