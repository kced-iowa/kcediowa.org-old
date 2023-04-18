import Head from 'next/head';
import Image from 'next/image';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import styles from './Orgs.module.css';

import { AiFillPhone } from 'react-icons/ai';
import {  FaGlobe, FaFacebookSquare } from 'react-icons/fa';
function Orgs() {
    return (
        <div>
            <Head>
                <title>Clubs & Organizations | KCED</title>
            </Head>
            <Navbar />
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <span>Clubs & Organizations</span>
                        <Seperator />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <Image alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GpuviZ2dkD_w9tP198SLeQHaHa%26pid%3DApi&f=1" layout="fill" />
                        </div>
                        <div className={styles.cardSeperator} />
                        <div className={styles.cardContent}>
                            <div className={styles.cardTitle}>
                                <span>Chinese Language Learning</span>
                            </div>
                            <div className={styles.cardDesc}>
                                <span>Learn Chinese with experienced teachers.</span>
                            </div>
                            <div className={styles.cardInfo}>
                                <span><AiFillPhone /> <a href="#">Phone</a></span>
                                <span><FaGlobe /> <a href="#">Website</a></span>
                                <span><FaFacebookSquare /> <a href="#">Facebook</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Orgs;