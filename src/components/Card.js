import React from "react";

import "./Card.css";

const Card = (props) => {
  const takeToUrl = () => {
    const { url } = props;
    return window.open(url, "_blank");
  };

  return (
    <div className="Card" onClick={takeToUrl} style={{ cursor: "pointer" }}>
      <img src={props.image} alt="hello-world" />
    </div>
  );
};

export default Card;
