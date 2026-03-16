import React, { useState } from "react";

const Tour = ({ tour, onNotInterested }) => {
  const [isExpanded, setExpand] = useState(false);

  const onExpandButtonClick = function () {
    setExpand(!isExpanded);
  };

  return (
    <article className="single-tour">
      <img src={tour.image} className="single-tour-img" />

      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">$ {tour.price}</h4>
        </div>

        <p>
          {isExpanded ? tour.info : `${tour.info.substring(0, 200)}...`}{" "}
          <button onClick={onExpandButtonClick}>
            {isExpanded ? `Show Less` : `Read More`}
          </button>
        </p>

        <button onClick={() => onNotInterested(tour.id)} className="delete-btn">
          Not Interested
        </button>
      </footer>
    </article>
  );
};

// ${info.substring(0, 200)}

export default Tour;
