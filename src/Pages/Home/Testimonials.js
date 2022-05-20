import React from "react";
import Review from "./Review";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Kamal Uddin",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      location: "Dhaka",
    },
    {
      _id: 2,
      name: "Jamal Uddin ",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      location: "Barisal",
    },
    {
      _id: 3,
      name: "Kaniz Fatema",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      location: "Khulna",
    },
  ];
  return (
    <section>
      <div className="flex justify-between m-12">
        <div>
          <h1 className="text-secondary text-xl text-bold">Testimonial</h1>
          <h2>What Our Patients Says</h2>
        </div>
        <div>
          <img className="lg:w-48 w-24" src={quote} alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
