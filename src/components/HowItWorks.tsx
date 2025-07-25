import React from "react";
import { Code, Lock, Trophy, Users, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HowItWorksProps {
  onOpenForm: () => void;
}

const HowItWorks = ({ onOpenForm }: HowItWorksProps) => {
  const steps = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Register & Join",
      description:
        "Sign up for the road tour and join our community of codebreakers. Get access to exclusive resources and workshops.",
      color: "text-blue-500",
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Solve Challenges",
      description:
        "Tackle cryptography puzzles, reverse engineering challenges, and cybersecurity scenarios. Each challenge tests different skills.",
      color: "text-green-500",
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Learn & Grow",
      description:
        "Attend workshops, learn from experts, and develop your skills in real-time. Network with industry professionals.",
      color: "text-purple-500",
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Win Prizes",
      description:
        "Compete for over $50,000 in prizes, recognition, and career opportunities. Top performers get exclusive rewards.",
      color: "text-yellow-500",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Scoring",
      description:
        "See your progress and rankings in real-time as you solve challenges.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Individual Challenge",
      description:
        "Work independently to tackle complex challenges on your own.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Expert Mentorship",
      description:
        "Get guidance from cybersecurity professionals and past champions.",
    },
  ];

  return (
    <section
      className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background border-b border-border"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-8 text-foreground leading-tight">
            How It Works
          </h2>
          <div className="w-32 h-1 bg-foreground mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From registration to victory - here's your roadmap to becoming a
            codebreaking champion
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-24">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              {/* Step Content */}
              <div className="bg-card border border-border rounded-lg p-8 lg:p-10 h-full hover:shadow-lg transition-all duration-300 hover:border-foreground/50">
                <div className={`${step.color} mb-6`}>{step.icon}</div>
                <h3 className="text-xl font-black mb-4 text-foreground tracking-tight leading-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-card border border-border rounded-lg p-10 lg:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-black mb-12 text-center text-foreground tracking-tight leading-tight">
            Why Choose Crack the Code?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-muted/50 rounded-lg mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-black mb-4 text-foreground tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            onClick={onOpenForm}
            className="bg-foreground hover:bg-foreground/90 text-background font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-none transform hover:scale-105 transition-all duration-300 shadow-lg border-2 border-foreground"
          >
            START YOUR JOURNEY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
