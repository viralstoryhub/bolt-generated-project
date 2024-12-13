import React, { useState, useEffect, useRef } from 'react';
import { Coins } from 'lucide-react';

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardRotation, setCardRotation] = useState({ x: 15, y: 25 });
  const [isCardHovering, setIsCardHovering] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // **IMPORTANT: Set your actual pre-sale start date here**
    const targetDate = new Date('2024-12-31T00:00:00Z'); // Example: December 31, 2024, at midnight UTC

    // Check if the target date is valid and in the future
    if (isNaN(targetDate.getTime()) || targetDate.getTime() < new Date().getTime()) {
      console.error("Invalid target date. Please set a valid future date for the pre-sale.");
      return; // Stop the timer setup
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Ensure timer shows 0 when finished
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isCardHovering && cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const rotateY = (deltaX / rect.width) * 20;
        const rotateX = -(deltaY / rect.height) * 20;
        setCardRotation({ x: rotateX, y: rotateY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isCardHovering]);

  return (
    <section className="relative h-screen flex items-start overflow-hidden">
      {/* Background and overlay */}
      <div className="absolute inset-0 z-0 bg-black" />

      {/* Main content container */}
      <div className="relative w-full pt-32 lg:pt-40 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
            {/* Left side content */}
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Discover the Future of Crypto Trading with SolAIra
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                AI-powered insights, secure transactions, and smarter trading for everyone
              </p>
            </div>

            {/* Floating Card on right side */}
            <div 
              ref={cardRef}
              className="w-[420px] perspective-2000 hidden lg:block"
              onMouseEnter={() => setIsCardHovering(true)}
              onMouseLeave={() => {
                setIsCardHovering(false);
                setCardRotation({ x: 15, y: 25 });
              }}
            >
              <div 
                className="relative transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg)`,
                  transformStyle: 'preserve-3d',
                  animation: isCardHovering ? 'none' : 'floatingCard 6s ease-in-out infinite'
                }}
              >
                {/* Card */}
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 rounded-2xl aspect-[1.586/1] relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-black opacity-20" />
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                  <div className="relative">
                    <div className="flex justify-between items-start">
                      <Coins className="w-12 h-12 text-white" />
                      <div className="text-right">
                        <div className="text-white font-bold">SolAIra</div>
                        <div className="text-white/80 text-sm">CRYPTO CARD</div>
                      </div>
                    </div>
                    
                    <div className="mt-16">
                      <div className="text-white/80 text-sm mb-1">Card Number</div>
                      <div className="font-mono text-white text-xl tracking-wider">•••• •••• •••• 4242</div>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-end">
                      <div>
                        <div className="text-white/80 text-sm">Card Holder</div>
                        <div className="text-white">JOHN DOE</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full" />
                        <div className="w-8 h-8 bg-white/30 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card reflection */}
                <div 
                  className="absolute top-full left-0 right-0 h-full bg-gradient-to-b from-white/20 to-transparent transform-gpu scale-y-[-0.2] blur-sm opacity-50"
                  style={{ transformOrigin: 'top' }}
                />

                {/* Glowing effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl -z-10" />
              </div>
            </div>
          </div>

          {/* Pre-sale Timer */}
          <div className="mt-20 w-full flex justify-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 sm:p-8 rounded-lg border border-blue-500/20 w-full max-w-2xl">
              <h3 className="text-xl sm:text-2xl text-white mb-4 text-center">Pre-sale Starts In:</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400">{timeLeft.days}</div>
                  <div className="text-gray-400 text-sm sm:text-base">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400">{timeLeft.hours}</div>
                  <div className="text-gray-400 text-sm sm:text-base">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400">{timeLeft.minutes}</div>
                  <div className="text-gray-400 text-sm sm:text-base">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400">{timeLeft.seconds}</div>
                  <div className="text-gray-400 text-sm sm:text-base">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </section>
  );
}
