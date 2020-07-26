import React from "react";
import "./App.css";
import { avengerCode } from "./config/mobile";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <div className="screen">
            <input value="call for avenger" />
          </div>
          <div className="codeWrapper">
            {avengerCode.map((code) => {
              return (
                <button>
                  <h1>{code.id}</h1>
                  <h3>{code.value}</h3>
                </button>
              );
            })}
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
