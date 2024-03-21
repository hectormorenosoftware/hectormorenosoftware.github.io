import React from "react";

import "./Card.css";

const Card = (props) => (
  <div className="Card">
    <img src={props.image} alt="hello-world" />
  </div>
);

export default Card;
