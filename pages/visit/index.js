import Head from 'next/head';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import styles from './Visit.module.css';

function Visit() {
    return (
        <div>
            <Head>
                <title>Visit | SADC</title>
            </Head>
            <Navbar />
            <div className={styles.page}>

            </div>
            <Footer />
        </div>
    )
}

export default Visit;