import { useState, useEffect } from 'react';
import Image from 'next/image';
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
                    <div className={styles.list}>
                        {members.map((member) =>
                            <div className={styles.member} key={member.id}>
                                <div className={styles.memberSidebar}></div>
                                <div className={styles.memberImage}>
                                    <Image alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GpuviZ2dkD_w9tP198SLeQHaHa%26pid%3DApi&f=1" layout="fill" />
                                </div>
                                <div className={styles.memberInfo}>
                                    <span>{member.name}</span>
                                    <span>{member.occupation}</span>
                                    <span>Since | 2015</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <span className={styles.subtitle}>*non-voting members</span>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;