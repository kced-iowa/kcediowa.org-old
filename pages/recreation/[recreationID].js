import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import styles from './RecreationPage.module.css'

const api = process.env.NEXT_PUBLIC_APIBASE

import { AiFillTwitterSquare, AiFillInstagram, AiFillFacebook, AiOutlineLink } from 'react-icons/ai'
import { FaMapMarkerAlt, FaGlobe } from "react-icons/fa"

function SocialContainer (props) {
    switch (props.type) {
        case 'twitter':
            return (
                <div className={styles.socialLink} >
                    <a rel='noreferrer' target='_blank' href={props.user}><span><AiFillTwitterSquare /> Twitter</span></a>
                </div>
            )
        case 'instagram':
            return (
                <div className={styles.socialLink} >
                    <a rel='noreferrer' target='_blank' href={props.user}><span><AiFillInstagram /> Instagram</span></a>
                </div>
            )
        case 'facebook':
            return (
                <div className={styles.socialLink} >
                    <a rel='noreferrer' target='_blank' href={props.user}><span><AiFillFacebook /> Facebook</span></a>
                </div>
            )
        case '':
            return null
        default:
            return (
                <div className={styles.socialLink} >
                    <a rel='noreferrer' target='_blank' href={props.user}><span><AiOutlineLink /></span>Other</a>
                </div>
            )
    }
}

export default function RecreationPage () {

    const router = useRouter()
    const { recreationID } = router.query

    useEffect(() => {
        const fetchData = () => {
            axios
            .get(api + '/recreation/' + recreationID)
            .then((res) => {
                setData(res.data)
                setSocialData(res.data.socials)
                setImage(api + '/cdn/recreation/' + res.data.mainImg)
                console.log(res)
            })
        }
        if (router.isReady) {
            fetchData()
        }
    }, [router.isReady])

    const [data, setData] = useState([])
    const [socialData, setSocialData] = useState([])
    const [image, setImage] = useState([])

    return (
        <>
            <Head>
                <title>{data.name + " | KCED"}</title>
            </Head>
            <main>
                <div>
                    <Link href='/recreation'>
                        <a><span>{'< Return'}</span></a>
                    </Link>
                </div>
                <div className={styles.titleContainer}>
                    <div className={styles.titleBar} />
                    <div className={styles.title}>{data.name}</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.links}>
                        {data.mapsAddress ? <a rel='noreferrer' target='_blank' href={'https://www.google.com/maps/place/' + data.mapsAddress}><FaMapMarkerAlt />{data.mapsAddress}</a> : null }
                        {data.url ? <a rel='noreferrer' target='_blank' href={data.url}><FaGlobe />Website</a> : null }
                        {socialData && socialData.map((data) => 
                            <SocialContainer type={data.type} user={data.user} />
                        )}
                    </div>
                    <div className={styles.imageContainer}>
                        <Image src={image} layout='fill' />
                    </div>
                    {data.activities ? 
                        <div className={styles.aboutContainer}>
                            <span className={styles.aboutTitle}>Activities</span>
                            <span>{data.activities}</span>
                        </div>
                    : null }
                    {data.history ?
                        <div className={styles.aboutContainer}>
                            <span className={styles.aboutTitle}>History</span>
                            <span>{data.history}</span>
                        </div>
                    : null }
                </div>
            </main>
        </>
    )
}