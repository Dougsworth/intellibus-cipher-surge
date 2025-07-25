import React from "react";
import {
  Users,
  GraduationCap,
  Lightbulb,
  Heart,
  ShieldCheck,
  KeyRound,
  Target,
  Brain,
  Smile,
  HelpCircle,
  ThumbsUp,
  Lock,
} from "lucide-react";

const CRACK_FRAMEWORK = [
  {
    title: "C – Communication",
    description:
      "Share knowledge, ask questions, and connect with fellow hackers effectively.",
    icon: <Users className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "R – Resourcefulness",
    description:
      "Think outside the box, adapt quickly, and use every tool at your disposal.",
    icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "A – Agility",
    description: "Move fast, learn fast, and don't be afraid to experiment.",
    icon: <GraduationCap className="w-10 h-10 text-purple-500" />,
  },
  {
    title: "C – Creativity",
    description:
      "Innovate, break boundaries, and bring fresh ideas to every challenge.",
    icon: <Heart className="w-10 h-10 text-pink-500" />,
  },
  {
    title: "K – Knowledge",
    description:
      "Grow your skills, learn from mentors, and become a true codebreaker.",
    icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
  },
];

const PROBLEM_SOLVING_TIPS = [
  {
    icon: <KeyRound className="w-10 h-10 text-indigo-500" />,
    title: "Break It Down",
    description:
      "Tackle big challenges by splitting them into smaller, manageable parts. Every small win gets you closer to the solution!",
  },
  {
    icon: <Target className="w-10 h-10 text-red-500" />,
    title: "Think Like a Hacker",
    description:
      "Look for patterns, loopholes, and creative angles. Sometimes the answer is hidden in plain sight!",
  },
  {
    icon: <Brain className="w-10 h-10 text-orange-500" />,
    title: "Stay Curious",
    description:
      "Experiment, test your ideas, and don't be afraid to try something new. Curiosity leads to breakthroughs.",
  },
  {
    icon: <HelpCircle className="w-10 h-10 text-cyan-500" />,
    title: "Ask for Hints",
    description:
      "Stuck? Don't hesitate to ask for a nudge. Sometimes a fresh perspective is all you need.",
  },
  {
    icon: <Smile className="w-10 h-10 text-pink-400" />,
    title: "Don't Fear Failure",
    description:
      "Every wrong answer teaches you something. Keep going, adapt, and celebrate your progress!",
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-green-500" />,
    title: "Celebrate Small Wins",
    description:
      "Every flag, every bug found, every insight—cheer for it! Progress is built one step at a time.",
  },
];

const HackathonInfo = () => (
  <section className="py-32 px-6 bg-muted border-b border-border">
    <div className="max-w-7xl mx-auto">
      {/* Encouragement */}
      <div className="mb-24 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-foreground tracking-tight leading-tight">
          No Experience? No Problem!
        </h2>
        <div className="w-32 h-1 bg-foreground mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-4xl mx-auto leading-relaxed">
          Whether you're a first-time hacker or a seasoned pro,{" "}
          <span className="font-bold text-foreground">
            everyone starts somewhere
          </span>
          . Our event is designed to challenge and support participants at all
          skill levels.
        </p>
      </div>

      {/* CRACK Framework */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-black mb-8 text-foreground tracking-tight leading-tight">
            THE CRACK FRAMEWORK
          </h3>
          <div className="w-24 h-1 bg-foreground mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven methodology for success in cybersecurity challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {CRACK_FRAMEWORK.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 lg:p-10 text-center hover:border-foreground/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-muted/50 rounded-lg mb-6">
                {item.icon}
              </div>
              <h4 className="text-lg font-black mb-4 text-foreground tracking-tight leading-tight">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Problem Solving Tips */}
      <div className="bg-card border border-border rounded-lg p-10 lg:p-12">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-black mb-8 text-foreground tracking-tight leading-tight">
            PROBLEM SOLVING STRATEGIES
          </h3>
          <div className="w-24 h-1 bg-foreground mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master these techniques to excel in any cybersecurity challenge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PROBLEM_SOLVING_TIPS.map((tip, index) => (
            <div
              key={index}
              className="p-6 lg:p-8 border border-border rounded-lg hover:border-foreground/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-muted/50 rounded-lg">
                    {tip.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-black mb-3 text-foreground tracking-tight leading-tight">
                    {tip.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HackathonInfo;
