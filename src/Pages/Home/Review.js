import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>{review.review}</p>
        <div className="flex items-center">
          <div>
            <img
              className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-6 mt-6"
              src={review.img}
              alt=""
            />
          </div>
          <div>
            <h3>{review.name}</h3>
            <h4>{review.location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
