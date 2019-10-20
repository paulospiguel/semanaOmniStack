import React from "react";
import "./App.css";
import Routes from "./routes";
import logo from "./assets/logoMeet.svg";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="WorkPlaceFy" />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
