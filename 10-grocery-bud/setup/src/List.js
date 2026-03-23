import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ grocery, onItemRemoved, onClearAll, onItemEdited }) => {
  return (
    <div className="grocery-container">
      {grocery.map((item, index) => {
        return (
          <article key={index} className="grocery-item">
            <p className="title">{item}</p>

            <div className="btn-container">
              <button
                className="edit-btn"
                type="button"
                onClick={() => {
                  console.log(`Index passed is ${index}`);
                  onItemEdited(index);
                }}
              >
                <FaEdit />
              </button>
              <button
                className="delete-btn"
                type="button"
                onClick={() => {
                  console.log(`Index passed is ${index}`);
                  onItemRemoved(index);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}

      <button className="clear-btn" onClick={onClearAll}>Clear items</button>
    </div>
  );
};

export default List;
