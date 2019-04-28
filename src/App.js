import React from "react";
import "./App.css";

import BuildFromJSON from "./ui/BuildFromJson";

import Container from "./ui/Container";
import ConvertToJson from "./ui/ConvertToJson";

import appState from "./appState";

function App() {
  return (
    <div className="root">
      <Container current="root" store={appState} />
      <ConvertToJson store={appState} />
      <BuildFromJSON store={appState} />
    </div>
  );
}

export default App;
