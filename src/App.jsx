import React from "react";
import GridComponent from "./components/GridComponent";
import FooterComponent from "./components/FooterComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Responsive React Page</h1>
      </header>
      <h1>Wildlife Wonders: A Glimpse into Nature's Beauty</h1>
      <main>
        <GridComponent />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
