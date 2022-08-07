import Head from 'next/head';
import Navbar from '/components/Navbar';
import Seperator from '/components/Seperator';
import Footer from '/components/Footer';

function Visit() {
    return (
        <div>
            <Head>
                <title>Visit | SADC</title>
            </Head>
            <Navbar />
            <div></div>
            <Footer />
        </div>
    )
}

export default Visit;