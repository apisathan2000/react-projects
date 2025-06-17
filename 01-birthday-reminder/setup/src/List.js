import React from "react";

const List = (props) => {

  const {name,age,image} = props.person;
  return (
    <>
      <div className="person">
        <img src={image} alt="" srcset="" />

        <ul>
          <li>
            <h4>{name}</h4>
          </li>
          <li>
            <p>{age} years old</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default List;
