import Link from 'next/link';
// import Head from 'next/Head';
// import { useRouter } from 'next/router';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';
import styles from './NewsPage.module.css';

function NewsPage() {
    // will be useful later
    // const router = useRouter();
    // const { news } = router.query;
    return (
        <div>
            <div className={styles.page}>
                <div>
                    <Link href='/news'>
                        <a>{'< Return'}</a>
                    </Link>
                </div>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>News Title Bla Bla Blasdf asdf asdfa</span>
                    <Seperator />
                    <span>Sigourney Area Development Corporation | Jan 1, 1970</span>
                </div>
                <div className={styles.content}>
                    <div className={styles.para}>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed arcu non odio euismod lacinia at quis. Libero volutpat sed cras ornare arcu dui. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Sed velit dignissim sodales ut eu sem integer. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Quis blandit turpis cursus in hac habitasse. Vivamus arcu felis bibendum ut. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Nisl tincidunt eget nullam non nisi est sit amet. Dis parturient montes nascetur ridiculus. Aliquam malesuada bibendum arcu vitae elementum curabitur. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Etiam erat velit scelerisque in dictum non.</span>
                        <br />
                        <br />
                        <span>Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. At imperdiet dui accumsan sit amet nulla. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Viverra tellus in hac habitasse platea. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Arcu non sodales neque sodales ut etiam. Proin nibh nisl condimentum id venenatis a condimentum. At elementum eu facilisis sed odio. Nec ullamcorper sit amet risus. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Ultrices eros in cursus turpis. Suscipit tellus mauris a diam maecenas sed enim ut. Rhoncus est pellentesque elit ullamcorper. Malesuada fames ac turpis egestas integer eget aliquet nibh. Scelerisque in dictum non consectetur a erat nam at lectus. Augue mauris augue neque gravida in fermentum et. Nunc eget lorem dolor sed viverra. Eget nunc lobortis mattis aliquam faucibus. Magna fringilla urna porttitor rhoncus dolor. Id diam vel quam elementum pulvinar etiam.</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NewsPage;