import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const onButtonClicked = function () {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3> {people.length} Birthdays Today </h3>

        {people.map(function (person) {
          return (
            <List
              key={person.id}
              person = {person}
            />
          );
        })}

        <button type="button" onClick={onButtonClicked}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
