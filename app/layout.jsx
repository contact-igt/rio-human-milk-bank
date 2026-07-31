import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://milkbank.riochildrenshospital.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Human Milk Bank — Screened Donor Milk for Newborns | Rio Children's Hospital",
  description:
    "Rio's Human Milk Bank provides safe, screened and pasteurised donor breast milk for premature and critically ill newborns in Tamil Nadu — operating 365 days a year.",
  keywords: [
    "human milk bank",
    "donor breast milk",
    "premature baby care",
    "NICU feeding support",
    "Rio Children's Hospital",
    "Tamil Nadu",
  ],
  authors: [{ name: "Rio Children's Hospital" }],
  creator: "Rio Children's Hospital",
  publisher: "Rio Children's Hospital",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/shared/riologov2.png",
  },
  openGraph: {
    title: "Human Milk Bank — Screened Donor Milk for Newborns | Rio Children's Hospital",
    description:
      "Rio's Human Milk Bank provides safe, screened and pasteurised donor breast milk for premature and critically ill newborns in Tamil Nadu — operating 365 days a year.",
    url: SITE_URL,
    siteName: "Rio Children's Hospital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/human-milk-bank/og-banner.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Rio Children's Hospital Human Milk Bank Banner",
      },
      {
        url: "/assets/human-milk-bank/human-milk-bank.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Rio Children's Hospital Human Milk Bank",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Milk Bank — Screened Donor Milk | Rio Children's Hospital",
    description:
      "Safe, screened and pasteurised donor milk for premature and critically ill newborns. Operational 365 days a year.",
    images: ["/assets/human-milk-bank/og-banner.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#303573",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-58JNDR6V');
            `,
          }}
        />
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2191156241741040');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* Microsoft Clarity Code */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xu1jdqq4x7");
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58JNDR6V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2191156241741040&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
