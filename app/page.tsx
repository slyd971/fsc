import { AboutSection } from "@/components/site/AboutSection";
import { ContactSection } from "@/components/site/ContactSection";
import { DestinationPreviewSection } from "@/components/site/DestinationPreviewSection";
import { GalleryPreviewSection } from "@/components/site/GalleryPreviewSection";
import { HeroSection } from "@/components/site/HeroSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { VideoSection } from "@/components/site/VideoSection";

export default function HomePage() {
  return (
    <main className="page-main">
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <DestinationPreviewSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
