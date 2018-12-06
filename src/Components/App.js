import React, { Component } from "react";
import Router from "Components/Router";
import Header from "Components/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

export default App;
