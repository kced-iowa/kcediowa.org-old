import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '/components/Navbar';
import Footer from '/components/Footer';
import styles from '/styles/Home.module.css';

import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoBusinessOutline } from 'react-icons/io5';
import { BsFillPinMapFill } from 'react-icons/bs'

function Home() {
  // declare ad images - replace with api sooner or later
  const adImage0 = 'https://upload.wikimedia.org/wikipedia/commons/6/62/Solid_red.svg';
  const adImage1 = 'https://upload.wikimedia.org/wikipedia/commons/2/29/Solid_green.svg';
  const adImage2 = 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Solid_blue.svg';

  // declare ad links - replace with api sooner or later
  const adLink0 = 'https://google.com/'
  const adLink1 = 'https://google.com/'
  const adLink2 = 'https://google.com/'

  return (
    <>
      <Head>
        <title>Home | KCED</title>
      </Head>
      <Navbar />
      <div className={styles.landing}>
        <div className={styles.landingText}>
          <span className={styles.landingTextTop}>&mdash; Welcome To &mdash;</span>
          <span className={styles.landingTextBottom}>Sigourney Area Development Corporation</span>
        </div>
        <div className={styles.sideContainer}>
          <div className={styles.couplingContainer}>
            <div className={styles.search}>
              <form>
                <input type="text" className={styles.searchInput} placeholder="Search something incredible..." />
              </form>
            </div>
            <div className={styles.ads}>
              <a href={adLink0} target="_blank" rel="noopener noreferrer">
                <Image alt="blablablabla" src={adImage0} width="120px" height="120px" />
              </a>
              <a href={adLink1} target="_blank" rel="noopener noreferrer">
                <Image alt="blablablabla" src={adImage1} width="120px" height="120px" />
              </a>
              <a href={adLink2} target="_blank" rel="noopener noreferrer">
                <Image alt="blablablabla" src={adImage2} width="120px" height="120px" />
              </a>
            </div>
          </div>
          <div className={styles.links}>
            <span className={styles.linkTitle}>Quick Links</span>
            <div className={styles.linkSpacer} />
            <div className={styles.linkContainer}>
              <div className={styles.link}>
                <div>
                  <Link href="/about">
                    <a>
                      <div>
                        <span className={styles.linkIcon}><IoIosInformationCircleOutline /></span>
                      </div>
                      <div>
                        <span>About Us</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.link}>
                <div>
                  <Link href="/business">
                    <a>
                      <div>
                        <span className={styles.linkIcon}><IoBusinessOutline /></span>
                      </div>
                      <div>
                        <span>Business Information</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.link}>
                <div>
                  <Link href="/visit">
                    <a>
                      <div>
                        <span className={styles.linkIcon}><BsFillPinMapFill /></span>
                      </div>
                      <div>
                        <span>Visit</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;