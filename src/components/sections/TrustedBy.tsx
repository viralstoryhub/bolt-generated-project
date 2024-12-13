import React from 'react';

const companies = [
  {
    name: 'Alibaba',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Alibaba_logo.svg/1280px-Alibaba_logo.svg.png',
  },
  {
    name: 'Arbitrum',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Arbitrum_logo.svg/1280px-Arbitrum_logo.svg.png',
  },
  {
    name: 'Cosmose AI',
    logo: 'https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/pfiwd775zmgib75l6f5c',
  },
  {
    name: 'EigenLayer',
    logo: 'https://eigenlayer.xyz/logo.png',
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
  },
  {
    name: 'ICC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/International_Cricket_Council_logo.svg/1280px-International_Cricket_Council_logo.svg.png',
  },
  {
    name: 'dropt',
    logo: 'https://pbs.twimg.com/profile_images/1674824449836195840/5-Hbcdgq_400x400.jpg',
  },
  {
    name: 'SAIL GP',
    logo: 'https://sailgp.com/site-elements/images/sailgp-logo-white.svg',
  },
  {
    name: 'Shemaroo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Shemaroo_new_logo.svg/2560px-Shemaroo_new_logo.svg.png',
  },
  {
    name: 'MARBLEX',
    logo: 'https://www.marblx.io/img/logo.png',
  },
  {
    name: 'Polygon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Polygon_blockchain_logo.svg/1280px-Polygon_blockchain_logo.svg.png',
  },
  {
    name: 'SWEAT',
    logo: 'https://pbs.twimg.com/profile_images/1696864979375550464/IvAN-7-I_400x400.jpg',
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
              <div key={index + companies.length} className="marquee-item">
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
