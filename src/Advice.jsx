import React from "react";

const Advice = ({ advice, getAdvice }) => {
  return (
    <div>
      {advice.map((add) => (
        <div className="box" key={add.id}>
          <p>#{add?.id}</p>
          <h3>{add?.advice}</h3>
        </div>
      ))}
      <div className="line"></div>
      <button onClick={getAdvice}>Click</button>
    </div>
  );
};

export default Advice;
