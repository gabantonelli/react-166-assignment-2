import React from "react";

const charComponent = props => {
  let style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  return (
    <li style={style} key={props.id} onClick={props.click}>
      {props.letter}
    </li>
  );
};

export default charComponent;
