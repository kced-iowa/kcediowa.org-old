import Head from 'next/head'

import Navbar from '/components/Navbar'
import Seperator from '/components/Seperator'
import Footer from '/components/Footer'

import styles from './Participate.module.css'

export default function Participate () {
    return (
        <>
            <Head>
                <title>Membership | KCED</title>
            </Head>
            <Navbar />
            <div className={styles.page}>
                <div className={styles.title}>
                    <span>Become a member</span>
                    <Seperator />
                </div>
                <div className={styles.content}>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}