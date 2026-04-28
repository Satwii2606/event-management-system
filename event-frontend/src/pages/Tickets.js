import { useState } from "react";
import dotenv from "dotenv";
dotenv.config();

function Tickets() {
  const [name, setName] = useState("");
  const [seats, setSeats] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ticket = { name, seats };

    await fetch(`${import.meta.env.VITE_API_URL}/tickets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ticket)
    });

    alert("Ticket booked successfully!");
    setName("");
    setSeats("");
  };

  return (
    <div className="container mt-4">
      <h2>Book Ticket 🎟️</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <input
          type="text"
          placeholder="Your Name"
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Seats"
          className="form-control mb-3"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          required
        />

        <button className="btn btn-success">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Tickets;