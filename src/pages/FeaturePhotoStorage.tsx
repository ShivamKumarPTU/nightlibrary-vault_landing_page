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

const FeaturePhotoStorage = () => (
  <div className="relative">
    <SEOHead 
      title="Best Photo Secure Storage App | Night Vault"
      description="Looking for a photo secure storage app? Night Vault hides your private photos with AES-256 military-grade encryption directly on your device."
      canonicalUrl="https://night-vault.vercel.app/features/photo-secure-storage-app"
    />
    {/* Noise Texture & Custom Cursor */}
    <div className="noise-overlay" />
    <CustomCursor />

    {/* Scroll progress bar */}
    <ScrollProgress />

    {/* Premium background layers */}
    <GradientMesh />
    <AuroraEffect />
    <ParticleCanvas />
    <LightStreaks />
    <FloatingElements />

    {/* Content */}
    <div className="relative z-10">
      <Navbar />
      <HeroSection 
        titleLine1="Secure Photos."
        titleLine2="Hide Media."
        titleLine3="Total Privacy."
        subtitleText="The ultimate photo secure storage app. Hide, lock, and manage your private pictures with unbreakable AES-256 encryption. Zero cloud storage."
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

export default FeaturePhotoStorage;
