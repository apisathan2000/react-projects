import React from "react";
import Tour from "./Tour";
const Tours = ({ toursData, onNotInterested  , onRefresh}) => {
  return (
    <section>
      <div className="title">
        <h2> {toursData.length == 0 ? `No Tours Left` : `Our Tours`}</h2>

        {toursData.length != 0 ? (
          <div className="underline"></div>
        ) : (
          <button  onClick={onRefresh} className="btn">Refresh</button>
        )}
      </div>

      <div>
        {toursData.map((tour) => {
          return (
            <Tour
              key={tour.id}
              tour={{ ...tour }}
              onNotInterested={onNotInterested}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
