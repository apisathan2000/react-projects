import React from "react";

const List = ({ name, age, image }) => {
  return (
    <div className="person">
      <div>
        <img src={image}></img>
      </div>

      <div>
        <h4>{name}</h4>
        <p>{age} Years</p>
      </div>
    </div>
  );
};

export default List;
