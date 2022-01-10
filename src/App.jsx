import React from "react";
import CellGrid from "./components/CellGrid";


const App = () => {
  return (
    <div>
    <h1 data-cy="title">
     Conway's Game of Life
    </h1>
    <CellGrid />
    </div>
  );
};

export default App;
