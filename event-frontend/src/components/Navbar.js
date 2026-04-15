import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary p-3">
      <h4 className="text-white">Event Manager</h4>

      <div>
        <Link to="/" className="text-white me-3">Home</Link>
        <Link to="/events" className="text-white me-3">Events</Link>
        <Link to="/tickets" className="text-white">Tickets</Link>
      </div>
    </nav>
  );
}

export default Navbar;