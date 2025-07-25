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
      icon: <Shield className="w-12 h-12 text-foreground" />,
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
      icon: <AlertTriangle className="w-12 h-12 text-foreground" />,
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
      icon: <Trophy className="w-12 h-12 text-foreground" />,
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
      icon: <Users className="w-12 h-12 text-foreground" />,
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
      icon: <Code className="w-12 h-12 text-foreground" />,
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
      icon: <CheckCircle className="w-12 h-12 text-foreground" />,
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
    <section className="py-24 px-4 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 text-foreground tracking-tighter">
            RULES OF ENGAGEMENT
          </h2>
          <div className="w-24 h-1 bg-foreground mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-mono">
            MISSION PARAMETERS & OPERATIONAL GUIDELINES
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ruleCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-8 border-2 border-border hover:border-foreground transition-all duration-300 group hover:bg-muted"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="group-hover:animate-bounce">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black text-foreground tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {category.rules.map((rule, ruleIndex) => (
                  <li
                    key={ruleIndex}
                    className="text-sm text-muted-foreground flex items-start hover:text-foreground transition-colors duration-200"
                  >
                    <span className="text-foreground mr-3 mt-1 font-bold">
                      ■
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-card p-8 border-2 border-foreground">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 text-foreground mx-auto mb-6" />
            <h3 className="text-2xl font-black text-foreground mb-8 tracking-tight">
              CRITICAL MISSION PARAMETERS
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-black text-foreground mb-4 text-lg">
                  PROHIBITED ACTIVITIES
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="text-foreground mr-2 font-bold">■</span>
                    Attacking infrastructure outside scope
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground mr-2 font-bold">■</span>
                    Disrupting other participants
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground mr-2 font-bold">■</span>
                    Sharing solutions during competition
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground mr-2 font-bold">■</span>
                    Any illegal or unethical activities
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-foreground mb-4 text-lg">
                  ENCOURAGED BEHAVIOR
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="text-foreground mr-2 font-bold">■</span>
                    Creative problem-solving approaches
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground mr-2 font-bold">■</span>
                    Helping teammates learn and grow
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground mr-2 font-bold">■</span>
                    Documenting your discovery process
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground mr-2 font-bold">■</span>
                    Asking mentors for guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
