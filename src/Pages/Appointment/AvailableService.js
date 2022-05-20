import React from "react";

const AvailableService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">try another day</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"}
        </p>
        <div className="card-actions justify-center mt-3">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            className="btn btn-sm btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary "
          >
            book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableService;
