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

const api = process.env.NEXT_PUBLIC_APIBASE

function Business() {
    const [business, setBusiness] = useState([]);
    useEffect(() => {
        fetchBusiness();
    }, []);
    const fetchBusiness = () => {
        axios
        .get(api + '/business')
        .then((res) => {
            console.log(res.data);
            setBusiness(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const [searchQuery, setSearchQuery] = useState('');
    const [keywordQuery, setKeywordQuery] = useState('');
    return (
        <div>
            <Head>
                <title>Business Directory | KCED</title>
            </Head>
            <Navbar />
            <div className={styles.business}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>
                            <span>Business Directory</span>
                            <Seperator />
                            <span>Want changes made to your business? <a href="https://forms.gle/9sMKJ8txwEmbYWTX6">Submit them here.</a></span>
                        </div>
                        <div className={styles.search}>
                            <div>
                                <span>Name Search</span>
                                <form>
                                    <input className={styles.searchInput} placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
                                </form>
                            </div>
                            <div>
                                <span>Keyword Search</span>
                                <form>
                                    <input className={styles.searchInput} placeholder="Search" onChange={(e) => setKeywordQuery(e.target.value)} />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                    {business.filter((business) => {
                        return(
                            (searchQuery.toLowerCase() === '' || 
                            business.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            business.type.toLowerCase().includes(searchQuery.toLowerCase())) &&

                            (keywordQuery.toLowerCase() === '' || 
                            business.keywords.some(keyword => keyword.toLowerCase().includes(keywordQuery.toLowerCase())))
                        )
                    }).map((business) =>
                        <div key={business.id} className={styles.card}>
                            <div className={styles.cardImage}>
                                <Image alt="business picture" src={api + '/cdn/business/' + business.coverimg} className={styles.test} layout="fill"/>
                            </div>
                            <div className={styles.cardSeperator}></div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardTitle}>
                                        <span>{business.name}</span>
                                    </div>
                                    <div className={styles.cardClass}>
                                        <span>{business.type}</span>
                                    </div>
                                </div>
                                <div className={styles.cardAboutContainer}>
                                    <span className={styles.cardAbout}>{business.bio}</span>
                                </div>
                            </div>
                            <div className={styles.buttonContainer}>
                                <Link href={"/business/" + business._id}>
                                    <div className={styles.button}>
                                        <span>Learn More</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Business;