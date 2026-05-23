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

const FeatureVideoDownloader = () => (
  <div className="relative">
    <SEOHead 
      title="Private Video Downloader App & Secure Player | Night Vault"
      description="The ultimate private video downloader app. Download, lock, and watch videos in a secure, AES-256 encrypted media player directly on your phone."
      canonicalUrl="https://night-vault.vercel.app/features/private-video-downloader-app"
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
        titleLine1="Private Videos."
        titleLine2="Secure Download."
        titleLine3="Hidden Player."
        subtitleText="The best private video downloader app. Save, lock, and watch your videos offline with zero tracking and military-grade encryption."
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

export default FeatureVideoDownloader;
