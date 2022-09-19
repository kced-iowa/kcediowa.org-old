import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import styles from './About.module.css';
import { BsCode } from 'react-icons/bs';

const About = () => {
    const [members, setMembers] = useState([]);
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetchMembers();
        fetchAbout();
    }, []);
    const fetchAbout = () => {
        axios
        .get('https://api.horsaen.com/about')
        .then((res) => {
            setAbout(res.data);
        })
        .catch((err) => {
            // spits out an annoying code, will remain removed unless needed
            // console.log(err);
        })
    };
    const fetchMembers = () => {
        axios
        .get('https://api.horsaen.com/members')
        .then((res) => {
            setMembers(res.data);
        })
        .catch((err) => {
            // spits out an annoying code, will remain removed unless needed
            // console.log(err);
        })
    };
    return (
        <div>
            <Head>
                <title>About | SADC</title>
            </Head>
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
                                <Link href={'/about/' + member._id}>
                                    <div className={styles.memberSidebar}>{'<'}</div>
                                </Link>
                                <div className={styles.memberImage}>
                                    <Image alt="" src={'/cdn/members/' + member.image} layout="fill" />
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