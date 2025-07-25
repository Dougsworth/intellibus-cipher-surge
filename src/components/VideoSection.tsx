import React, { useState, useEffect } from "react";
import { Play, Shield, Target, Zap, Code } from "lucide-react";

const VideoSection = () => {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImages((prev) => !prev);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  ];

  return (
    <section id="video-section" className="py-24 px-4 bg-muted border-b border-border relative overflow-hidden">
      {/* Animated Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-foreground animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-foreground animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-foreground animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-foreground animate-pulse" style={{ animationDelay: "3s" }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground animate-fade-in-up tracking-tighter">
            MISSION BRIEFING
          </h2>
          <div className="w-24 h-1 bg-foreground mx-auto mb-6"></div>
          <p
            className="text-xl text-muted-foreground font-mono animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            WATCH THE CHALLENGE OVERVIEW
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="space-y-6">
            <div className="relative bg-card border-2 border-border rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-foreground text-background rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-10 h-10 ml-1" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-bold text-foreground">
                      Challenge Video
                    </p>
                    <p className="text-sm text-muted-foreground">Coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge Categories with Auto-Carousel */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-foreground tracking-tight">
              CHALLENGE CATEGORIES
            </h3>

            {/* Content Container */}
            <div className="relative h-80">
              {/* Challenge Categories Cards */}
              <div
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  showImages ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Cryptography */}
                  <div className="group bg-gradient-to-br from-white via-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl p-4 hover:border-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-black text-gray-900 mb-1">
                          Cryptography
                        </h4>
                        <p className="text-xs text-gray-600">
                          Decode encrypted messages and break complex ciphers
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Forensics */}
                  <div className="group bg-gradient-to-br from-white via-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl p-4 hover:border-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-black text-gray-900 mb-1">
                          Digital Forensics
                        </h4>
                        <p className="text-xs text-gray-600">
                          Analyze digital evidence and recover hidden data
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Web Exploitation */}
                  <div className="group bg-gradient-to-br from-white via-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl p-4 hover:border-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-black text-gray-900 mb-1">
                          Web Exploitation
                        </h4>
                        <p className="text-xs text-gray-600">
                          Find vulnerabilities and exploit web applications
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Reverse Engineering */}
                  <div className="group bg-gradient-to-br from-white via-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl p-4 hover:border-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-black text-gray-900 mb-1">
                          Reverse Engineering
                        </h4>
                        <p className="text-xs text-gray-600">
                          Analyze and understand complex software systems
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Images Grid */}
              <div
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  showImages ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-2 gap-4 h-full">
                  {backgroundImages.map((image, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-cover bg-center shadow-lg"
                      style={{
                        backgroundImage: `url('${image}')`,
                        filter: "grayscale(100%) brightness(0.8)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
