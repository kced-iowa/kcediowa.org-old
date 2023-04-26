import Head from 'next/head'
import { useState } from 'react'

import Navbar from '/components/Navbar'
import Seperator from '/components/Seperator'
import Footer from '/components/Footer'

import styles from './Participate.module.css'

export default function Participate () {
    const [form, setForm] = useState('business')
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
                    <form id='business'>
                        <input type="checkbox" checked onChange={()=>setForm('business')} />
                    </form>
                    <form id='individual'>
                        <input type="checkbox" onChange={()=>setForm('individual')} />
                    </form>
                </div>
                <buttom form={form} type='submit'>Submit</buttom>
                <button type='reset'>Reset</button>
            </div>
            <Footer />
        </>
    )
}