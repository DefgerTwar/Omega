import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import "../globals.css";
import { Header } from "../components/Header";
import { BottomBar } from "../components/BottomBar";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { PolicyBanner } from "../components/Policy";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [accept, setAccept] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const setting = localStorage.getItem("privacySettings");

    if (setting) {
      // if key exists user has accepted
      setAccept(true);
    }

    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Manutenção e Instalações elétricas - VW Ômega</title>
        <meta
          name="description"
          content="Instalação e manutenção elétrica residêncial/corporativa em São Paulo. Solicite um orçamento. VW Ômega Elétrica."
        />
        <link rel="icon" href="/icon.svg" />
      </Head>

      {accept ? (
        <>
          <Script id="google-tag-manager-head" strategy="afterInteractive">
            {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N26WCHT');
        `}
          </Script>

          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-88QD0GKD93%22%3E"
            strategy="afterInteractive"
          />

          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-11126108000"
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-88QD0GKD93');
              gtag('config', 'AW-11126108000');
            `}
          </Script>

          <Script id="google-ads" strategy="afterInteractive">
            {`
              function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-11126108000/EbA4CKvFxZYYEODeq7kp', 'event_callback': callback }); return false; }
            `}
          </Script>
        </>
      ) : null}

      <Header theme={theme} setTheme={setTheme} />

      <Component {...pageProps} theme={theme} />

      <BottomBar theme={theme} />

      {!loading && <PolicyBanner />}

      <Footer theme={theme} />
    </>
  );
}
