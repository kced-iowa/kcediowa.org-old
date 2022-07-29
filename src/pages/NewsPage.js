import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Seperator from '../components/Seperator';
import Footer from '../components/Footer';
import './NewsPage.css';

function NewsPage() {
    return (
        <div>
            <div className="news-page">
                <Link to='/news'>
                    <span>{"< Return"}</span> 
                </Link>
                <div className="news-top">
                    <div className="heading">
                        <span>SADC to replace CFO</span>
                    </div>
                    <Seperator />
                    <div className="date-auth">
                        <span>SADC</span><span> | </span><span>Jan 1, 1970</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewsPage;