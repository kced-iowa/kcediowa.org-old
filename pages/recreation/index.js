import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import Seperator from '/components/Seperator';
import styles from './Recreation.module.css';

import axios from 'axios';
import useSWR from 'swr';

const api = process.env.NEXT_PUBLIC_APIBASE

const fetcher = url => axios.get(url).then(res => res.data)
var key = api + '/recreation'

function RecreationCard (props) {
    return (
        <Link href={'/recreation/' + props.id}>
        <a className={styles.card} >
            <div className={styles.cardImage}>
                <Image alt="" src={api + '/cdn/recreation/' + props.coverImg} layout="fill" />
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

export default function Recreation() {
    const { data, error } = useSWR(key, fetcher)
    return (
        <div>
            <Head>
                <title>Play Here | KCED</title>
            </Head>
            <Navbar />
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <span>A place to play</span>
                        <Seperator />
                    </div>
                </div>
                <div className={styles.content}>
                {data && data.map((recreation) => (
                    <RecreationCard
                        key={recreation._id}
                        id={recreation._id}
                        name={recreation.name}
                        coverImg={recreation.coverImg}
                    />
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}