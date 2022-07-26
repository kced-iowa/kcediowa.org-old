import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound404.css';

function NotFound(){
    return (
        <div className="not-found-container">
            <div className="top">
                <span>404</span>
            </div>
            <div className="bottom">
                <span>Oh no, it looks like the site you're trying to reach is unavailable :(</span>
                <div className="return-home">
                    <Link to="/">
                        <span>Go home instead? ^w^</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;