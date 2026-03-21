import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [index, setIndex] = useState(0);

  const checkNumber = function (i) {
    return i >= data.length ? 0 : i < 0 ? data.length - 1 : i;
  };

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prevIndex) => checkNumber(prevIndex + 1));
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const onPrev = function () {
    setIndex((prevIndex) => {
      return checkNumber(prevIndex - 1);
    });
  };

  const onNext = function () {
    setIndex((prevIndex) => {
      return checkNumber(prevIndex + 1);
    });
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>

      <div className="section-center">
        {data.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (personIndex === checkNumber(index - 1)) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img className="person-img" src={image} alt={name} />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button className="prev" onClick={onPrev}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={onNext}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
