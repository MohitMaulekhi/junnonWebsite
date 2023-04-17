import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/junoon-logo-only.png" />
        <meta property="og:image" content="/junoon-logo-only.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/junoon-logo-only.png" />
        <meta
          name="description"
          content="Welcome to the Official website of Junoon"
        />
        <link rel="apple-touch-icon" href="/junoon-logo-only.png" />
        <title>Junoon</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
