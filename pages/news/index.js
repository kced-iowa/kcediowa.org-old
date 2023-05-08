import Head from 'next/head';
import Link from 'next/link';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import useSWR from 'swr'
import axios from 'axios'
import styles from './News.module.css';

const api = process.env.NEXT_PUBLIC_APIBASE

const fetcher = url => axios.get(url).then(res => res.data)
var key = api + '/news'

const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
}

function NewsCard (props) {
    const date = new Date(props.date)
    return (
        <div className={styles.card}>
            <div className={styles.cardDate}>
                <span>{props.author + " | " + date.toLocaleString([], options)}</span> 
            </div>
            <div className={styles.cardHeader}>
                <span>{props.title}</span>
            </div>
            <div className={styles.cardText}>
                <span>{props.metadata}</span>
            </div>
            {props.file ?
                <a rel='noreferrer' target='_blank' href={api + "/cdn/news/" + props.file}>
                    <div className={styles.cardButton}>
                        <a><span>Learn More</span></a>
                    </div>
                </a>
            : null }
        </div>
        )
}

function News() {
    const { data, error } = useSWR(key, fetcher)
    return (
        <div>
            <Head>
                <title>News | KCED</title>
            </Head>
            <Navbar />
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <span>News</span>
                        <Seperator />
                    </div>
                    <div className={styles.content}>
                        {data && data.map((news) => (
                            <NewsCard
                                author={news.author}
                                date={news.date}
                                title={news.title}
                                metadata={news.metadata}
                                file={news.file}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default News;