import Head from 'next/head';
import Link from 'next/link';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import styles from './Events.module.css';

import { BsFillPinMapFill } from 'react-icons/bs'

function Events() {
    return (
        <div>
            <Head>
                <title>Events | SADC</title>
            </Head>
            <Navbar />
            <div className={styles.page}>
                <div className={styles.title}>
                    <span>Events</span>
                    <Seperator />
                </div>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.type}>
                                <span>Farmer`s Market</span>
                            </div>
                            <div className={styles.date}>
                                <span className={styles.int}>24</span>
                                <span>SEPT</span>
                                <span>9:40 - 8:60</span>
                            </div>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.desc}>
                                <span>Buy fresh vegetables at the farmers market</span>
                            </div>
                            <div className={styles.address}>
                                <span><BsFillPinMapFill /> 15999 200th avenue</span> 
                            </div>
                            <div className={styles.forms}>
                                <Link href="https://forms.google.com/">
                                    <div className={styles.formButton}>
                                        <a>RSVP</a>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Events;