import type {Metadata} from "next";
import {Inter} from "next/font/google";

import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Green Payer",
  description: "The one stop for metering payments",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <Head>
        <link ref={'stylesheet'} href={'/libs/glightbox/dist/css/glightbox.min.css'}/>
        <Link rel={'stylesheet'} href={'/css/theme.min.css'}/>
        {/*// <!-- Libs CSS -->*/}
        <link href={'/libs/simplebar/dist/simplebar.min.css'} rel="stylesheet"/>
        <link href={'/libs/bootstrap-icons/font/bootstrap-icons.min.css'} rel="stylesheet"/>

        {/*// <!-- Scroll Cue -->*/}
        <link rel={'stylesheet'} href={'/libs/scrollcue/scrollCue.css'}/>

        {/*// <!-- Box icons -->*/}
        <link rel={'stylesheet'} href={'/fonts/css/boxicons.min.css'}/>
      </Head>
      <body className={inter.className}>
        {children}
        <Script src={'/js/vendors/color-modes.js'}/>
        <Script src={'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'}/>
      </body>
    </html>
  )
}
