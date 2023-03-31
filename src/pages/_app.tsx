import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import "../globals.css";
import { Header } from "../components/Header";
import { BottomBar } from "../components/BottomBar";
import { useState } from "react";
import { Footer } from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <>
      <Head>
        <title>Manutenção e Instações elétricas - VW Ômega</title>
        <meta
          name="description"
          content="Instalação e manutenção elétrica residêncial/corporativa em São Paulo. Solicite um orçamento. VW Ômega Elétrica."
        />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <Script id="google-tag-manager-head" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N26WCHT');
        `}
      </Script>

      <Header theme={theme} setTheme={setTheme} />

      <Component {...pageProps} theme={theme} />

      <BottomBar theme={theme} />

      <Footer theme={theme} />
    </>
  );
}
