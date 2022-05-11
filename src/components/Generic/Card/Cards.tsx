import React from "react";
import Card from "./Card";
import { CardData } from "./CardData";
import "./Card.css"
const Cards = () => {
  return (
    <div className="cards-container">
      {CardData.map((CardDetail) => (
        <Card key={CardDetail.id} CardDetail={CardDetail} />
      ))}
    </div>
  );
};

export default Cards;
