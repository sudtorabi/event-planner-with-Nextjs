import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>generic title for all pages-Next app</title>
        <meta name="description" content="NEXTJS events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
