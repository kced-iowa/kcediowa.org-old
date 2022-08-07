import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.sadc}>
                <Link href="/">SADC</Link>
            </div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <span> | </span>
                <li><Link href="/about">About</Link></li>
                <span> | </span>
                <li><Link href="/business">Business</Link></li>
                <span> | </span>
                <li><Link href="/events">Events</Link></li>
                <span> | </span>
                <li><Link href="/news">News</Link></li>
                <span> | </span>
                <li><Link href="/orgs">Clubs & Organizations</Link></li>
                <span> | </span>
                <li><Link href="/visit">Visit</Link></li>
            </ul>
        </div>
    );
}