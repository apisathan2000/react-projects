import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>

        <section>
          {data.map((item) => {
            return <SingleQuestion data={{ ...item }} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
