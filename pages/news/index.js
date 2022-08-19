import Head from 'next/head';
import Link from 'next/link';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import styles from './News.module.css';

function News() {
    return (
        <div>
            <Head>
                <title>News | SADC</title>
            </Head>
            <Navbar />
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <span>News</span>
                        <Seperator />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.card}>
                            <div className={styles.cardDate}>
                                <span>SADC | Jan 1, 1970</span> 
                            </div>
                            <div className={styles.cardHeader}>
                                <span>Very Cool News Thing</span>
                            </div>
                            <div className={styles.cardText}>
                                <span>
                                    La rébellion de Hōgen (保元の乱, Hōgen no ran?) est une courte guerre civile survenue dans le Japon de l&apos;ère Heian, en l&apos;an 1156 de notre ère. 
                                    Elle doit son nom au fait qu&apos;elle ait eu lieu durant l&apos;ère Hōgen (1156-1159), et impliqua les trois plus puissants clans de l&apos;époque, les Minamoto, 
                                    les Taira et les Fujiwara, dans une lutte pour la domination de la cour impériale de Kyoto. La rébellion de Hōgen (保元の乱, Hōgen no ran?) est une courte guerre civile survenue dans le Japon de l&apos;ère Heian, en l&apos;an 1156 de notre ère. 
                                    Elle doit son nom au fait qu&apos;elle ait eu lieu durant l&apos;ère Hōgen (1156-1159), et impliqua les trois plus puissants clans de l&apos;époque, les Minamoto, 
                                    les Taira et les Fujiwara, dans une lutte pour la domination de la cour impériale de Kyoto.
                                </span>
                            </div>
                            <Link href="/news/0">
                                <div className={styles.cardButton}>
                                    <a><span>Learn More</span></a>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default News;