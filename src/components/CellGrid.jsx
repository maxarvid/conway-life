import React from "react";

const CellGrid = () => {
  const grid = [];
  for (let x = 0; x < 30; x++) {
    const currentRow = [];
    for (let y = 0; y < 30; y++) {
      currentRow.push(false);
    }
    grid.push(currentRow);
  }

  return (
    <div data-cy="grid">
      {grid.map((row, rowId) => {
        return (
          <div key={rowId}>
            {row.map((cell, cellId) => {
              return <input key={cellId} type="radio" />;
            })}
          </div>    
        );
      })}
    </div>
  );
};

export default CellGrid;
