import Head from 'next/head';

function Layout({ children }) {
    return (
        <>
            {children}
            {/* repace script with prod once ready
            <script async defer data-website-id="2a01eeb1-fd4f-40b2-87c1-c8f0d0861f39" src="http://sadcmetrics.horsaen.com/umami.js"></script> */}
        </>
    )
}

export default Layout;