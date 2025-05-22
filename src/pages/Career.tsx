import HeroSection from '../components/sections/career/HeroSection';
import OpenOpportunitiesSection from '../components/sections/career/OpenOpportunitiesSection';
import WhyShiryonSection from '../components/sections/career/WhyShiryonSection';
import ApplicationFormSection from '../components/sections/career/ApplicationFormSection';
import Footer from '../components/layout/Footer';

const Career = () => {
  return (
    <div className="min-h-screen bg-white">
      <div id="hero">
        <HeroSection />
      </div>

      <div id="opportunities">
        <OpenOpportunitiesSection />
      </div>

      <div id="why-shiryon">
        <WhyShiryonSection />
      </div>

      <div id="apply">
        <ApplicationFormSection />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Career; 