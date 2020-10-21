import React from 'react';
import ExpenseTracer from "./ExpenseTracker"
import GlobalComponent from "./GlobalComponent"

function App() {
  return (
    <div className="App">
      <GlobalComponent >
      <ExpenseTracer/>
      </GlobalComponent>
    </div>
  );
}

export default App;
