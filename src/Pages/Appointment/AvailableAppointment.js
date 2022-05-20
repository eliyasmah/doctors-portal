import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import AvailableService from "./AvailableService";
import BookingModal from "./BookingModal";
import Loading from "./../Shared/Loading";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);
  return (
    <div>
      <h4 className="text-center text-xl text-secondary">
        Available Services on {format(date, "PP")}.
      </h4>
      <h4 className="text-center">Please select a service</h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {services?.map((service) => (
          <AvailableService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AvailableService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
