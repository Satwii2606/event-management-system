import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL;

function Home() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  // 🎯 Image mapping based on category
  const imageMap = {
    Tech: "https://mir-s3-cdn-cf.behance.net/projects/404/1e114b227914605.Y3JvcCw5NjkxLDc1ODAsMCwxMzY3.jpg",
    Music: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHqG0x9lQ_WdJ_RMNjifTi424pWhSQ0n8dQ&s",
    Comedy: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmY6Al8ssVM7PsGNcfmcdGpTYt027oY-qInA&s",
    Workshop: ""
  };

  useEffect(() => {
    fetch(`${BASE_URL}/events`)
      .then(res => res.json())
      .then(data => setEvents(data.slice(0, 3))) // only 3 featured
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-4">

      {/* 🔥 HERO SECTION */}
      <div
        style={{
          background: "linear-gradient(to right, #1d2671, #c33764)",
          color: "white",
          padding: "50px",
          borderRadius: "12px",
          textAlign: "center"
        }}
      >
        <h1>Book Your Favorite Events 🎉</h1>
        <p>Tech • Music • Comedy • Workshops</p>
      </div>

      {/* 🎯 FEATURED EVENTS */}
      <h3 className="mt-5">Featured Events</h3>

      <div className="row mt-3">
        {events.map(event => (
          <div className="col-md-4" key={event.id}>
            <div className="card shadow mb-4">

              {/* 🖼️ Dynamic Image */}
              <img
                src={
                  imageMap[event.category] ||
                  "https://source.unsplash.com/400x300/?event"
                }
                className="card-img-top"
                alt={event.name}
              />

              <div className="card-body">
                <h5>{event.name}</h5>
                <p>{event.venue}</p>

                <button
                  className="btn btn-dark w-100"
                  onClick={() => navigate(`/event/${event.id}`)}
                >
                  Explore
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;