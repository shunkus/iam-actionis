import "tailwindcss/tailwind.css";
import "../src/assets/css/app.css";
import Head from "next/head";
import { usePanelbear } from "@panelbear/panelbear-nextjs";

function MyApp({ Component, pageProps }) {
  usePanelbear("7rT3pF9uGoN");
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
