import React from "react";
import { Code, Lock, Trophy, Users, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HowItWorksProps {
  onOpenForm: () => void;
}

const HowItWorks = ({ onOpenForm }: HowItWorksProps) => {
  const steps = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Register & Join",
      description:
        "Sign up for the hackathon and join our community of codebreakers. Get access to exclusive resources and workshops.",
      color: "text-blue-500",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Solve Challenges",
      description:
        "Tackle cryptography puzzles, reverse engineering challenges, and cybersecurity scenarios. Each challenge tests different skills.",
      color: "text-green-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Learn & Grow",
      description:
        "Attend workshops, learn from experts, and develop your skills in real-time. Network with industry professionals.",
      color: "text-purple-500",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Win Prizes",
      description:
        "Compete for over $50,000 in prizes, recognition, and career opportunities. Top performers get exclusive rewards.",
      color: "text-yellow-500",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Scoring",
      description:
        "See your progress and rankings in real-time as you solve challenges.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Individual Challenge",
      description:
        "Work independently to tackle complex challenges on your own.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Expert Mentorship",
      description:
        "Get guidance from cybersecurity professionals and past champions.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From registration to victory - here's your roadmap to becoming a
            codebreaking champion
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              {/* Step Content */}
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300">
                <div className={`${step.color} mb-4`}>{step.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Why Choose Crack the Code?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of participants and test your skills in the ultimate
              codebreaking challenge
            </p>
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold"
              onClick={onOpenForm}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
