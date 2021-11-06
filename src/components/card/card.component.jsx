import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monter"
      src={`https://robohash.org/${props.monstar.id}?set=set2&size=180x180`}
    />
    <h2 key={props.monstar.id}>{props.monstar.name}</h2>
    <p>{props.monstar.email}</p>
  </div>
);
