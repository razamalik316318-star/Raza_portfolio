import type { Metadata } from 'next';
import './globals.css';
import { SITE_URL } from '@/lib/site';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Malik Muhammad Raza - iOS Developer | Portfolio',
    template: '%s | Malik Muhammad Raza',
  },
  description:
    'Malik Muhammad Raza - iOS Developer with 4+ years of experience building native apps with Swift, SwiftUI, and Objective-C, polished UX, and App Store–ready releases for teams and clients.',
  keywords: [
    'Malik Muhammad Raza',
    'Malik Raza',
    'iOS Developer',
    'Swift',
    'Swift Developer',
    'SwiftUI',
    'Objective-C',
    'UIKit',
    'Mobile Developer',
    'Apple Developer',
    'iOS Engineer',
    'App Store',
    'Xcode',
    'Combine',
    'Core Data',
    'Lahore Developer',
    'Pakistan Developer',
    'Portfolio',
    'Native iOS',
    'Software Development',
  ],
  authors: [{ name: 'Malik Muhammad Raza' }],
  creator: 'Malik Muhammad Raza',
  publisher: 'Malik Muhammad Raza',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Malik Muhammad Raza - Portfolio',
    title: 'Malik Muhammad Raza - iOS Developer',
    description:
      'iOS Developer with 4+ years of experience shipping native apps with Swift, SwiftUI, Objective-C, and UIKit—from architecture to App Store release.',
    images: [
      {
        url: `${siteUrl}/Profile.png`,
        width: 1200,
        height: 630,
        alt: 'Malik Muhammad Raza - iOS Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malik Muhammad Raza - iOS Developer',
    description:
      'iOS Developer with 4+ years of experience. Swift, SwiftUI, Objective-C, UIKit, and App Store delivery.',
    images: [`${siteUrl}/Profile.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  // Google Search Console verification via HTML file method
  // Verification file: public/googlebc07bcebb0efe8f0.html
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
