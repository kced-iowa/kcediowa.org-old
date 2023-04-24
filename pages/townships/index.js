import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import axios from 'axios'
import useSWR from 'swr'
import styles from './Townships.module.css';

const api = process.env.NEXT_PUBLIC_APIBASE

const fetcher = url => axios.get(url).then(res => res.data)
var key = api + '/townships'

function TownCard (props) {
    return (
        <Link href={'/townships/' + props.id}>
        <a className={styles.card} >
            <div className={styles.cardImage}>
                <Image alt="" src={api + '/cdn/townships/' + props.coverImg} layout="fill" />
            </div>
            <div className={styles.cardSeperator} />
            <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                    <span>{props.name}</span>
                </div>
            </div>
        </a>
        </Link>
    )
}

function Orgs() {
    const { data, error } = useSWR(key, fetcher)
    return (
        <div>
            <Head>
                <title>Live Here | KCED</title>
            </Head>
            <Navbar />
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <span>A place to grow</span>
                        <Seperator />
                    </div>
                </div>
                <div className={styles.content}>
                {data && data.map((town) => (
                    <TownCard
                        key={town._id}
                        id={town._id}
                        name={town.name}
                        coverImg={town.coverImg}
                    />
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Orgs;