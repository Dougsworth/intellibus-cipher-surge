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
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Most Creative Solution",
      description: "Innovation in problem-solving approach",
      imagePlaceholder: "Creative solution photos coming soon",
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: "Best Problem Solver",
      description: "Exceptional analytical and problem-solving skills",
      imagePlaceholder: "Problem solver photos coming soon",
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: "Rookie of the Year",
      description: "Outstanding performance by first-time participants",
      imagePlaceholder: "Rookie photos coming soon",
    },
  ];

  return (
    <section className="py-24 px-4 bg-background border-b border-border relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground animate-fade-in-up tracking-tighter">
            PRIZES & RECOGNITION
          </h2>
          <div className="w-24 h-1 bg-foreground mx-auto mb-6"></div>
          <p
            className="text-xl text-muted-foreground font-mono animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            COMPETE FOR GLORY AND REWARDS
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="bg-white border-2 border-border rounded-2xl p-8 hover:border-foreground transition-all duration-300 group"
            >
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-background border-2 border-border group-hover:border-foreground transition-all duration-300">
                    {prize.icon}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-foreground tracking-tight">
                    {prize.title}
                  </h3>
                  <div className="text-3xl font-black text-foreground">
                    {prize.value}
                  </div>
                  <p className="text-muted-foreground">{prize.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Awards */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-black text-foreground mb-6 tracking-tight">
            SPECIAL AWARDS
          </h3>
          <p className="text-lg text-muted-foreground">
            Additional recognition for exceptional achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialAwards.map((award, index) => (
            <div
              key={index}
              className="bg-white border-2 border-border rounded-xl p-6 hover:border-foreground transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-background border-2 border-border group-hover:border-foreground transition-all duration-300">
                    {award.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {award.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 text-center p-8 bg-white border-2 border-border rounded-2xl">
          <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight">
            ADDITIONAL BENEFITS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-foreground">
                Industry Recognition
              </h4>
              <p className="text-sm text-muted-foreground">
                Build your cybersecurity reputation
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mx-auto">
                <Medal className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-foreground">Networking</h4>
              <p className="text-sm text-muted-foreground">
                Connect with industry professionals
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-foreground">
                Career Opportunities
              </h4>
              <p className="text-sm text-muted-foreground">
                Open doors to cybersecurity careers
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-foreground">Skill Development</h4>
              <p className="text-sm text-muted-foreground">
                Enhance your technical abilities
              </p>
            </div>
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
