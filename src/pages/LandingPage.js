import React, { useState } from "react";
import { doctors } from "../data/doctors";

const LandingPage = () => {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">🏥 HealthCare</h1>
        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
          Book Appointment
        </button>
      </nav>

      {/* Header */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Find Your Doctor</h2>
        <p className="text-gray-500">Search and book appointments instantly</p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search doctor or specialization..."
          className="border rounded-lg p-2 w-1/2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {filteredDoctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-xl transition-shadow"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-24 h-24 mx-auto rounded-full mb-3"
            />
            <h3 className="font-bold text-lg">{doc.name}</h3>
            <p className="text-gray-600">{doc.specialization}</p>
            <p className={doc.available ? "text-green-500" : "text-red-500"}>
              {doc.available ? "Available" : "Not Available"}
            </p>
            <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
