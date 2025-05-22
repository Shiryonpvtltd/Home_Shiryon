import { useState, useEffect } from 'react';

const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('what-we-build');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden pt-8">
      {/* Dramatic background with multiple layers */}
      <div className="absolute inset-0 bg-black">
        {/* Red gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-black"></div>
        
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #ff0000 0px,
              #ff0000 1px,
              transparent 10px,
              transparent 10px
            )`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-800/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 py-12 z-10">
        <div className={`transition-all duration-1000 transform text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Latin text with decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-16 bg-red-600"></div>
            <p className="text-gray-500 text-lg md:text-xl font-bold tracking-widest">Vidēmus. Ædificāmus. Domināmur</p>
            <div className="h-[1px] w-16 bg-red-600"></div>
          </div>

          {/* Main heading with dramatic gradient */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
            <div className="flex flex-col items-center">
              <div className="text-center">
                <span className="inline-block">We see.</span>
              </div>
              <div className="text-center">
                <span className="inline-block">We build.</span>
              </div>
              <div className="text-center">
                <span className="inline-block">We dominate.</span>
              </div>
            </div>
          </h1>

          {/* Subheading with accent */}
          <div className="relative mb-8">
            <p className="text-xl md:text-2xl font-light text-gray-300 font-serif">
              Revolutionizing Gym Apparel
            </p>
          </div>

          {/* Description with enhanced typography */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
              <span className="text-red-500 font-semibold font-sans">SHIRYON</span>: is not another activewear label. 
              <br />
              <span className="text-gray-300 italic font-serif">We are creating a new category.</span>
              <br />
              <span className="text-gray-400 font-light">Dedicated Gymwear — apparel engineered for squats, pulls, and presses.</span>
            </p>
          </div>

          {/* Enhanced CTA button */}
          <button
            className="group relative px-8 py-4 bg-transparent border-2 border-red-600 text-white rounded-full 
                     font-semibold overflow-hidden transition-all duration-300 hover:bg-red-600"
            onClick={() => window.location.href = '/career'}
          >
            <span className="relative z-10">Join Our Vision</span>
            <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
    
      </div>
    </section>
  );
};

export default IntroSection;
