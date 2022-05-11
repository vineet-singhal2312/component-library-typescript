import React from "react";
import "./Card.css";
const Card = ({ CardDetail }) => {
  console.log({ CardDetail });
  return (
    <div className="card">
      <img
        src={CardDetail.imgURL}
        className="card-hero-card-img-top"
        alt="..."
      />
      <div className={`card-body text-start ${CardDetail.bgColorClass}`}>
        <h2 className="card-title">{CardDetail.heading}</h2>
        <p className="card-text mt-3">{CardDetail.subHeading}</p>
        <div
          className={`card-hero-card-badge fw-bolder rounded-pill text-center ${CardDetail.colorClass}`}
        >
          {CardDetail.badge}
        </div>
      </div>
    </div>
  );
};

export default Card;
