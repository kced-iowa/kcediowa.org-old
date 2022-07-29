import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Seperator from '../components/Seperator';
import Footer from '../components/Footer';
import './Business.css';

import { BsGlobe2 } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

function Business() {
    return (
        <div>
            <Navbar />
            <div className="business">
                <div className="business-title-container">
                    <div className="business-title">
                        <span>Business Directory</span>
                        <Seperator />
                    </div>
                    <div className="business-search">
                        <form>
                            <input className="search-input" placeholder="Search" />
                        </form>
                    </div>
                </div>
                <div className="business-content">
                    <div className="business-card">
                        <div className="business-card-image">
                            <img alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GpuviZ2dkD_w9tP198SLeQHaHa%26pid%3DApi&f=1" />
                        </div>
                        <div className="business-card-seperator"></div>
                        <div className="business-card-content">
                            <div className="business-card-title">
                                <span>Super Cool Company LLC</span>
                            </div>
                            {/* used to describe the type of business */}
                            <div className="business-card-class">
                                <span>Gas Station</span>
                            </div>
                            <div className="business-card-info">
                                <div className="business-card-about">
                                    <span>eqwerewr  qwerqwherkjkjh lkjhfasdufiasdifuhsjas dfasef asef efsdf sdf asdfasdfk </span>
                                </div>
                                <div className="business-card-icons">
                                    <a href="https://facebook.com">
                                        <span><AiFillFacebook /></span>
                                    </a>
                                    <a href="https://instagram.com">
                                        <span><AiFillInstagram /></span>
                                    </a>
                                    <a href="https://sigourney.com">
                                        <span><BsGlobe2 /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="business-card-button">
                            <Link to="/">
                                <span>Learn More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Business;