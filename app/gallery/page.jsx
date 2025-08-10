import React from "react";
import HeaderTitle from "../components/ui/headerTitle";
import GalleryCard from "../components/ui/projectPreviewCard";
import ComingSoon from '../components/main/comingSoon'
import Footer from "../components/main/Footer";
import ContactSection from "../components/main/Contact";

const GalleryPage = () => {
  const projects = [
    {
      id: 1,
      month: "March",
      title: "Modern Minimalist Haven",
      description:
        "A serene, sunlit living room with minimalist decor and warm wood accents.",
      image:
        "/mix-minimal-nordic-interior-design-with-japanese-wabi-sabi-style.jpg",
    },
    {
      id: 2,
      month: "April",
      title: "Urban Loft Transformation",
      description:
        "A stylish loft with industrial touches and contemporary art.",
      image: "/retro-living-room-interior-design.jpg",
    },
    {
      id: 3,
      month: "May",
      title: "Sophisticated Living Space",
      description:
        "A luxury living room with plush seating and elegant lighting.",
      image: "/luxury-living-room-modern-elegance-comfort-generated-by-ai.jpg",
    },
    {
      id: 4,
      month: "August",
      title: "Contemporary Workspace",
      description: "A modern workspace with clean lines and calming tones.",
      image:
        "/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-working-table.jpg",
    },
    {
      id: 5,
      month: "March",
      title: "Modern Minimalist Haven",
      description:
        "A serene, sunlit living room with minimalist decor and warm wood accents.",
      image:
        "/mix-minimal-nordic-interior-design-with-japanese-wabi-sabi-style.jpg",
    },
    {
      id: 6,
      month: "April",
      title: "Urban Loft Transformation",
      description:
        "A stylish loft with industrial touches and contemporary art.",
      image: "/retro-living-room-interior-design.jpg",
    },
    {
      id: 7,
      month: "May",
      title: "Sophisticated Living Space",
      description:
        "A luxury living room with plush seating and elegant lighting.",
      image: "/luxury-living-room-modern-elegance-comfort-generated-by-ai.jpg",
    },
    {
      id: 8,
      month: "August",
      title: "Contemporary Workspace",
      description: "A modern workspace with clean lines and calming tones.",
      image:
        "/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-working-table.jpg",
    },
    {
      id: 9,
      month: "March",
      title: "Modern Minimalist Haven",
      description:
        "A serene, sunlit living room with minimalist decor and warm wood accents.",
      image:
        "/mix-minimal-nordic-interior-design-with-japanese-wabi-sabi-style.jpg",
    },
    {
      id: 10,
      month: "April",
      title: "Urban Loft Transformation",
      description:
        "A stylish loft with industrial touches and contemporary art.",
      image: "/retro-living-room-interior-design.jpg",
    },
    {
      id: 11,
      month: "May",
      title: "Sophisticated Living Space",
      description:
        "A luxury living room with plush seating and elegant lighting.",
      image: "/luxury-living-room-modern-elegance-comfort-generated-by-ai.jpg",
    },
    {
      id: 12,
      month: "August",
      title: "Contemporary Workspace",
      description: "A modern workspace with clean lines and calming tones.",
      image:
        "/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-working-table.jpg",
    },
  ];
  return (
    <div>
      <HeaderTitle
        breadcrumb="HOME"
        currentPage="GALLERY"
        titlePrimary="OUR"
        titleSecondary="GALLERY"
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {projects.map((project, index) => (
            <GalleryCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
      <ComingSoon />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default GalleryPage;
