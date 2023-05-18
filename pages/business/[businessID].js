import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '/components/Footer';
import styles from './BusinessPage.module.css';

import { AiFillTwitterSquare, AiFillInstagram, AiFillFacebook, AiFillPhone, AiOutlineLink } from 'react-icons/ai'
import { FaMapMarkerAlt, FaGlobe, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';

const api = process.env.NEXT_PUBLIC_APIBASE

function SocialContainer (props) {
    switch (props.type) {
        case 'twitter':
            return (
                <div className={styles.socialLink} >
                    <a rel='noreferrer' target='_blank' href={"https://twitter.com/" + props.user}><span><AiFillTwitterSquare /></span></a>
                </div>
            )
        case 'instagram':
            return (
                <div className={styles.socialLink} >
                    <a rel='noreferrer' target='_blank' href={"https://instagram.com/" + props.user}><span><AiFillInstagram /></span></a>
                </div>
            )
        case 'facebook':
            return (
                <div className={styles.socialLink} >
                    <a rel='noreferrer' target='_blank' href={"https://facebook.com/" + props.user}><span><AiFillFacebook /></span></a>
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

function BusinessPage() {
    const router = useRouter();
    const [business, setBusiness] = useState({})
    const [socialData, setSocialData] = useState('')
    // need to declare this as its own thing otherwise nextjs throws a fit and won't even access the values of the objects, super janky, fix eventually ???
    const [contact, setContact] = useState({})
    useEffect(() =>{
        const { businessID } = router.query
        const fetchBusiness = () => {
            axios
            .get(api + '/business/' + businessID)
            .then((res) => {
                setBusiness(res.data)
                setSocialData(res.data.socials)
                setContact(res.data.contact)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        if(router.isReady){
            fetchBusiness();
        }
    }, [router.isReady, router.query])
    return (
        <div>
            <Head>
                <title>{business?.name}</title>
            </Head>
            <div>
                <Link href='/business'>
                    <a><span>{'< Return'}</span></a>
                </Link>
            </div>
            <div className={styles.page}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleBar} />
                    <div className={styles.titleContent}>
                        <span className={styles.title}>{business.name}</span>
                        <span className={styles.titleType}>{business.type}</span>
                    </div>
                </div>
                <div className={styles.linkContainer}>
                    {/* could this be iterated ? */}
                    {business.address ? <a target="_blank" rel="noreferrer" href={'https://www.google.com/maps/place/' + business.address}><FaMapMarkerAlt />Maps</a> : null }
                    {business.phone ? <a target="_blank" rel="noreferrer" href={'tel:' + business.phone}><AiFillPhone />Phone</a> : null }
                    {business.website ? <a target="_blank" rel="noreferrer" href={business.website}><FaGlobe />Website</a> : null}
                    <div className={styles.linkSocials}>
                        {socialData && socialData.map((data) => 
                            <SocialContainer type={data.type} user={data.user} />
                        )}
                    </div>
                </div>
                {contact ? 
                    <div className={styles.contacts}>
                        <div className={styles.contactsTitle}>
                            <div className={styles.titleBar} />
                            <div className={styles.title}>
                                <span>Contacts</span>
                            </div>
                        </div>
                        <div className={styles.contactsCards}>
                            <div className={styles.contactsCard}>
                                <div className={styles.cardImage}>
                                    <Image alt="" src={api + "/cdn/business/" + business.contactimg} layout="fill"/>
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardTitle}>
                                        {contact.name ? <span>{contact.name}</span> : <span>No name provided</span>}
                                        <span className={styles.position}>{contact.position}</span>
                                    </div>
                                    <div className={styles.cardLinks}>
                                        {contact.email ? <a target="_blank" rel="noreferrer" href={"mailto:" + contact.email}><MdEmail />Email</a> : null }
                                        {contact.number ? <a target="_blank" rel="noreferrer" href={"tel:" + contact.number}><AiFillPhone />Phone</a> : null }
                                        {contact.website ? <a target='_blank' rel="noreferrer" href={contact.website}><FaGlobe />Website</a> : null }
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                : null }
                <div className={styles.sideContainer}>
                    <div className={styles.sideImage}>
                        <Image alt="" src={api + '/cdn/business/' + business.mainimg} layout="fill" />
                    </div>
                    <div className={styles.sideText}>
                        <span>{business.bio}</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BusinessPage;