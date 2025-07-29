import React, { useEffect, useState } from "react";
import { Trophy, Medal, Award, Zap } from "lucide-react";

const Prizes = () => {
  const [confetti, setConfetti] = useState<
    Array<{ id: number; x: number; y: number; color: string; delay: number }>
  >([]);

  useEffect(() => {
    // Generate confetti pieces
    const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: [
        "#FFD700",
        "#C0C0C0",
        "#CD7F32",
        "#FF6B6B",
        "#4ECDC4",
        "#45B7D1",
        "#96CEB4",
        "#FFEAA7",
      ][Math.floor(Math.random() * 8)],
      delay: Math.random() * 3,
    }));
    setConfetti(confettiPieces);
  }, []);

  const prizes = [
    {
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      title: "1st Place",
      value: "$2,000",
      description: "Ultimate codebreaker recognition",
      imagePlaceholder: "Winner photos coming soon",
    },
    {
      icon: <Medal className="w-12 h-12 text-gray-400" />,
      title: "2nd Place",
      value: "$1,000",
      description: "Exceptional problem-solving skills",
      imagePlaceholder: "Runner-up photos coming soon",
    },
    {
      icon: <Award className="w-12 h-12 text-amber-600" />,
      title: "3rd Place",
      value: "$500",
      description: "Outstanding cybersecurity talent",
      imagePlaceholder: "Third place photos coming soon",
    },
  ];

  const specialAwards = [
    {
      icon: <Zap className="w-10 h-10 text-blue-500" />,
      title: "Most Creative Solution",
      description: "Innovation in problem-solving approach",
      imagePlaceholder: "Creative solution photos coming soon",
    },
    {
      icon: <Zap className="w-10 h-10 text-green-500" />,
      title: "Best Problem Solver",
      description: "Exceptional analytical and problem-solving skills",
      imagePlaceholder: "Problem solver photos coming soon",
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "Rookie of the Year",
      description: "Outstanding performance by first-time participants",
      imagePlaceholder: "Rookie photos coming soon",
    },
  ];

  return (
    <section className="py-32 px-6 bg-background border-b border-border relative overflow-hidden">
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

      {/* Confetti Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="absolute w-2 h-2 animate-confetti"
            style={{
              left: `${piece.x}%`,
              top: `${piece.y}%`,
              backgroundColor: piece.color,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-black mb-8 text-foreground tracking-tight leading-tight">
            PRIZES & REWARDS
          </h2>
          <div className="w-32 h-1 bg-foreground mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-mono text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Compete for over $50,000 in prizes and exclusive opportunities
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 lg:p-10 text-center hover:border-foreground/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-muted/50 rounded-lg mb-8">
                {prize.icon}
              </div>
              <h3 className="text-2xl font-mono font-black mb-4 text-foreground tracking-tight leading-tight">
                {prize.title}
              </h3>
              <div className="text-4xl md:text-5xl font-mono font-black mb-6 text-foreground">
                {prize.value}
              </div>
              <p className="font-mono text-muted-foreground leading-relaxed mb-6">
                {prize.description}
              </p>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground font-mono">
                  {prize.imagePlaceholder}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Special Awards */}
        <div className="bg-card border border-border rounded-lg p-10 lg:p-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-mono font-black mb-8 text-foreground tracking-tight leading-tight">
              SPECIAL RECOGNITION AWARDS
            </h3>
            <div className="w-24 h-1 bg-foreground mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {specialAwards.map((award, index) => (
              <div
                key={index}
                className="text-center p-6 lg:p-8 border border-border rounded-lg hover:border-foreground/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-muted/50 rounded-lg mb-6">
                  {award.icon}
                </div>
                              <h4 className="text-xl font-mono font-black mb-4 text-foreground tracking-tight leading-tight">
                {award.title}
              </h4>
                              <p className="font-mono text-muted-foreground leading-relaxed mb-6">
                {award.description}
              </p>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="text-xs font-mono text-muted-foreground">
                    {award.imagePlaceholder}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Confetti Animation Styles */}
      <style>{`
        @keyframes confetti {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .animate-confetti {
          animation: confetti linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Prizes;
