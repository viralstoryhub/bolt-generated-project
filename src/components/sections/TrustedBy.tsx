import React from 'react';

const companies = [
  {
    name: 'Google',
    logo: 'https://loodibee.com/wp-content/uploads/Google-Logo.png',
  },
  {
    name: 'AWS',
    logo: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png',
  },
  {
    name: 'Aptos',
    logo: 'https://miro.medium.com/v2/resize:fit:1400/1*8XWubwyxdhdTY8OZa_gZYA.jpeg',
  },
  {
    name: 'Sui',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNexcDQElBSuSktOrWNuyxb2gV6qHvO01s1w&s',
  },
  {
    name: 'Injective',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Injectivelabs_logo.png',
  },
  {
    name: 'Virtuals',
    logo: 'https://www.virtuals.io/new-mobile-logo.svg',
  },
  {
    name: 'Theta',
    logo: 'https://crescentcitycapital.com/wp-content/uploads/2022/10/theta-logo.png',
  },
  {
    name: 'IQ',
    logo: 'https://iq.wiki/_next/image?url=https%3A%2F%2Fipfs.everipedia.org%2Fipfs%2FQmNoSyub5WvwToVe2sWnhkLGXBa9EtgefUJAcqFR4SBLnD&w=3840&q=95',
  },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="marquee">
          <div className="marquee-content">
            {companies.map((company, index) => (
              <div key={index} className="marquee-item">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-16 w-auto"
                />
              </div>
            ))}
            {/* Duplicate the logos to create an infinite loop effect */}
            {companies.map((company, index) => (
              <div key={index} className="marquee-item">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-16 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
