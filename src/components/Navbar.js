import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar-container">
            <Link to="/">SADC</Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <span> | </span>
                <li><Link to="/about">About</Link></li>
                <span> | </span>
                <li><Link to="/business">Business</Link></li>
                <span> | </span>
                <li><Link to="/events">Events</Link></li>
                <span> | </span>
                <li><Link to="/news">News</Link></li>
                <span> | </span>
                <li><Link to="/orgs">Clubs & Organizations</Link></li>
                <span> | </span>
                <li><Link to="/visit">Visit</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;