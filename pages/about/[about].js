import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './AboutPage.module.css';

import { MdEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';

function AboutPage() {
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
                        <Image alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GpuviZ2dkD_w9tP198SLeQHaHa%26pid%3DApi&f=1" layout="fill"/>
                    </div>
                    <div className={styles.titleTextContainer}>
                        <span className={styles.title}>Important person</span>
                        <span className={styles.titlePosition}>Superintendent of Schools</span>
                        <span className={styles.titleDate}>Since | 2015</span>
                    </div>
                </div>
                <div className={styles.contactContainer}>
                    <a href="mailto:"><MdEmail />Email</a>
                    <a href="tel:6416222326"><AiFillPhone />Phone</a>
                    <a href="https://www.caseys.com/general-store/ia-sigourney/100-e-jackson-st/3396?y_source=1_MTcyMDU1MjItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"><FaGlobe />Website</a>
                </div>
                <div className={styles.aboutText}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;