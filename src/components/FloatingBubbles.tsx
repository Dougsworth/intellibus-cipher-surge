import React, { useState } from "react";

const imageUrls = [
  // HD quality images
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  // More HD images
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
];

// Generate random positions and sizes for bubbles with bounce animation
const getBubbleProps = (index: number) => {
  const sizes = [
    "w-24 h-24",
    "w-28 h-28",
    "w-32 h-32",
    "w-36 h-36",
    "w-40 h-40",
    "w-48 h-48",
  ];

  // Random positioning across the entire container (increased range)
  const top = Math.random() * 80; // 0-80% to allow more spread
  const left = Math.random() * 80; // 0-80% to allow more spread

  const size = sizes[index % sizes.length];
  const delay = `${(index % 8) * 0.5}s`;
  const duration = `${6 + (index % 4) * 3}s`; // Slowed down animation duration
  return {
    style: {
      top: `${top}%`,
      left: `${left}%`,
      animationDelay: delay,
      animationDuration: duration,
    },
    size,
  };
};

const FloatingBubbles = () => {
  const [selectedBubble, setSelectedBubble] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-muted border-b border-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground animate-fade-in-up tracking-tighter">
            INNOVATION GALLERY
          </h2>
          <div className="w-24 h-1 bg-foreground mx-auto mb-6"></div>
          <p
            className="text-xl text-muted-foreground font-mono animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            CLICK TO EXPLORE
          </p>
        </div>

        {/* Floating Bubbles Container */}
        <div className="relative h-96 md:h-[500px] bg-white border-2 border-border rounded-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-pattern"></div>
          </div>

          {/* Floating Bubbles */}
          {imageUrls.map((image, index) => {
            const { style, size } = getBubbleProps(index);
            return (
              <div
                key={index}
                className={`absolute ${size} animate-bounce-around cursor-pointer`}
                style={style}
                onClick={() => setSelectedBubble(index)}
              >
                <div
                  className={`w-full h-full rounded-full bg-cover bg-center border-2 border-white shadow-2xl hover:scale-110 transition-all duration-300 ${
                    selectedBubble === index ? "scale-150 z-50" : ""
                  }`}
                  style={{
                    backgroundImage: `url('${image}')`,
                    filter:
                      selectedBubble === index
                        ? "grayscale(0%)"
                        : "grayscale(100%)",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Modal for enlarged image */}
        {selectedBubble !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedBubble(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={imageUrls[selectedBubble]}
                alt="Enlarged gallery image"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setSelectedBubble(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes float-natural-1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(50px, -40px) rotate(2deg); }
          50% { transform: translate(-30px, -60px) rotate(-1deg); }
          75% { transform: translate(-40px, -20px) rotate(1deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes float-natural-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-45px, 50px) rotate(-2deg); }
          50% { transform: translate(60px, 30px) rotate(1deg); }
          75% { transform: translate(20px, -50px) rotate(-1deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes float-natural-3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, 60px) rotate(1deg); }
          50% { transform: translate(-50px, 40px) rotate(-2deg); }
          75% { transform: translate(-10px, -30px) rotate(0.5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes float-natural-4 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-60px, -20px) rotate(-1deg); }
          50% { transform: translate(-40px, 50px) rotate(2deg); }
          75% { transform: translate(50px, 10px) rotate(-0.5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        .animate-bounce-around {
          animation: float-natural-1 25s ease-in-out infinite;
          will-change: transform;
        }

        /* Individual bubble variations with alternating patterns */
        .animate-bounce-around:nth-child(odd) {
          animation: float-natural-1 30s ease-in-out infinite, float-natural-2 30s ease-in-out infinite 15s;
          animation-delay: 0.5s;
        }

        .animate-bounce-around:nth-child(even) {
          animation: float-natural-2 35s ease-in-out infinite, float-natural-3 35s ease-in-out infinite 17.5s;
          animation-delay: 1.5s;
        }

        .animate-bounce-around:nth-child(3n) {
          animation: float-natural-3 28s ease-in-out infinite, float-natural-4 28s ease-in-out infinite 14s;
          animation-delay: 2s;
        }

        .animate-bounce-around:nth-child(4n) {
          animation: float-natural-4 32s ease-in-out infinite, float-natural-1 32s ease-in-out infinite 16s;
          animation-delay: 0.8s;
        }

        .animate-bounce-around:nth-child(5n) {
          animation: float-natural-1 40s ease-in-out infinite, float-natural-3 40s ease-in-out infinite 20s;
          animation-delay: 1.2s;
        }

        .animate-bounce-around:nth-child(6n) {
          animation: float-natural-2 26s ease-in-out infinite, float-natural-4 26s ease-in-out infinite 13s;
          animation-delay: 2.5s;
        }

        /* Additional variations for more randomness */
        .animate-bounce-around:nth-child(7n) {
          animation: float-natural-3 34s ease-in-out infinite, float-natural-1 34s ease-in-out infinite 17s;
          animation-delay: 0.3s;
        }

        .animate-bounce-around:nth-child(8n) {
          animation: float-natural-4 38s ease-in-out infinite, float-natural-2 38s ease-in-out infinite 19s;
          animation-delay: 1.8s;
        }
      `}</style>
    </section>
  );
};

export default FloatingBubbles;
