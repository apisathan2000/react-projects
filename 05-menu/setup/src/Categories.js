import React from "react";

const Categories = ({ onFilterClick }) => {
  return (
    <div className="btn-container">
      <button
        className="filter-btn"
        onClick={() => {
          onFilterClick("all");
        }}
      >
        All
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          onFilterClick("breakfast");
        }}
      >
        Breakfast
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          onFilterClick("lunch");
        }}
      >
        Lunch
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          onFilterClick("shakes");
        }}
      >
        Shakes
      </button>
    </div>
  );
};

export default Categories;
