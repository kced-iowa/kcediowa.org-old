import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '/components/Footer';
import styles from './BusinessPage.module.css';

import { AiFillPhone } from 'react-icons/ai';
import { FaMapMarkerAlt, FaGlobe, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';

const api = process.env.NEXT_PUBLIC_APIBASE

function BusinessPage() {

    const router = useRouter();
    const [business, setBusiness] = useState({})
    // need to declare this as its own thing otherwise nextjs throws a fit and won't even access the values of the objects, super janky, fix eventually ???
    const [contact, setContact] = useState({})
    useEffect(() =>{
        const { businessID } = router.query
        console.log(businessID)
        const fetchBusiness = () => {
            axios
            .get(api + '/business/' + businessID)
            .then((res) => {
                console.log(res.data);
                setBusiness(res.data)
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
    if (business.instagram !== undefined || '') {
        var ingrarhsd = 0
    } else {
        var ingrarhsd = 1
    }
    return (
        <div>
            <div>
                <Link href='/business'>
                    <a><span>{'< Return'}</span></a>
                </Link>
            </div>
            <div className={styles.page} key=''>
                <div className={styles.titleContainer}>
                    <div className={styles.titleBar} />
                    <div className={styles.titleContent}>
                        <span className={styles.title}>{business.name}</span>
                        <span className={styles.titleType}>{business.type}</span>
                    </div>
                </div>
                <div className={styles.linkContainer}>
                    <a href={'https://www.google.com/maps/place/' + business.address}><FaMapMarkerAlt />Maps</a>
                    <a href={'tel:' + business.number}><AiFillPhone />Phone</a>
                    <a href={business.website}><FaGlobe />Website</a>
                    <div className={styles.linkSocials}>
                        {business.facebook
                        == "" ? <span>true</span>
                        : <span>false</span>
                        }
                        {business.instagram == undefined || "" ? '' : <a href={business.instagram}><FaInstagramSquare /></a>}
                        {business.facebook == undefined || "" ? '' : <a href={business.facebook}><FaFacebookSquare /></a>}
                        <a href=""><FaTwitterSquare /></a>
                        <span onClick={() => console.log(ingrarhsd)}>click</span>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contactsTitle}>
                        <div className={styles.titleBar} />
                        <div className={styles.title}>
                            <span onClick={()=> console.log(business)}>Contacts</span>
                        </div>
                    </div>
                    <div className={styles.contactsCards}>
                        <div className={styles.contactsCard}>
                            <div className={styles.cardImage}>
                                <Image alt="" src={api + "/cdn/business/" + business.contactimg} layout="fill"/>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    <span>{contact.name}</span>
                                    <span className={styles.position}>{contact.position}</span>
                                </div>
                                <div className={styles.cardLinks}>
                                    <a href={"mailto:" + contact.email}><MdEmail />Email</a>
                                    <a href={"tel:" + contact.number}><AiFillPhone />Phone</a>
                                    <a target='_blank' rel="noreferrer" href={contact.website}><FaGlobe />Website</a>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sideContainer}>
                    <div className={styles.sideImage}>
                        <Image alt="" src={api + '/cdn/business/' + business.mainimg} layout="fill"/>
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