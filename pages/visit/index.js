import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import styles from './Visit.module.css';

function Visit() {

    const titles = [
        {
            id: 1,
            link: "/dining",
            image: "/../public/City.jpg",
            name: "Dining"
        },
        {
            id: 2,
            link: "/recreation",
            image: "/../public/City.jpg",
            name: "Recreation"
        },
        {
            id: 3,
            link: "/landmarks",
            image: "/../public/City.jpg",
            name: "Landmarks"
        }
    ];
    return (
        <div>
            <Head>
                <title>Visit | SADC</title>
            </Head>
            <Navbar />
            <div className={styles.page}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        <span>Visit Us</span>
                        <Seperator />
                    </div>
                </div>
                {titles.map(({id, link, image, name}) => (
                <div className={styles.cardContainer} key={id}>
                    <Link href={"/visit" + link}>
                        <a className={styles.card}>
                            <Image alt='' src={`${image}`} layout='fill' className={styles.cardBg}/>
                            <div className={styles.cardTitle}>
                                <span>{name}</span>
                            </div>
                            <div className={styles.cardIcon}>
                                <span>{">"}</span>
                            </div>
                        </a>
                    </Link>
                </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Visit;