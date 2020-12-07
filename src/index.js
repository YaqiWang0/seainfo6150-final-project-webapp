import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Firebase, { FirebaseContext } from './Firebase';


ReactDOM.render(
  <Router basename={/github.io/.test(window.location) ? "/seainfo6150-final-project-webapp" : ""}>
      <FirebaseContext.Provider value={new Firebase()}>
          <App />
      </FirebaseContext.Provider>,
  </Router>,
  document.getElementById("root")
);
