import React from 'react';
import { AiFillFacebook } from 'react-icons/ai'
import './Footer.css';

function Footer(){
    return (
        <div className="footer-container">
            <div className="footer-content"> 
                <span>Made with {'<3'} by <a href="https://github.com/prjctmatka/" target="_blank" rel="noopener noreferrer">The Matka Project</a></span>
                <br />
                <span><a href="https://github.com/prjctmatka/sigourney.com" target="_blank" rel="noopener noreferrer">Contribute to this website</a></span>
            </div>
            <div className="footer-content">
                <span>© 2022 Sigourney Area Development Corporation</span>
                <span>112 East Washington Street • Sigourney, IA 52591-1445 • 641.622.2288</span>
                <a href="mailto:sadc@sigourney.com">sadc@sigourney.com</a>
            </div>
            <div className="footer-content">
                <a href="https://partners.sigourney.com/">For partners</a>
                <a href="https://admin.sigourney.com">Administration</a>
            </div>
            <div className="footer-content">
                <a className="facebook" href="https://www.facebook.com/Sigourney-Area-Development-Corp-1480675282182185"><AiFillFacebook /></a>
            </div>
        </div>
    );
}

export default Footer;