import { AboutSection } from "@/components/site/AboutSection";
import { ContactSection } from "@/components/site/ContactSection";
import { DestinationPreviewSection } from "@/components/site/DestinationPreviewSection";
import { GalleryPreviewSection } from "@/components/site/GalleryPreviewSection";
import { HeroSection } from "@/components/site/HeroSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { VideoSection } from "@/components/site/VideoSection";
import { getGalleryItems, getHomePageContent, getTestimonials, getTrips } from "@/lib/site-content";

export default async function HomePage() {
  const [homeContent, destinations, galleryItems, testimonials] = await Promise.all([
    getHomePageContent("fr"),
    getTrips("fr"),
    getGalleryItems("fr"),
    getTestimonials("fr"),
  ]);

  return (
    <main className="page-main">
      <HeroSection locale="fr" content={homeContent.hero} />
      <AboutSection locale="fr" content={homeContent.about} />
      <VideoSection locale="fr" content={homeContent.video} />
      <DestinationPreviewSection locale="fr" destinations={destinations} />
      <GalleryPreviewSection locale="fr" items={galleryItems} />
      <TestimonialsSection items={testimonials} locale="fr" />
      <ContactSection locale="fr" content={homeContent.contact} />
    </main>
  );
}
