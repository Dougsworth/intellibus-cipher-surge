import { useState, useEffect } from "react";

interface AnimatedLogoProps {
  variant?:
    | "rotate"
    | "pulse"
    | "bounce"
    | "fade"
    | "float"
    | "glow"
    | "pulse-rotate"
    | "bounce-rotate";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const AnimatedLogo = ({
  variant = "rotate",
  size = "md",
  className = "",
}: AnimatedLogoProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth animation start
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  };

  const animationClasses = {
    rotate: "animate-spin",
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    fade: "animate-pulse",
    float: "animate-logo-float",
    glow: "animate-logo-glow",
    "pulse-rotate": "animate-logo-pulse-rotate",
    "bounce-rotate": "animate-logo-bounce-rotate",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`
          ${sizeClasses[size]} 
          ${animationClasses[variant]}
          transition-opacity duration-500
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        <img
          src="/logo_transparent.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;
