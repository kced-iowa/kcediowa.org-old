import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
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
                <li><Link href="/townships">Live Here</Link></li>
                <span> | </span>
                <li><Link href="/recreation">Play Here</Link></li>
                <span> | </span>
                <li><Link href="/participate">Participate</Link></li>
                <span> | </span>
                <li><Link href="/resources">Resources</Link></li>
            </ul>
        </div>
    );
}