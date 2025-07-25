import React from "react";
import { Camera, Eye, Sparkles } from "lucide-react";

interface GallerySectionProps {
  onOpenForm: () => void;
}

const GallerySection = ({ onOpenForm }: GallerySectionProps) => {
  const images = [
    {
      src: "/pic3.jpg",
      alt: "Triumph Ceremony",
      title: "Triumph",
      description: "The ultimate victory celebration",
      category: "Values",
    },
    {
      src: "/pic2.jpg",
      alt: "Excellence Ceremony",
      title: "Excellence",
      description: "Honoring outstanding performance",
      category: "Values",
    },
    {
      src: "/pic1.jpg",
      alt: "Recognition Ceremony",
      title: "Recognition",
      description: "Celebrating achievement and dedication",
      category: "Values",
    },
  ];

  const scrollToNextSection = () => {
    const howItWorksSection = document.getElementById("how-it-works");
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback to next section if How It Works section is not found
      const nextSection = document.querySelector(
        'section:not([class*="py-32"])'
      );
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background to-muted/20 border-b border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Camera className="w-8 h-8 text-foreground" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              Achievement Gallery
            </h2>
          </div>
          <div className="w-24 h-0.5 bg-foreground mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the energy and excitement of our previous hackathons
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {images.map((image, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-foreground/30"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-foreground">
                    {image.title}
                  </h3>
                  <Sparkles className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:animate-pulse transition-all duration-300" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
              Ready to Join the Experience?
            </h3>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Be part of the next chapter in our Road Tour journey. Register now
              and secure your spot in this incredible event.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onOpenForm}
                className="bg-foreground hover:bg-foreground/90 text-background font-bold text-base px-6 py-3 rounded-none transition-all duration-300 border-2 border-foreground"
              >
                REGISTER NOW
              </button>
              <button
                onClick={scrollToNextSection}
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold text-base px-6 py-3 rounded-none transition-all duration-300"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
