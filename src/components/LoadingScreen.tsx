import { useState, useEffect } from "react";
import AnimatedLogo from "./AnimatedLogo";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
  showText?: boolean;
}

const LoadingScreen = ({
  onLoadingComplete,
  duration = 3000,
  showText = true,
}: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Add a small delay before completing
        setTimeout(() => {
          setIsLoading(false);
          onLoadingComplete?.();
        }, 500);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [duration, onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-75 animate-particle-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-75 animate-particle-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-ping opacity-75 animate-particle-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-500 rounded-full animate-ping opacity-75 animate-particle-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-ping opacity-75 animate-particle-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-green-500 rounded-full animate-ping opacity-75 animate-particle-float"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center animate-fade-in-up">
        {/* Animated Logo */}
        <AnimatedLogo variant="pulse-rotate" size="xl" className="mb-8" />

        {/* Loading Text */}
        {showText && (
          <div
            className="text-center text-white mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-3xl font-bold mb-2 animate-pulse bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Welcome to Cipher Surge
            </h2>
            <p className="text-gray-300 text-lg">Loading your adventure...</p>
          </div>
        )}

        {/* Progress Bar */}
        <div
          className="w-64 h-3 bg-gray-800 rounded-full overflow-hidden animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* Progress Percentage */}
        <div
          className="text-white text-sm mt-4 font-mono animate-fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          {Math.round(progress)}%
        </div>
      </div>

      {/* Additional Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 pointer-events-none"></div>
    </div>
  );
};

export default LoadingScreen;
