import React from 'react';

const companies = [
  {
    name: '10Web',
    logo: 'https://www.webdew.com/wp-content/uploads/2023/12/10web-logo-1.png',
  },
  {
    name: 'Microsoft',
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png',
  },
  {
    name: 'OpenAI',
    logo: 'https://freepnglogo.com/images/all_img/1702059309openai-logo-png.png',
  },
  {
    name: 'Anthropic AI',
    logo: 'https://logovtor.com/wp-content/uploads/2021/06/anthropic-ai-logo-vector.png',
  },
  {
    name: 'Nvidia',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdG1UQbKJH1swnJgLUBBUjs5HJoV6qNcsIDA&s',
  },
  {
    name: 'AWS',
    logo: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png',
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
