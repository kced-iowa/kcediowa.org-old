import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <span><a href="https://github.com/horsaen/sigourney.com" target="_blank" rel="noopener noreferrer">Contribute to This Website</a><span className={styles.green}> | </span><a href="https://wiki.sigourney.com">Dev Wiki</a></span>
                <span>Made with {'<3'} by <a href="https://horsaen.com" target="_blank" rel="noopener noreferrer">Cameron W</a></span>
            </div>
            <div className={styles.content}>
                <span>© 2022 Sigourney Area Development Corporation</span>
                <span>112 East Washington Street • Sigourney, IA 52591-1445 • 641.622.2288</span>
                <a href="mailto:sadc@sigourney.com">sadc@sigourney.com</a>
            </div>
            <div className={styles.content} style={{alignItems: 'center'}}>
                <a href="https://admin.sigourney.com">Console</a>
                <div className={styles.iconContainer}>
                    <a className={styles.icon} target="_blank" rel="noreferrer" href="https://www.facebook.com/Sigourney-Area-Development-Corp-1480675282182185"><AiFillFacebook /></a>
                    <a className={styles.icon} target="_blank" rel="noreferrer" href="https://www.instagram.com/sadc_52591/"><AiFillInstagram /></a>
                </div>
            </div>
        </div>
    );
}