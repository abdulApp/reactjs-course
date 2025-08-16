import React, { useState } from "react";

const Usestate = () => {
  const counter = useState(0);
  console.log(counter);

  return (
    <section>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          // counter[1](counter[0] + 1);
          counter[1]((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
    </section>
  );
};

export default Usestate;
