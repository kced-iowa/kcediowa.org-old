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

const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
}

function EventCard (props) {

    const start = new Date(Date.parse(props.start))
    const end = new Date(Date.parse(props.end))

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.type}>
                    <span>{props.title}</span>
                </div>
            </div>
            <div className={styles.date}>
                <span className={styles.bold}>From</span>
                <span>{start.toLocaleString([], options)}</span>
                <span className={styles.bold}>To</span>
                <span>{end.toLocaleString([], options)}</span>
            </div>
            <div className={styles.details}>
                <div className={styles.desc} onClick={()=>setIsOpen(true)}>
                    <span>{props.desc}</span>
                </div>
                {isOpen ?
                    <div className={styles.moreContainer}>
                        <div className={styles.more}>
                            <span onClick={()=>setIsOpen(false)} className={styles.closeMore}>X</span>
                            <span className={styles.moreInfo}>More Info</span>
                            <span>{props.desc}</span>
                        </div>
                    </div>
                : null}
                {props.address ?
                    <div className={styles.address}>
                        <span><FaMapMarkerAlt /></span>
                        <a rel='noreferrer' target='_blank' href={"https://www.google.com/maps/place/" + props.address}>{props.address}</a> 
                    </div>
                : null }
                {props.link ?
                    <div>
                        <a rel="noreferrer" target="_blank" href={props.link}>Learn More</a>
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

export default function Events() {
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
                        link={event.link}
                    />
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}