import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { remark } from 'remark'
import html from 'remark-html'

import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';

import styles from './About.module.css';

const api = process.env.NEXT_PUBLIC_APIBASE

export default function About () {
    const [members, setMembers] = useState([]);
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetchMembers();
        fetchAbout();
    }, []);
    const fetchAbout = () => {
        axios
        .get(api + '/about')
        .then((res) => {
            setAbout(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    };
    const fetchMembers = () => {
        axios
        .get(api + '/members')
        .then((res) => {
            setMembers(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    };

    return (
        <div>
            <Head>
                <title>About | KCED</title>
            </Head>
            <Navbar />
            <div className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.sidebar}>
                        <ul>
                            {about.map((about) =>
                                <li key={about._id}><AnchorLink href={'#' + about._id}>{about.title}</AnchorLink></li>
                            )}
                            <li><AnchorLink href='#members'>SADC Board Members</AnchorLink></li>
                            <li><AnchorLink href='#committees'>Committees</AnchorLink></li>
                        </ul>
                    </div>
                    <Abouts about={about}/>
                    {/* {about.map((about) =>
                    <div>
                        <div className={styles.title} id={about._id}>
                            <span>{about.title}</span>
                            <Seperator />
                        </div>
                        <div className={styles.text}>
                            <span key={about.id + 'z'}>{about.content.replace(/\\n/g, '\n')}</span>
                        </div>
                    </div>
                    )} */}
                    <div>
                        <div id='members' className={styles.title}>
                            <span>Members</span>
                            <Seperator />
                        </div>
                        <div className={styles.list}>
                            {members.map((member) =>
                                <div className={styles.member} key={member.id}>
                                    <Link href={'/about/' + member._id}>
                                        <div className={styles.memberLink}>
                                            <div className={styles.memberSidebar}>{'<'}</div>
                                            <div className={styles.memberImage}>
                                                <Image alt="" src={api + '/cdn/members/' + member.image} layout="fill"/>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className={styles.memberInfo}>
                                        <span>{member.name}</span>
                                        <span>{member.occupation}</span>
                                        <span>Since | {member.join}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <span className={styles.subtitle}>*non-voting members</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

function Abouts({about}) {
    const [content, setContent] = useState([])
    useEffect(() => {
      const testing = async () => {
        await parseAboutData({about})
        .then((res) => {
          setContent(res)
        })
      }
      testing()
    })
    return (
      <>
        {content.map((item) => (
          <>
            <div className={styles.title} id={about._id}>
                <span>{item.title}</span>
                <Seperator />
            </div>
            <div dangerouslySetInnerHTML={{ __html: item.contentHtml }} />
            <span>EOL</span>
          </>
        ))}
      </>
    )
  }

  async function parseAboutData({about}) {
    const array = []
    for await (const item of about) {
      const md = item.content.replace(/\\n/g, '\n')
      const content = await remark()
        .use(html)
        .process(md)
      const contentHtml = content.toString()
      array.push({_id: item._id,title: item.title, contentHtml})
    }
    return array
  }