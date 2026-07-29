import Script from "next/script";
import "./globals.css";

export const metadata = {
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
  openGraph: {
    title: "Human Milk Bank | Rio Children's Hospital",
    description:
      "Safe, screened and pasteurised donor milk for premature and critically ill newborns. Operational 365 days a year.",
    type: "website",
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
