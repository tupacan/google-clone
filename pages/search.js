import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.term} - Search Results</title>
            </Head>

            {/* Header */}
            <Header />

            {/* Search Results */}
            <SearchResults results={results} />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Search;

export async function getServerSideProps(context) {
    const API_KEY = process.env.API_KEY;
    const CONTEXT_KEY = process.env.CONTEXT_KEY;

    // In order to avoid google API requests quota during the development,
    // using a dummy JSON data that is stored in Response.js file.
    // Note, need to set to 'false' when in production.
    const useDummyData = true;

    const startIndex = context.query.start || 0;

    const data = useDummyData
        ? Response
        : await fetch(
              `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
          ).then((response) => response.json());

    return {
        props: {
            results: data,
        }, // will be passed to the page component as props
    };
}
