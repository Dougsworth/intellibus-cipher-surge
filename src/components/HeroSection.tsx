import React from "react";
import { Button } from "@/components/ui/button";
import { Terminal, Code, Cpu } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

interface HeroSectionProps {
  onOpenForm: () => void;
}

const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-16 md:py-24 bg-background border-b border-border">
      {/* Geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-4 h-4 bg-foreground rotate-45 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-foreground animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-40 w-2 h-2 bg-foreground animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-5 h-5 bg-foreground rotate-45 animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Animated Logo - Responsive positioning */}
      <div className="absolute top-1/3 md:top-1/4 left-1/2 transform -translate-x-1/2 pointer-events-none z-20">
        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 opacity-80 md:opacity-90 animate-logo-float">
          <img
            src="/logo_transparent.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Icon set */}
        <div className="flex justify-center mb-8 md:mb-10 animate-fade-in-up">
          <div className="flex space-x-6 md:space-x-8">
            <Terminal className="w-12 h-12 md:w-16 md:h-16 text-foreground animate-pulse-slow hover:scale-110 transition-transform duration-300" />
            <Code
              className="w-12 h-12 md:w-16 md:h-16 text-foreground animate-pulse-slow hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: "0.5s" }}
            />
            <Cpu
              className="w-12 h-12 md:w-16 md:h-16 text-foreground animate-pulse-slow hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-6 md:mb-8 animate-scale-in tracking-tight leading-tight">
          <span className="text-foreground hover:animate-glitch-text transition-all duration-300">
            CRACK
          </span>
          <br />
          <span className="text-foreground border-b-2 md:border-b-4 border-foreground animate-glitch-sporadic transition-all duration-300">
            THE CODE
          </span>
        </h1>

        {/* Subtitle with enhanced animations */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-foreground relative group text-center">
          <span className="relative z-10 animate-road-tour-glow animate-road-tour-pulse">
            <span className="inline-block animate-typing overflow-hidden whitespace-nowrap opacity-0">
              INTELLIBUS ROAD TOUR
            </span>
          </span>
        </h2>

        {/* Description */}
        <div className="mb-10 md:mb-12 animate-slide-in-right">
          <p className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-muted-foreground font-mono leading-relaxed">
            24 HOURS TO BREAK BARRIERS
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground font-bold leading-relaxed">
            DECODE THE FUTURE. YOUR MISSION STARTS NOW.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 md:flex md:justify-center animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Button
            onClick={onOpenForm}
            className="w-full md:w-auto bg-foreground hover:bg-foreground/90 text-background font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-none transform hover:scale-105 transition-all duration-300 shadow-lg border-2 border-foreground animate-hover-glow"
          >
            ACCEPT MISSION
          </Button>

          <Button
            variant="outline"
            className="w-full md:w-auto border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-none transform hover:scale-105 transition-all duration-300 animate-hover-glow"
            onClick={() =>
              document
                .getElementById("video-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            WATCH TRAILER
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
