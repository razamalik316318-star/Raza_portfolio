import { SITE_URL } from '@/lib/site';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Malik Muhammad Raza',
    alternateName: 'Malik Raza',
    jobTitle: 'iOS Developer',
    description:
      'iOS Developer with 4+ years of experience building native applications with Swift, SwiftUI, and Objective-C, scalable mobile architecture, and App Store–ready releases.',
    url: SITE_URL,
    image: `${SITE_URL}/Profile.png`,
    sameAs: [
      'https://www.linkedin.com/in/malik-muhammad-raza-bba640352',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'Pakistan',
    },
    email: 'razamalik316318@gmail.com',
    telephone: '+923420368659',
    knowsAbout: [
      'iOS Development',
      'Swift',
      'SwiftUI',
      'Objective-C',
      'UIKit',
      'Mobile Software Engineering',
      'App Store',
      'Xcode',
      'Combine',
      'Core Data',
      'REST APIs',
      'GraphQL',
      'Unit Testing',
      'XCTest',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'iOS Developer',
      occupationLocation: {
        '@type': 'City',
        name: 'Lahore',
      },
      skills: [
        'Swift',
        'SwiftUI',
        'Objective-C',
        'UIKit',
        'Xcode',
        'Combine',
        'Core Data',
        'REST APIs',
      ],
    },
    worksFor: {
      '@type': 'Organization',
      name: 'AI For LYF',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
