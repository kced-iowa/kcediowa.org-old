import Head from 'next/head';
import Link from 'next/link';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import { useEffect, useState } from 'react';
import useSWR from 'swr'
import axios from 'axios'
import styles from './Events.module.css';

import { FaMapMarkerAlt } from 'react-icons/fa'

const api = process.env.NEXT_PUBLIC_APIBASE

const fetcher = url => axios.get(url).then(res => res.data)
const key = api + '/events'

function EventCard (props) {

    const start = new Date(Date.parse(props.start))
    const end = new Date(Date.parse(props.end))

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.type}>
                    <span>{props.title}</span>
                </div>
            </div>
            <div className={styles.date}>
                <span className={styles.bold}>From</span>
                <span>{start.toLocaleString()}</span>
                <span className={styles.bold}>To</span>
                <span>{end.toLocaleString()}</span>
            </div>
            <div className={styles.details}>
                <div className={styles.desc}>
                    <span>{props.desc}</span>
                </div>
                {props.address ?
                    <div className={styles.address}>
                        <span><FaMapMarkerAlt /></span>
                        <span>{props.address}</span> 
                    </div>
                : null }
                {props.rsvp ? 
                    <div className={styles.forms}>
                        <div className={styles.formButton}>
                            <a rel="noreferrer" target="_blank" href={'mailto:' + props.rsvp}>{props.rsvp}</a>
                        </div>
                    </div>
                : null }
            </div>
        </div>
    )
}

function Events() {
    const { data, error } = useSWR(key, fetcher)
    return (
        <div>
            <Head>
                <title>Events | KCED</title>
            </Head>
            <Navbar />
            <div className={styles.page}>
                <div className={styles.title}>
                    <span>Events</span>
                    <Seperator />
                </div>
                <div className={styles.content}>
                {data && data.map((event, i)=> (
                    <EventCard
                        key={i}
                        title={event.title}
                        start={event.start}
                        end={event.end}
                        desc={event.desc}
                        address={event.address}
                        rsvp={event.rsvp}
                    />
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Events;