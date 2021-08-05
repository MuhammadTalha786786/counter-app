import React from "react";
import Counters from "./Components/Counters";
function App() {
  return (
    <>
      <h1
        style={{ fontFamily: "Open Sans" }}
        className="justify-content-center text-center text-secondary"
      >
        Counters App
      </h1>
      <Counters />
    </>
  );
}

export default App;
