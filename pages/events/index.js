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
    return (
        // still gives key error, what ???????
        <div key={props.key} className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.type}>
                    <span>{props.title}</span>
                </div>
            </div>
            <div className={styles.date}>
                <span className={styles.int}>{props.dd}</span>
                <span>{props.mm}</span>
                <div>
                    <span>{props.timestart}</span>
                    <span> - </span>
                    <span>{props.timeend}</span>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.desc}>
                    <span>{props.desc}</span>
                </div>
                <div className={styles.address}>
                    <span><FaMapMarkerAlt /></span>
                    <span>{props.address}</span> 
                </div>
                <div className={styles.forms}>
                    <div className={styles.formButton}>
                        <a rel="noreferrer" target="_blank" href={props.rsvp}>{props.rsvp}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Events() {
    const { data, error } = useSWR(key, fetcher)
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
                {data && data.map((event)=> (
                    <EventCard
                        key={event._id}
                        title={event.title}
                        dd={event.dd}
                        mm={event.mm}
                        timestart={event.timestart}
                        timeend={event.timeend}
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