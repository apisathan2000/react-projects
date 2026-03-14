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
      <div className="container">
        <h3> {people.length} Birthday's today</h3>

        {people.map((person) => {
          return (
            <List
              key={person.id}
              props={{
                image: person.image,
                name: person.name,
                age: person.age,
              }}
            />
          );
        })}

        <button onClick={onButtonClicked}>Clear All</button>
      </div>
    </main>
  );
}

export default App;
