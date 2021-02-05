import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { Parent } from "./Parent";
import { SubComp } from "./SubComp";
import { SubComp2 } from "./SubComp2";
import { SubComp3 } from "./SubComp3";

function App() {
  const parent = <Parent isAdmin={true} />;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {parent}
        <SubComp>
          {/* <button>BTN</button> */}
          <div>
            <select>
              <option>111</option>
              <option>222</option>
            </select>
          </div>
        </SubComp>
        <SubComp2>
          {(param: number) => {
            return <h2>{param}</h2>;
          }}
        </SubComp2>
        <SubComp3
          renderMiddle={(param: number) => {
            return <h2>{param}</h2>;
          }}
          renderAfterMiddle={(param: number) => <h1>{param}</h1>}
          getSpace={() => 10}
        />
      </header>
    </div>
  );
}

export default App;
