import Head from 'next/head'
import axios from 'axios'
import { useState } from 'react'

import Navbar from '/components/Navbar'
import Seperator from '/components/Seperator'
import Footer from '/components/Footer'

import styles from './Participate.module.css'
import { BsCheck2Circle } from 'react-icons/bs'

const api = process.env.NEXT_PUBLIC_APIBASE

export default function Participate () {
    const [confirmed, setConfirmed] = useState(false)
    const [form, setForm] = useState('business')
    
    const submitForm = (e) => {
        e.preventDefault()
        if (form == 'business') {
            if (!e.target.businessName.value == '') {
                const business = {
                    type: "business",
                    name: e.target.businessName.value,
                    address: e.target.businessAddress.value,
                    contactName: e.target.businessContactName.value,
                    contactEmail: e.target.businessContactEmail.value,
                    phone: e.target.businessContactPhone.value,
                    website: e.target.businessWebsite.value,
                    twitter: e.target.businessTwitter.value,
                    instagram: e.target.businessInstagram.value
                }
                axios
                .post(api + '/memberships', business)
                .then((res) => {
                    if (res.status == 201) {
                        setConfirmed(true)
                    }
                })
            } else {
                alert("Please enter a business name.")
            }
        } else {
            if (!e.target.individualName.value == '') {
                const individual = {
                    type: "individual",
                    name: e.target.individualName.value,
                    address: e.target.individualAddress.value,
                    phone: e.target.individualPhone.value
                }
                axios
                .post(api + '/memberships', individual)
                .then((res) => {
                    if (res.status == 201) {
                        setConfirmed(true)
                    }
                })
            } else {
                alert("Please enter a name.")
            }
        }
    }

    return (
        <>
            <Head>
                <title>Membership | KCED</title>
            </Head>
            <Navbar />
            {confirmed ?
                <div className={styles.confirmed}>
                    <div>
                        <span>
                            <BsCheck2Circle />
                        </span>
                        <span>Your request has been recieved.</span>
                        <button onClick={()=>setConfirmed(false)}>Okay!</button>
                    </div>
                </div>
            : null
            }
            <div className={styles.page}>
                <div className={styles.title}>
                    <span>Become a member</span>
                    <Seperator />
                </div>
                <form className={styles.content} onSubmit={submitForm}>
                    <div className={styles.formDiv}>
                        <div>
                            <input id='business' name="entityType" defaultChecked={true} type="radio" onClick={()=>setForm('business')} />
                            <label htmlFor='business'>{"Business (US$100/year)"}</label>
                        </div>
                        <div className={styles.formInput}>
                            <input id="businessName" placeholder='Business Name' />
                            <input id="businessAddress" placeholder='Address' />
                            <input id="businessContactName" placeholder='Primary Contact' />
                            <input id="businessContactEmail" placeholder='Primary Contact Email' />
                            <input id="businessContactPhone" placeholder='Primary Contact Phone' />
                            <input id="businessWebsite" placeholder='Website' />
                            <input id="businessTwitter" placeholder='Twitter' />
                            <input id="businessInstagram" placeholder='Instagram' />
                        </div>
                    </div>
                    <div className={styles.formDiv}>
                        <div>
                            <input id='individual' name="entityType" type="radio" onClick={()=>setForm('individual')} />
                            <label htmlFor='individual'>{"Individual (US$50/year)"}</label>
                        </div>
                        <div className={styles.formInput}>
                            <input id="individualName" placeholder='Name' />
                            <input id="individualAddress" placeholder='Address' />
                            <input id="individualPhone" placeholder='Phone' />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button type='submit'>Submit</button>
                        <button type='reset' onClick={()=>setForm('business')}>Reset</button>
                    </div>
                    <span>{"(Payments will be invoiced via USPS)"}</span>
                </form>
            </div>
            <Footer />
        </>
    )
}