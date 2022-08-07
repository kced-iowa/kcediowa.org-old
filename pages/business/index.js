import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import styles from './Business.module.css';

import { BsGlobe2 } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

function Business() {
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
                        <div className={styles.card}>
                            <div className={styles.cardImage}>
                                <Image alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GpuviZ2dkD_w9tP198SLeQHaHa%26pid%3DApi&f=1" layout="fill"/>
                            </div>
                            <div className={styles.cardSeperator}></div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    <span>Super Cool Company LLC</span>
                                </div>
                                <div className={styles.cardClass}>
                                    <span>Gas Station</span>
                                </div>
                                <div className={styles.cardInfo}>
                                    <div className={styles.cardAbout}>
                                        <span>eqwerewr  qwerqwherkjkjh lkjhfasdufiasdifuhsjas dfasef asef efsdf sdf asdfasdfk </span>
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
                            <Link href="/business/1">
                                <div className={styles.cardButton}>
                                    <a><span>Learn More</span></a>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Business;