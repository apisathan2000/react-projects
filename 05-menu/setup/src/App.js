import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [food, setFood] = useState(items);

  const onFilterClick = function (category) {
    setFood((prevList) => {
      const newList = items.filter((item) => {
        if (category.toLowerCase() === "all") return item;
        return item.category.toLowerCase() === category.toLowerCase();
      });

      return newList;
    });
  };

  return (
    <main className="menu">
      <section className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </section>

      <Categories onFilterClick={onFilterClick} />
      <div className="section-center">
        {food.map((item) => {
          return (
            <Menu
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              category={item.category}
              desc={item.desc}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
