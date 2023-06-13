import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './TownPage.module.css'

const api = process.env.NEXT_PUBLIC_APIBASE

import { AiFillTwitterSquare, AiFillInstagram, AiFillFacebook, AiOutlineLink } from 'react-icons/ai'
import { FaMapMarkerAlt, FaGlobe } from'react-icons/fa'

function SocialContainer (props) {
    switch (props.type) {
        case 'twitter':
            return (
                <div className={styles.socialLink} >
                    <a rel='noreferrer' target='_blank' href={props.user}><span><AiFillTwitterSquare /></span></a>
                </div>
            )
        case 'instagram':
            return (
                <div className={styles.socialLink} >
                    <a rel='noreferrer' target='_blank' href={props.user}><span><AiFillInstagram /></span></a>
                </div>
            )
        case 'facebook':
            return (
                <div className={styles.socialLink} >
                    <a rel='noreferrer' target='_blank' href={props.user}><span><AiFillFacebook /></span></a>
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

export default function TownPage () {

    const router = useRouter()
    const { townID }= router.query

    useEffect(() => {
        const fetchTown = () => {
            axios
            .get(api + '/townships/' + townID)
            .then((res) => {
                setData(res.data)
                setSocialData(res.data.socials)
                setImage(api + '/cdn/townships/' + res.data.mainImg)
            })
        }
        if (router.isReady) {
            fetchTown()
        }
    }, [router.isReady])

    const [data, setData] = useState('')
    const [socialData, setSocialData] = useState('')
    const [image, setImage] = useState('')

    return (
        <>
            <Head>
                <title>{data.name + " | KCED"}</title>
            </Head>
            <main>
                <div>
                    <Link href='/townships'>
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
                    <div className={styles.aboutContainer}>
                        <span>{data.about}</span>
                    </div>
                </div>
                {/* <div className={styles.title}>
                    <Image src={imagePreview} height={300} width={300}/>
                    <span>{data.name}</span>
                    <a rel='noreferrer' target='_blank' href={'https://www.google.com/maps/place/' + data.mapsAddress}>Maps</a>
                    <a rel='noreferrer' target='_blank' href={data.url}>Website</a>
                    <span>{data.about}</span>
                    <span onClick={()=>console.log(socialData)}>eee</span>
                    {socialData && socialData.map((data) => 
                        <SocialContainer type={data.type} />
                    )}
                </div> */}
            </main>
        </>
    )
}