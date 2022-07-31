import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import styles from './About.module.css';

const About = () => {
    const [members, setMembers] = useState([]);
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetchMembers();
        fetchAbout();
    }, []);
    const fetchAbout = () => {
        axios
        .get('http://localhost:5000/api/about/')
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
        .get('http://localhost:5000/api/members/')
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
            <div className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <span>About Us</span>
                        <Seperator />
                    </div>
                    <div className={styles.text}>
                        {about.map((about) =>
                            <span key={about.id}>{about.content}</span>
                        )}
                    </div>
                    <div className={styles.title}>
                        <span>Members</span>
                        <Seperator />
                    </div>
                    {members.map((member) =>
                        <ul className={styles.list} key={member.id}>
                            <li>{member.name} <span> | </span>{member.occupation}</li>
                        </ul>
                    )}
                    <span className={styles.subtitle}>*non-voting members</span>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;