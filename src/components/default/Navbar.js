import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar-container">
            <span>SADC</span>
            <ul class="list-none">
                <li><Link to="/">Placeholder</Link></li>
                <span> | </span>
                <li><Link to="/">Placeholder</Link></li>
                <span> | </span>
                <li><Link to="/">Placeholder</Link></li>
                <span> | </span>
                <li><Link to="/">Placeholder</Link></li>
                <span> | </span>
                <li><Link to="/">Placeholder</Link></li>
                <span> | </span>
                <li><Link to="/">Placeholder</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;