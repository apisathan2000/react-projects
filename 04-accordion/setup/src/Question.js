import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onExpandedClick = function () {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="question">
      <header>
        <h4>{data.title}</h4>
        <button className="btn" onClick={onExpandedClick}>
          {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {isExpanded ? <p>{data.info}</p> : <></> }
    </section>
  );
};

export default Question;
