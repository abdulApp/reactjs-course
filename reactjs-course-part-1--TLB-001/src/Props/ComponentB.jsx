import React from "react";
import { Data } from "../ContextAPI/Context";

const ComponentB = () => {
  return (
    <Data.Consumer>
      {(name) => {
        return <h1>Hello {name}, Welcome to Context API</h1>;
      }}
    </Data.Consumer>
  );
};

export default ComponentB;
