import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import Header from "@/components/shared/Header";
import theme from "@/theme/theme";
import Footer from "@/components/shared/Footer";
import AosInit from './aos-init';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tianyin.in'),
  title: {
    default: 'Tianyin Worldtech India Pvt. Ltd.',
    template: '%s | Tianyin Worldtech India Pvt. Ltd.',
  },
  description:
    'Tianyin Worldtech India Pvt. Ltd. is a trusted OEM manufacturer of mobile phone chargers, power adapters, EV chargers, and PoE solutions in Noida, Uttar Pradesh.',
  keywords: [
    'Tianyin Worldtech',
    'OEM charger manufacturer',
    'mobile charger manufacturer India',
    'EV charger OEM',
    'PoE power solutions',
    'power adapter manufacturing Noida',
    'charger factory India',
    'Tianyin India',
  ],
  alternates: {
    canonical: 'https://tianyin.in',
  },
  openGraph: {
    title: 'Tianyin Worldtech India Pvt. Ltd.',
    description:
      'Leading OEM manufacturer of mobile chargers, EV chargers, and power adapters in India. Based in Noida, serving global tech brands.',
    url: 'https://tianyin.in',
    siteName: 'Tianyin Worldtech India Pvt. Ltd.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tianyin.in/og-image.jpg', // Real OG image
        width: 1200,
        height: 630,
        alt: 'Tianyin Worldtech India - OEM Charger Manufacturer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tianyin Worldtech India Pvt. Ltd.',
    description:
      'OEM manufacturer of chargers, adapters, and EV charging solutions. Based in Noida, India.',
    images: ['https://tianyin.in/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  authors: [
    {
      name: 'Tianyin Worldtech India Pvt. Ltd.',
      url: 'https://tianyin.in',
    },
  ],
  creator: 'Tianyin Worldtech India Pvt. Ltd.',
  publisher: 'Tianyin Worldtech India Pvt. Ltd.',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  generator: "Next.js 15.3, TypeScript, MUI, SEO-Optimized",
  applicationName: "Tianyin Worldtech Official Website",

};

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  userScalable: true,
  initialScale: 1.0
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/favicon.ico"
        sizes="32x32"
      />
      <link
        rel="icon"
        href="/icon.png"
        type="image/png"
        sizes="16x16"
      />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
        type="image/png"
        sizes="180x180"
      />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AosInit />
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
