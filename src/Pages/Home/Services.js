import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Services = () => {
  return (
    <div className="my-28">
      <div className="text-center">
        <h1 className="text-secondary text-xl uppercase ">Our Service</h1>
        <h2 className="text-4xl">Services we provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Service cardTitle={"Fluoride Treatment"} img={fluoride}></Service>
        <Service cardTitle={"Cavity Filling"} img={cavity}></Service>
        <Service cardTitle={"Teeth Whitening"} img={whitening}></Service>
      </div>
      <div className="md:flex justify-center items-center bg-base-100 shadow-xl lg:mx-32 lg:mt-20">
        <figure className="md:flex-1 ml-8">
          <img
            className="rounded"
            style={{ height: "400px" }}
            src={treatment}
            alt="Movie"
          />
        </figure>
        <div className="card-body md:flex-1 items-start">
          <h2 className="card-title text-4xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="my-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className="card-actions justify-end">
            <PrimaryButton>get started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
