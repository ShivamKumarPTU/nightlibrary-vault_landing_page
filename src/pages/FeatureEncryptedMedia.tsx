import ParticleCanvas from "@/components/landing/ParticleCanvas";
import GradientMesh from "@/components/landing/GradientMesh";
import LightStreaks from "@/components/landing/LightStreaks";
import AuroraEffect from "@/components/landing/AuroraEffect";
import FloatingElements from "@/components/landing/FloatingElements";
import ScrollProgress from "@/components/landing/ScrollProgress";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import MarqueeTicker from "@/components/landing/MarqueeTicker";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";
import ContactSection from "@/components/landing/Contact"; 
import Footer from "@/components/landing/Footer";
import CustomCursor from "@/components/landing/CustomCursor";
import SEOHead from "@/components/SEOHead";

const FeatureEncryptedMedia = () => (
  <div className="relative">
    <SEOHead 
      title="Top Encrypted Media App | 256-Bit Vault | Night Vault"
      description="Secure your digital life with the top encrypted media app. Store files, photos, passwords, and videos using offline 256-bit encryption. Zero cloud storage."
      canonicalUrl="https://night-vault.vercel.app/features/encrypted-media-app"
    />
    <div className="noise-overlay" />
    <CustomCursor />
    <ScrollProgress />
    <GradientMesh />
    <AuroraEffect />
    <ParticleCanvas />
    <LightStreaks />
    <FloatingElements />
    <div className="relative z-10">
      <Navbar />
      <HeroSection 
        titleLine1="Encrypted Media."
        titleLine2="Zero Cloud."
        titleLine3="100% Offline."
        subtitleText="The premium encrypted media app for your sensitive files. Encrypt photos, videos, and documents with AES-256 on your own device."
      />
      <MarqueeTicker />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection /> 
      <Footer />
    </div>
  </div>
);

export default FeatureEncryptedMedia;
