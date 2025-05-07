import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import Header from "@/components/shared/Header";
import theme from "@/theme/theme";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tianyin.in'), // Replace with your actual domain
  title: {
    default: 'Tianyin Worldtech India Pvt. Ltd.',
    template: '%s | Tianyin Worldtech',
  },
  description:
    'Tianyin Worldtech is a leading Indian manufacturer of mobile phone chargers and adapters. High-performance, OEM-ready power solutions.',
  keywords: [
    'mobile chargers',
    'phone adapters',
    'charger manufacturer',
    'Tianyin Worldtech India',
    'OEM power accessories',
  ],
  authors: [{ name: 'Tianyin Worldtech Team', url: 'https://tianyin.in' }],
  creator: 'Tianyin Worldtech India Pvt. Ltd.',
  openGraph: {
    title: 'Tianyin Worldtech India Pvt. Ltd.',
    description:
      'Mobile phone charger and adapter manufacturer in India. Trusted OEM supplier worldwide.',
    url: 'https://tianyin.in',
    siteName: 'Tianyin Worldtech',
    images: [
      {
        url: 'https://tianyin.in/og-image.jpg', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Tianyin Worldtech charger factory',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tianyin Worldtech India Pvt. Ltd.',
    description:
      'Reliable mobile charging solutions manufactured in India by Tianyin Worldtech.',
    images: ['https://tianyin.in/og-image.jpg'], // Replace with your actual OG image
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://tianyin.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Toolbar />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
