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
    description: "Move fast, learn fast, and don’t be afraid to experiment.",
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
      "Experiment, test your ideas, and don’t be afraid to try something new. Curiosity leads to breakthroughs.",
  },
  {
    icon: <HelpCircle className="w-10 h-10 text-cyan-500" />,
    title: "Ask for Hints",
    description:
      "Stuck? Don’t hesitate to ask for a nudge. Sometimes a fresh perspective is all you need.",
  },
  {
    icon: <Smile className="w-10 h-10 text-pink-400" />,
    title: "Don’t Fear Failure",
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

const cardBase = "bg-white shadow-xl rounded-2xl border-2 border-border";

const HackathonInfo = () => (
  <section className="py-24 px-4 bg-muted border-b border-border">
    <div className="max-w-5xl mx-auto">
      {/* Encouragement */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground tracking-tighter">
          No Experience? No Problem!
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-mono">
          Whether you’re a first-time hacker or a seasoned pro,{" "}
          <span className="font-bold text-foreground">
            Intellibus Crack the Code
          </span>{" "}
          is for everyone. Dive in, experiment, and grow in a supportive,
          high-energy environment!
        </p>
      </div>

      {/* Crack the Code: Problem-Solving Tips */}
      <div className={`mb-16 p-2 md:p-4 ${cardBase}`}>
        <h3 className="text-2xl md:text-3xl font-black mb-8 text-foreground flex items-center justify-center gap-3">
          <KeyRound className="w-10 h-10 text-indigo-500" />
          Crack the Code: Problem-Solving Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {PROBLEM_SOLVING_TIPS.map((tip, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-all duration-300 p-6 md:p-8 rounded-xl bg-muted/30"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex justify-center">{tip.icon}</div>
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-foreground tracking-tight">
                    {tip.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Divider with Lock Icon */}
      <div className="flex items-center justify-center my-12">
        <div className="h-px w-24 bg-gray-300 rounded-full"></div>
        <Lock className="mx-4 w-8 h-8 text-gray-400" />
        <div className="h-px w-24 bg-gray-300 rounded-full"></div>
      </div>

      {/* CRACK Framework */}
      <div className={`mb-16 p-2 md:p-4 ${cardBase}`}>
        <h3 className="text-2xl md:text-3xl font-black mb-8 text-foreground text-center">
          The CRACK Framework
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {CRACK_FRAMEWORK.map((item, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex justify-center">{item.icon}</div>
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-foreground tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Motivating Summary */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-black mb-2 text-foreground">
          Think You’re Not Good Enough? Think Again!
        </h3>
        <p className="text-lg md:text-xl text-muted-foreground font-mono">
          At{" "}
          <span className="font-bold text-foreground">
            Intellibus Crack the Code
          </span>
          , innovation comes from curiosity and passion—not just experience.
          Step up and create something amazing. Your mission starts now!
        </p>
      </div>
    </div>
  </section>
);

export default HackathonInfo;
