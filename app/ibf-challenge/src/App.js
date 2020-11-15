import React, { Component } from "react";
import Router from "./Router/Router";
import HttpsRedirect from 'react-https-redirect';

class App extends Component {
  render() {
    return (
        <div>
          <HttpsRedirect>
            <Router />
          </HttpsRedirect>
        </div>
    );
  }
}

export default App;

