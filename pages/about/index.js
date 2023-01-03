import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import styles from './About.module.css';
import { BsCode } from 'react-icons/bs';
const api = process.env.NEXT_PUBLIC_APIBASE
const About = () => {
    const [members, setMembers] = useState([]);
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetchMembers();
        fetchAbout();
    }, []);
    const fetchAbout = () => {
        axios
        .get(api + '/about')
        .then((res) => {
            console.log(res.data);
            setAbout(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    };
    const fetchMembers = () => {
        axios
        .get(api + '/members')
        .then((res) => {
            console.log(res.data);
            setMembers(res.data);
        })
        .catch((err) => {
            console.log(err)
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
                    <div className={styles.sidebar}>
                        <ul>
                            <li><AnchorLink href='#about'>About Us</AnchorLink></li>
                            <li><AnchorLink href='#members'>SADC Board Members</AnchorLink></li>
                            <li><AnchorLink href='#loan'>Revolving Loan Fund</AnchorLink></li>
                            <li><AnchorLink href='#committees'>Committees</AnchorLink></li>
                            <li><AnchorLink href='#history'>History of SADC</AnchorLink></li>
                        </ul>
                    </div>
                    <div>
                        <div className={styles.title} id='about'>
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
                        <div className={styles.list} id='members'>
                            {members.map((member) =>
                                <div className={styles.member} key={member.id}>
                                    <Link href={'/about/' + member._id}>
                                        <div className={styles.memberSidebar}>{'<'}</div>
                                    </Link>
                                    <div className={styles.memberImage}>
                                        <Image alt="" src={api + '/cdn/members/' + member.image} layout="fill" />
                                    </div>
                                    <div className={styles.memberInfo}>
                                        <span>{member.name}</span>
                                        <span>{member.occupation}</span>
                                        <span>Since | {member.join}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    <span className={styles.subtitle}>*non-voting members</span>
                    </div>
                    <div className={styles.title} id='loan'>
                        <span>Revolving Loan Fund</span>
                        <Seperator />
                    </div>
                    <div>
                        <span>revolving loan fund // WIP</span>
                    </div>
                    <div className={styles.title} id='committees'>
                        <span>Committees</span>
                        <Seperator />
                    </div>
                    <div>
                        <span>committees // WIP</span>
                    </div>
                    <div className={styles.title} id='history'>
                        <span>History of SADC</span>
                        <Seperator />
                    </div>
                    <div>
                        <span>history of sadc // WIP</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;