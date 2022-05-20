import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center mt-40"
    >
      <div className="flex-1 lg:block hidden">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="md:flex-1 items-center p-5 ">
        <h1 className="text-secondary text-xl">Appointment</h1>
        <h2 className="text-white text-4xl my-6">Make Appointment Today</h2>
        <p className="text-white mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>get started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
