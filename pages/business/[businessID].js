import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '/components/Footer';
import styles from './BusinessPage.module.css';

import { AiFillPhone } from 'react-icons/ai';
import { FaMapMarkerAlt, FaGlobe, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';

function BusinessPage() {

    const router = useRouter();
    const { businessID } = router.query
    
    const [business, setBusiness] = useState([])
    useEffect(() =>{
        const fetchBusiness = () => {
            axios
            .get('https://api.horsaen.com/business/' + businessID)
            .then((res) => {
                console.log(res.data);
                setBusiness(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        fetchBusiness();
    }, [businessID])
    return (
        <div>
            <div>
                <Link href='/business'>
                    <a><span>{'< Return'}</span></a>
                </Link>
            </div>
            <div className={styles.page} key=''>
                <div className={styles.titleContainer}>
                    <div className={styles.titleBar} />
                    <div className={styles.titleContent}>
                        <span className={styles.title}>{business.name}</span>
                        <span className={styles.titleType}>{business.type}</span>
                    </div>
                </div>
                <div className={styles.linkContainer}>
                    <span><FaMapMarkerAlt />Maps</span>
                    <a href="tel:6416222326"><AiFillPhone />Phone</a>
                    <a href="https://www.caseys.com/general-store/ia-sigourney/100-e-jackson-st/3396?y_source=1_MTcyMDU1MjItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"><FaGlobe />Website</a>
                    <div className={styles.linkSocials}>
                        <a href="https://"><FaInstagramSquare /></a>
                        <a href="https://"><FaFacebookSquare /></a>
                        <a href=""><FaTwitterSquare /></a>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contactsTitle}>
                        <div className={styles.titleBar} />
                        <div className={styles.title}>
                            <span>Contacts</span>
                        </div>
                    </div>
                    <div className={styles.contactsCards}>
                        <div className={styles.contactsCard}>
                            <div className={styles.cardImage}>
                                <Image alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GpuviZ2dkD_w9tP198SLeQHaHa%26pid%3DApi&f=1" layout="fill"/>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}><span>Person Persoewrwern</span></div>
                                <div className={styles.cardLinks}>
                                    <a href="mailto:"><MdEmail />Email</a>
                                    <a href="tel:6416222326"><AiFillPhone />Phone</a>
                                    <a href="https://www.caseys.com/general-store/ia-sigourney/100-e-jackson-st/3396?y_source=1_MTcyMDU1MjItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"><FaGlobe />Website</a>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sideContainer}>
                    <div className={styles.sideImage}>
                        <Image alt="" src={'/cdn/businesses/' + business.mainimg} layout="fill"/>
                    </div>
                    <div className={styles.sideText}>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BusinessPage;