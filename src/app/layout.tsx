import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono, Inter_Tight, Tektur } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

// import Layout from "@/layout/Layout";
import JotaiProvider from "../providers/JotaiProvider";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import { ThemeProvider } from "next-themes";
import {
  KEYWORD,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  // THUMBNAIL,
} from "../constant/metadata";
import Layout from "../layout/Layout";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tektur = Tektur({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: KEYWORD,
  publisher: "A-Star Group",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    countryName: "Vietnam",
    // images: {
    //   url: SITE_URL + THUMBNAIL.src,
    //   secureUrl: THUMBNAIL.src,
    //   type: "image/png",
    //   width: THUMBNAIL.width,
    //   height: THUMBNAIL.height,
    // },
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // images: {
    //   url: SITE_URL + THUMBNAIL.src,
    //   secureUrl: THUMBNAIL.src,
    //   type: "image/png",
    //   width: THUMBNAIL.width,
    //   height: THUMBNAIL.height,
    // },
  },
  appleWebApp: {
    capable: true,
    title: SITE_TITLE,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <base href="/" />
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=21600, must-revalidate"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Yield Play Description" />
        <meta itemProp="description" content="Yield Play Description" />
        <meta
          name="keywords"
          content="Defi, chat, bot, staking, vault, deposit, borrow, base, bsc, web3"
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://app.aimstrong.ai" /> */}
        <meta property="og:title" content="Yield Play" />
        <meta property="og:description" content="Yield Play Description" />

        <meta property="og:image" content="/image/logo.png" />
        {/* <meta property="og:image:type" content="bg.jpg" /> */}
        {/* <meta property="og:image:width" content="1073" />
        <meta property="og:image:height" content="483" />
        <meta itemProp="image" content="/bg.jpg" />
        <meta name="twitter:image" content="/bg.jpg" />
        <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content="Yield Play" />
        <meta name="twitter:description" content="Yield Play Description" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <meta name="revisit-after" content="0 days" />
        <meta
          name="ROBOTS"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <meta name="googlebot" content="index,follow" />
        <meta name="BingBOT" content="index,follow" />
        <meta name="yahooBOT" content="index,follow" />
        <meta name="slurp" content="index,follow" />
        <meta name="msnbot" content="index,follow" />
        <meta name="language" content="English" />
        <meta property="og:site_name" content="Yield Play" />

        <title>Yield Play</title>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W3K5S42W');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Telegram Widget Script */}
        <Script
          src="https://telegram.org/js/telegram-widget.js?22"
          strategy="afterInteractive"
        />
        {/* End Telegram Widget Script */}
      </head>
      <body
        suppressHydrationWarning
        className={`${tektur.className} ${interTight.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <JotaiProvider>
            <ReactQueryProvider>
              <Layout>{children}</Layout>
            </ReactQueryProvider>
          </JotaiProvider>
          {/* {process.env.NODE_ENV === "development" && (
            <div
              style={{
                position: "fixed",
                bottom: 16,
                right: 16,
                cursor: "pointer",
              }}
            >
              <Link href="/assets/typography" title="Typography Test Page">
                <BugIcon />
              </Link>
            </div>
          )} */}
        </ThemeProvider>

        <ToastContainer />
      </body>
    </html>
  );
}
