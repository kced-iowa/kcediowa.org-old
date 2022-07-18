import React from 'react';
import './NotFound404.css';

function NotFound(){
    return (
        <div className="not-found-container">
            <div className="top">
                <span>404</span>
            </div>
            <div className="bottom">
                <span>Oh no, it looks like the site you're trying to reach is unavailable :(</span>
            </div>
        </div>
    );
}

export default NotFound;