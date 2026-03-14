import React from "react";

const List = ({props: people}) => {
  return (
    <div className="person">
      <img src={people.image} />

      <div className="section">
        <h4> {people.name} </h4>
        <p> {people.age} </p>
      </div>
    </div>
  );
};

export default List;
