import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/events`)
      .then(res => res.json())
      .then(data => {
        const selected = data.find(e => e.id === parseInt(id));
        setEvent(selected);
      });
  }, [id]);

  if (!event) return <h3>Loading...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{event.name}</h2>
      <p><b>Category:</b> {event.category}</p>
      <p><b>Venue:</b> {event.venue}</p>
      <p><b>Date:</b> {event.date}</p>
      <p><b>Time:</b> {event.time}</p>
    </div>
  );
}

export default EventDetails;