import { AboutSection } from "@/components/site/AboutSection";
import { ContactSection } from "@/components/site/ContactSection";
import { DestinationPreviewSection } from "@/components/site/DestinationPreviewSection";
import { GalleryPreviewSection } from "@/components/site/GalleryPreviewSection";
import { HeroSection } from "@/components/site/HeroSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { VideoSection } from "@/components/site/VideoSection";
import { getGalleryItems, getHomePageContent, getTestimonials, getTrips } from "@/lib/site-content";

export default async function HomePageEn() {
  const [homeContent, destinations, galleryItems, testimonials] = await Promise.all([
    getHomePageContent("en"),
    getTrips("en"),
    getGalleryItems("en"),
    getTestimonials("en"),
  ]);

  return (
    <main className="page-main">
      <HeroSection locale="en" content={homeContent.hero} />
      <AboutSection locale="en" content={homeContent.about} />
      <VideoSection locale="en" content={homeContent.video} />
      <DestinationPreviewSection locale="en" destinations={homeContent.destinations.items ?? destinations} content={homeContent.destinations} />
      <GalleryPreviewSection locale="en" items={homeContent.gallery.items ?? galleryItems} content={homeContent.gallery} />
      <TestimonialsSection
        items={homeContent.testimonials.items ?? testimonials}
        locale="en"
        backgroundWord={homeContent.testimonials.backgroundWord}
        content={homeContent.testimonials}
      />
      <ContactSection locale="en" content={homeContent.contact} />
    </main>
  );
}
