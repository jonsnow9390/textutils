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
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")

  const removBdyCls =()=>{
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-null")
  }

  const toggleMode = (cls) => {
    
    removBdyCls();
    document.body.classList.add("bg-"+cls)
  
    if (cls===null && mode === 'light') {
       setMode('dark')
       document.body.style.backgroundColor = "#003787d6";
       showAlert(" dark mode has been enabled", "success")
      
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert(" dark mode has been disabled", "success")
      
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
            <Route path="/">
              <TextForm mode={mode} showAlert={showAlert}  />
            </Route>
            <Route path="/">
              <TextForm mode={mode} showAlert={showAlert}  />
            </Route>
            <Route exactpath="/About">
              <About togglemode={toggleMode}/>
            </Route>
          </Switch >
        </div>
      </Router>



    </>


  );
}

export default App; 