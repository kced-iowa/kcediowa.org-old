import Head from 'next/head';
import Link from 'next/link';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios'
import styles from './Events.module.css';

import { FaMapMarkerAlt } from 'react-icons/fa'

const api = process.env.NEXT_PUBLIC_APIBASE

function Events() {

    const [data, setData] = useState([])
    
    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = () => {
        axios
        .get(api + '/events')
        .then((res)=> {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <Head>
                <title>Events | SADC</title>
            </Head>
            <Navbar />
            <div className={styles.page}>
                <div className={styles.title}>
                    <span>Events</span>
                    <Seperator />
                </div>
                <div className={styles.content}>
                    {data.map((event) => (
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.type}>
                                    <span>{event.title}</span>
                                </div>
                            </div>
                            <div className={styles.date}>
                                <span className={styles.int}>{event.dd}</span>
                                <span>{event.mm}</span>
                                <div>
                                  <span>{event.timestart}</span>
                                  <span> - </span>
                                  <span>{event.timeend}</span>
                                </div>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.desc}>
                                    <span>{event.desc}</span>
                                </div>
                                <div className={styles.address}>
                                    <span><FaMapMarkerAlt /></span>
                                    <span>{event.address}</span> 
                                </div>
                                <div className={styles.forms}>
                                    <div className={styles.formButton}>
                                        <a rel="noreferrer" target="_blank" href={event.rsvp}>{event.rsvp}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Events;