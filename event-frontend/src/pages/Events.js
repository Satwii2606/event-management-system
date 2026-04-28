import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL;

function Events() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Fetch events
  useEffect(() => {
    fetch(`${BASE_URL}/events`)
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.log(err));
  }, []);

  // Filter + Search
  const filteredEvents = events.filter(event =>
    (filter === "All" || event.category === filter) &&
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">

      {/* 🔥 Banner */}
      <div
        style={{
          background: "linear-gradient(to right, #ff416c, #ff4b2b)",
          color: "white",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center"
        }}
      >
        <h2>Explore Events 🎉</h2>
        <p>Tech • Music • Comedy • Workshops</p>
      </div>

      {/* 🔍 Search */}
      <input
        type="text"
        className="form-control mt-4"
        placeholder="Search events..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🎯 Category Filter */}
      <div className="text-center mt-3">
        {["All", "Tech", "Music", "Comedy"].map(cat => (
          <button
            key={cat}
            className={`btn m-2 ${
              filter === cat ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🎟️ Events Grid */}
      <div className="row mt-4">
        {filteredEvents.map(event => (
          <div className="col-md-4" key={event.id}>
            <div className="card shadow mb-4">

              <img
                src={`https://source.unsplash.com/400x250/?${event.category}`}
                className="card-img-top"
                alt="event"
              />

              <div className="card-body">
                <h5>{event.name}</h5>
                <p className="text-muted">{event.venue}</p>

                <p>
                  📅 {event.date} <br />
                  ⏰ {event.time}
                </p>

                <button
                  className="btn btn-primary w-100 mb-2"
                  onClick={() => navigate(`/event/${event.id}`)}
                >
                  View Details
                </button>

                <button
                  className="btn btn-success w-100"
                  onClick={() => navigate("/tickets")}
                >
                  Book Ticket
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Events;