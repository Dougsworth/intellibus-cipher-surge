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
    <section
      id="video-section"
      className="py-32 px-6 bg-muted border-b border-border relative overflow-hidden"
    >
      {/* Animated Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-foreground animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-foreground animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-2 h-2 bg-foreground animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-3 h-3 bg-foreground animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-black mb-8 text-foreground tracking-tight leading-tight">
            MISSION BRIEFING
          </h2>
          <div className="w-32 h-1 bg-foreground mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-4xl mx-auto leading-relaxed">
            WATCH THE CHALLENGE OVERVIEW
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Section */}
          <div className="space-y-8">
            <div className="relative bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-foreground text-background rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 ml-1" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-xl font-mono font-black text-foreground tracking-tight">
                      Challenge Video
                    </p>
                    <p className="text-sm text-muted-foreground font-mono">
                      Coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge Categories with Auto-Carousel */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-mono font-black text-foreground tracking-tight leading-tight">
              CHALLENGE CATEGORIES
            </h3>

            {/* Content Container */}
            <div className="relative min-h-80">
              {/* Challenge Categories Cards */}
              <div
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  showImages ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">
                  {/* Cryptography */}
                  <div className="group bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-foreground/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-foreground text-background rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-mono font-black text-foreground mb-2 tracking-tight leading-tight">
                          Cryptography
                        </h4>
                        <p className="text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                          Decode encrypted messages and break complex ciphers
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Forensics */}
                  <div className="group bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-foreground/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-foreground text-background rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-mono font-black text-foreground mb-2 tracking-tight leading-tight">
                          Forensics
                        </h4>
                        <p className="text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                          Analyze digital evidence and uncover hidden data
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Web Exploitation */}
                  <div className="group bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-foreground/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-foreground text-background rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-mono font-black text-foreground mb-2 tracking-tight leading-tight">
                          Web Exploitation
                        </h4>
                        <p className="text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                          Find vulnerabilities in web applications
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Reverse Engineering */}
                  <div className="group bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-foreground/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-foreground text-background rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-mono font-black text-foreground mb-2 tracking-tight leading-tight">
                          Reverse Engineering
                        </h4>
                        <p className="text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                          Analyze and understand compiled programs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Set of Cards */}
              <div
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  showImages ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">
                  {/* Binary Exploitation */}
                  <div className="group bg-card border border-border rounded-lg p-6 hover:border-foreground/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-mono font-black text-foreground mb-2 tracking-tight leading-tight">
                          Binary Exploitation
                        </h4>
                        <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                          Exploit memory corruption vulnerabilities
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Steganography */}
                  <div className="group bg-card border border-border rounded-lg p-6 hover:border-foreground/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-mono font-black text-foreground mb-2 tracking-tight leading-tight">
                          Steganography
                        </h4>
                        <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                          Find hidden messages in images and files
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Network Security */}
                  <div className="group bg-card border border-border rounded-lg p-6 hover:border-foreground/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-mono font-black text-foreground mb-2 tracking-tight leading-tight">
                          Network Security
                        </h4>
                        <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                          Analyze network traffic and protocols
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Security */}
                  <div className="group bg-card border border-border rounded-lg p-6 hover:border-foreground/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-mono font-black text-foreground mb-2 tracking-tight leading-tight">
                          Mobile Security
                        </h4>
                        <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                          Test mobile app security and vulnerabilities
                        </p>
                      </div>
                    </div>
                  </div>
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
