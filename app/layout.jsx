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
      </head>
      <body>{children}</body>
    </html>
  );
}
