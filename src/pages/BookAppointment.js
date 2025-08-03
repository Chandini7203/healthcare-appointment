import React, { useState } from "react";
import { useParams } from "react-router-dom";
import doctors from "../data/doctors";

function BookAppointment() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));
  const [form, setForm] = useState({ name: "", email: "", datetime: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!doctor) return <h2 className="p-4">Doctor not found</h2>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book Appointment with {doctor.name}</h1>

      {submitted ? (
        <p className="text-green-600 font-semibold">
          Appointment Confirmed for {form.name} at {form.datetime}!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
          <input
            name="datetime"
            type="datetime-local"
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Confirm Appointment
          </button>
        </form>
      )}
    </div>
  );
}

export default BookAppointment;
