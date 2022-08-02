import { useRouter } from 'next/router';

function NewsPage() {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <p>{id}</p>
        </div>
    );
}

export default NewsPage;