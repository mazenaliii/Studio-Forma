import Image from "next/image";
import HeroSection from "./components/main/Hero";
import AboutSection from "./components/main/homeAboutSection";
import GallerySection from "./components/main/gallery";
import FeedbackSection from "./components/main/feedBackSection";
import { Contact } from "lucide-react";
import ContactSection from "./components/main/Contact";
import Footer from "./components/main/Footer";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <FeedbackSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
