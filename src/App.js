import "./App.css";
import Navbar from "./Components/Navbar";
import React, { Component } from "react";
import News from "./Components/News";

export default class App extends Component {
  c = "john";
  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    );
  }
}
