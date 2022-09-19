import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import Image from 'next/image';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import styles from './Business.module.css';

import { BsGlobe2 } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

function Business() {
    const [business, setBusiness] = useState([]);
    useEffect(() => {
        fetchBusiness();
    }, []);
    const fetchBusiness = () => {
        axios
        .get('https://api.horsaen.com/business')
        .then((res) => {
            setBusiness(res.data);
        })
        .catch((err) => {
            // spits out an annoying code, will remain removed unless needed
            // console.log(err);
        })
    }
    return (
        <div>
            <Head>
                <title>Business Directory | SADC</title>
            </Head>
            <Navbar />
            <div className={styles.business}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>
                            <span>Business Directory</span>
                            <Seperator />
                        </div>
                        <div className={styles.search}>
                            <form>
                                <input className={styles.searchInput} placeholder="Search" />
                            </form>
                        </div>
                    </div>
                    <div className={styles.content}>
                    {business.map((business) =>
                        <div className={styles.card} key={business.id}>
                            <div className={styles.cardImage}>
                                <Image alt="business picture" src={'/cdn/businesses/' + business.coverimg} layout="fill"/>
                            </div>
                            <div className={styles.cardSeperator}></div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    <span>{business.name}</span>
                                </div>
                                <div className={styles.cardClass}>
                                    <span>{business.type}</span>
                                </div>
                                <div className={styles.cardInfo}>
                                    <div className={styles.cardAbout}>
                                        <span>eqwerewr  qwerqwherkjkjh lkjhfasdufiasdifuhsjas dfasef asef efsdf sdf asdfasdfk</span>
                                    </div>
                                    <div className={styles.cardIcons}>
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
                            <Link href={"/business/" + business._id}>
                                <div className={styles.cardButton}>
                                    <a><span>Learn More</span></a>
                                </div>
                            </Link>
                        </div>
                    )}
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Business;