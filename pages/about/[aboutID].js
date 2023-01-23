import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './AboutPage.module.css';

import { MdEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';

const api = process.env.NEXT_PUBLIC_APIBASE

const test = [
    {
        icon: <MdEmail />
    },
    {
        icon: <AiFillPhone />
    },
    {
        icon: <FaGlobe />
    }
]

function AboutPage() {
    
    const router = useRouter()
    const { aboutID } = router.query

    const [about, setAbout] = useState([]);
    useEffect(() => {
        const fetchAbout = () => {
            axios
            .get(api + '/members/' + aboutID)
            .then((res) => {
                setAbout(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        fetchAbout()
    }, [aboutID])
    return (
        <div className={styles.page}>
            <div>
                <Link href='/about'>
                    <a>{'< Return'}</a>
                </Link>
            </div>
            <div className={styles.content}>
                <div className={styles.titleContainer}>
                    <div className={styles.sidebar} />
                    <div className={styles.imageContainer}>
                        <Image alt="" src={api + '/cdn/members/' + about.image} layout="fill"/>
                    </div>
                    <div className={styles.titleTextContainer}>
                        <span className={styles.title}>{about.name}</span>
                        <span className={styles.titlePosition}>{about.occupation}</span>
                        <span className={styles.titleDate}>Since | {about.join}</span>
                    </div>
                </div>
                <div className={styles.contactContainer}>
                    <a href="mailto:"><MdEmail />Email</a>
                    <a href="tel:6416222326"><AiFillPhone />Phone</a>
                    <a href="https://www.caseys.com/general-store/ia-sigourney/100-e-jackson-st/3396?y_source=1_MTcyMDU1MjItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"><FaGlobe />Website</a>
                </div>
                <div className={styles.aboutText}>
                    <span>{about.bio}</span>
                    {test.map((data) => {
                        return (
                            <div key=''>
                                <span onClick={()=>console.log(data.icon)}>test</span>
                                {data.icon}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AboutPage;