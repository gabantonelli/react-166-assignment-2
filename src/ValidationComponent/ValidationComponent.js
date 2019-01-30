import React from "react";

const validationComponent = props => {
  let content = null;

  if (props.length < 3) {
    content = <p>Text too short</p>;
  } else if (props.length > 10) {
    content = <p>Text is too long</p>;
  }

  return <div>{content}</div>;
};

export default validationComponent;
