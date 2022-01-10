import React from "react";
import AboutButton from "./components/AboutButton";
import CellGrid from "./components/CellGrid";

const App = () => {
  return (
    <div>
    <h1 data-cy="title">
     Conway's Game of Life
    </h1>
    <AboutButton />
    <CellGrid />
    </div>
  );
};

export default App;
