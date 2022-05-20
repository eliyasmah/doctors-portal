import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <section>
      <div></div>
      <div>
        <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
        <AvailableAppointment date={date}></AvailableAppointment>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Appointment;
