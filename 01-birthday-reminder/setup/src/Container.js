import List from "./List";
import data from "./data";
import { useState } from "react";

const Container = function () {
  const [people, setPeople] = useState(data);

  function clearList() {
    setPeople([]);
  }

  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>

        {people.map((item) => (
          <List
            key={item.id}
            name={item.name}
            age={item.age}
            image={item.image}
          />
        ))}

        <button onClick={() => clearList()}>Clear All</button>
      </div>
    </main>
  );
};

export default Container;
