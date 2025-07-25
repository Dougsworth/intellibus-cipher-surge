import { useState } from "react";
import AnimatedLogo from "./AnimatedLogo";

const LogoAnimationDemo = () => {
  const [selectedVariant, setSelectedVariant] =
    useState<string>("pulse-rotate");

  const variants = [
    { key: "rotate", label: "Rotate" },
    { key: "pulse", label: "Pulse" },
    { key: "bounce", label: "Bounce" },
    { key: "fade", label: "Fade" },
    { key: "float", label: "Float" },
    { key: "glow", label: "Glow" },
    { key: "pulse-rotate", label: "Pulse Rotate" },
    { key: "bounce-rotate", label: "Bounce Rotate" },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Logo Animation Demo
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Click on different animation variants to see the logo in action
        </p>

        {/* Animation Variant Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {variants.map((variant) => (
            <button
              key={variant.key}
              onClick={() => setSelectedVariant(variant.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedVariant === variant.key
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {variant.label}
            </button>
          ))}
        </div>
      </div>

      {/* Logo Display */}
      <div className="bg-gray-900 rounded-2xl p-12 border border-gray-700">
        <AnimatedLogo variant={selectedVariant as any} size="xl" />
      </div>

      {/* Current Animation Info */}
      <div className="mt-8 text-center">
        <p className="text-white text-lg">
          Current Animation:{" "}
          <span className="font-bold text-blue-400">{selectedVariant}</span>
        </p>
      </div>
    </div>
  );
};

export default LogoAnimationDemo;
