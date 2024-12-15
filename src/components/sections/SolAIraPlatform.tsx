import React from 'react';

    export default function SolAIraPlatform() {
      return (
        <section id="solaiyra-platform" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="bg-gray-800 rounded-xl p-1 shadow-2xl">
                <img
                  src="https://i.ibb.co/v1N4n3c/solaira-platform.png"
                  alt="SolAIra Platform"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Right: Text Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Trade with Confidence on the SolAIra Platform
                </h2>
                <p className="text-gray-400 text-lg">
                  Experience the future of crypto trading with SolAIra's intuitive and powerful platform.
                  Designed for both beginners and seasoned traders, our platform offers a seamless trading
                  experience with advanced features, real-time data, and robust security.
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                  <li>
                    <span className="font-medium text-white">Intuitive Interface:</span> Navigate the complexities
                    of crypto trading with ease.
                  </li>
                  <li>
                    <span className="font-medium text-white">Advanced Charting:</span> Dive deep into market
                    analysis with customizable charts and indicators.
                  </li>
                  <li>
                    <span className="font-medium text-white">AI-Powered Insights:</span> Leverage smart
                    recommendations to enhance your trading strategy.
                  </li>
                  <li>
                    <span className="font-medium text-white">Secure Transactions:</span> Trade with peace of
                    mind, knowing your assets are protected by industry-leading security.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      );
    }
