import React from "react";

const InfoCard = ({ img, cardTaitle, bgClass }) => {
  return (
    <div
      className={`card lg:card-side bg-base-100 shadow-xl text-white ${bgClass}`}
    >
      <figure className="pl-7 pt-5">
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTaitle}</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
