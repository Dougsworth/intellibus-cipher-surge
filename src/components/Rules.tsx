import React from "react";
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  Users,
  Code,
  Trophy,
} from "lucide-react";

const Rules = () => {
  const ruleCategories = [
    {
      icon: <Shield className="w-10 h-10 text-foreground" />,
      title: "CODE OF HONOR",
      subtitle: "Ethical Hacking Principles",
      rules: [
        "Respect all systems and participants",
        "No malicious attacks on infrastructure",
        "Share knowledge and collaborate ethically",
        "Report vulnerabilities responsibly",
      ],
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-foreground" />,
      title: "ENGAGEMENT RULES",
      subtitle: "Scope & Limitations",
      rules: [
        "Only target designated challenge systems",
        "No attacks on participant devices",
        "Respect rate limits and system resources",
        "No social engineering of non-participants",
      ],
    },
    {
      icon: <Trophy className="w-10 h-10 text-foreground" />,
      title: "FLAG SUBMISSION",
      subtitle: "Victory Claims",
      rules: [
        "Submit flags in the correct format",
        "Each flag claimed once per team",
        "Provide proof of solution when requested",
        "No sharing flags between teams",
      ],
    },
    {
      icon: <Users className="w-10 h-10 text-foreground" />,
      title: "TEAM FORMATION",
      subtitle: "Squad Dynamics",
      rules: [
        "Teams of 2-4 members maximum",
        "Solo participants welcome",
        "Mixed skill levels encouraged",
        "One team captain for communication",
      ],
    },
    {
      icon: <Code className="w-10 h-10 text-foreground" />,
      title: "TECHNOLOGY ARSENAL",
      subtitle: "Approved Tools",
      rules: [
        "Use any publicly available security tools",
        "No pre-solved challenge databases",
        "Document your methodology",
        "Original work and solutions only",
      ],
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-foreground" />,
      title: "SCORING SYSTEM",
      subtitle: "Points & Recognition",
      rules: [
        "Points awarded by challenge difficulty",
        "Bonus points for detailed writeups",
        "Time-based tiebreakers for ranking",
        "Judges' discretion for special awards",
      ],
    },
  ];

  return (
    <section className="py-32 px-6 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-black mb-8 text-foreground tracking-tight leading-tight">
            RULES OF ENGAGEMENT
          </h2>
          <div className="w-32 h-1 bg-foreground mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-3xl mx-auto leading-relaxed">
            MISSION PARAMETERS & OPERATIONAL GUIDELINES
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {ruleCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-8 lg:p-10 border border-border hover:border-foreground/50 transition-all duration-300 group hover:bg-muted/30 rounded-lg animate-hover-lift"
            >
              <div className="flex items-start space-x-4 mb-8">
                <div className="flex-shrink-0 p-3 bg-muted/50 rounded-lg group-hover:bg-muted transition-colors duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-mono font-black text-foreground tracking-tight mb-2 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {category.rules.map((rule, ruleIndex) => (
                  <li
                    key={ruleIndex}
                    className="text-sm font-mono text-muted-foreground flex items-start hover:text-foreground transition-colors duration-200 leading-relaxed group/item"
                  >
                    <span className="text-foreground mr-3 mt-1.5 font-mono font-bold flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                      ■
                    </span>
                    <span className="flex-1">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Critical Mission Parameters */}
        <div className="bg-card p-10 lg:p-12 border-2 border-foreground rounded-lg animate-hover-glow">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-muted/50 rounded-full mb-8 animate-pulse-slow">
              <AlertTriangle className="w-10 h-10 text-foreground" />
            </div>
            <h3 className="text-3xl md:text-4xl font-mono font-black text-foreground mb-6 tracking-tight leading-tight">
              CRITICAL MISSION PARAMETERS
            </h3>
            <div className="w-24 h-1 bg-foreground mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 text-left">
            <div>
              <h4 className="font-mono font-black text-foreground mb-6 text-xl tracking-tight">
                PROHIBITED ACTIVITIES
              </h4>
              <ul className="text-sm font-mono text-muted-foreground space-y-4">
                <li className="flex items-start hover:text-foreground transition-colors duration-200">
                  <span className="text-foreground mr-3 mt-1.5 font-mono font-bold flex-shrink-0">
                    ■
                  </span>
                  <span className="flex-1 leading-relaxed">
                    Attacking infrastructure outside scope
                  </span>
                </li>
                <li className="flex items-start hover:text-foreground transition-colors duration-200">
                  <span className="text-foreground mr-3 mt-1.5 font-mono font-bold flex-shrink-0">
                    ■
                  </span>
                  <span className="flex-1 leading-relaxed">
                    Disrupting other participants
                  </span>
                </li>
                <li className="flex items-start hover:text-foreground transition-colors duration-200">
                  <span className="text-foreground mr-3 mt-1.5 font-mono font-bold flex-shrink-0">
                    ■
                  </span>
                  <span className="flex-1 leading-relaxed">
                    Sharing solutions during competition
                  </span>
                </li>
                <li className="flex items-start hover:text-foreground transition-colors duration-200">
                  <span className="text-foreground mr-3 mt-1.5 font-mono font-bold flex-shrink-0">
                    ■
                  </span>
                  <span className="flex-1 leading-relaxed">
                    Any illegal or unethical activities
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono font-black text-foreground mb-6 text-xl tracking-tight">
                ENCOURAGED BEHAVIOR
              </h4>
              <ul className="text-sm font-mono text-muted-foreground space-y-4">
                <li className="flex items-start hover:text-foreground transition-colors duration-200">
                  <span className="text-foreground mr-3 mt-1.5 font-mono font-bold flex-shrink-0">
                    ■
                  </span>
                  <span className="flex-1 leading-relaxed">
                    Creative problem-solving approaches
                  </span>
                </li>
                <li className="flex items-start hover:text-foreground transition-colors duration-200">
                  <span className="text-foreground mr-3 mt-1.5 font-mono font-bold flex-shrink-0">
                    ■
                  </span>
                  <span className="flex-1 leading-relaxed">
                    Helping teammates learn and grow
                  </span>
                </li>
                <li className="flex items-start hover:text-foreground transition-colors duration-200">
                  <span className="text-foreground mr-3 mt-1.5 font-mono font-bold flex-shrink-0">
                    ■
                  </span>
                  <span className="flex-1 leading-relaxed">
                    Documenting your discovery process
                  </span>
                </li>
                <li className="flex items-start hover:text-foreground transition-colors duration-200">
                  <span className="text-foreground mr-3 mt-1.5 font-mono font-bold flex-shrink-0">
                    ■
                  </span>
                  <span className="flex-1 leading-relaxed">
                    Asking mentors for guidance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
