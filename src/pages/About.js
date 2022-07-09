import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

const About = ()  => {
    const [members, setMembers] = useState([]);
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetchMembers();
        fetchAbout();
    }, []);
    const fetchAbout = () => {
        axios
        .get('api/about/')
        .then((res) => {
            console.log(res);
            setAbout(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    };
    const fetchMembers = () => {
        axios
        .get('api/members/')
        .then((res) => {
            console.log(res);
            setMembers(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    };
    return (
        <div>
            <Navbar />
            <div className="about">
                <div className="about-container">
                    <div className="about-title">
                        <span>About Us</span>
                        <div className="seperator" />
                    </div>
                    <div className="about-text">
                        {about.map((about) =>
                            <span>{about.content}</span>
                        )}
                    </div>
                    <div className="about-title">
                        <span>Members</span>
                        <div className="seperator" />
                    </div>
                    {members.map((member) =>
                        <ul className="member-list" key={member.id}>
                            <li>{member.name} <span> | </span>{member.occupation}</li>
                        </ul>
                    )}
                    <span className="subtitle">*non-voting members</span>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;