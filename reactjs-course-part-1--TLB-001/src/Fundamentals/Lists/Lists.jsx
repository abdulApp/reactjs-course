import React from "react";

const Lists = () => {
  const numbers = [1, 2, 3, 4, 5];
  return <main>
    {numbers.map((number) => (
      <div key={Math.random()}>
        Number: {number}
      </div>
    ))}
  </main>;
};

export default Lists;
