import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const previousPerson = function () {
    setIndex((prevIndex) => {
      return prevIndex === 0 ? people.length - 1 : prevIndex - 1;
    });
  };

  const nextPerson = function () {
    setIndex((prevIndex) => {
      return prevIndex === people.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const randomPerson = function () {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = (index + 1) % people.length;
    }
    setIndex(randomNumber);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={people[index].image} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{people[index].name}</h4>
      <p className="job">{people[index].job}</p>
      <p className="info">{people[index].text}</p>

      <div className="">
        <button className="prev-btn" onClick={previousPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
