import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ContactUs = () => {
  return (
    <section
      className="my-24 py-12 text-center"
      style={{ background: `url(${appointment})` }}
    >
      <div className="text-center">
        <div className="mb-6">
          <h1 className="text-secondary text-xl">Contact US</h1>
          <h1 className="text-white text-3xl">Stay Contacted with Us</h1>
        </div>
        <form className=" ">
          <input
            className="mb-2 w-[450px] rounded py-2"
            type="email"
            placeholder="Email Address"
            required
          />
          <br />
          <input
            className="mb-2 w-[450px] rounded py-2"
            type="text"
            placeholder="Subject"
            required
          />
          <br />
          <textarea
            className="mb-2 w-[450px] h-[135px] rounded py-2"
            type="text"
            placeholder="Your Massage"
            required
          />
          <br />
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
