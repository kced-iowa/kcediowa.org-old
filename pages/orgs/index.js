import Head from 'next/head';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import styles from './Orgs.module.css';

function Orgs() {
    return (
        <div>
            <Head>
                <title>Clubs & Organizations | SADC</title>
            </Head>
            <Navbar />
            <div className={styles.page}>

            </div>
            <Footer />
        </div>
    )
}

export default Orgs;