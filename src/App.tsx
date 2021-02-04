import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { Parent } from "./Parent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Parent isAdmin={true} />
      </header>
    </div>
  );
}

export default App;
