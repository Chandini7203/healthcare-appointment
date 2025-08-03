import React from "react";
import { useParams, Link } from "react-router-dom";
import doctors from "../data/doctors";

function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) return <h2 className="p-4">Doctor not found</h2>;

  return (
    <div className="p-4">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-32 h-32 rounded-full mb-4"
      />
      <h1 className="text-2xl font-bold">{doctor.name}</h1>
      <p className="mb-2">{doctor.specialization}</p>
      <p className={doctor.available ? "text-green-500" : "text-red-500"}>
        {doctor.available ? "Available" : "Not Available"}
      </p>

      <Link
        to={`/book/${doctor.id}`}
        className="mt-4 inline-block bg-green-500 text-white px-3 py-1 rounded"
      >
        Book Appointment
      </Link>
    </div>
  );
}

export default DoctorProfile;
