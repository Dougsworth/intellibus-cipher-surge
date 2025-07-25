import React from "react";
import { Trophy, BookOpen, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CrackTheCodeFooterProps {
  onOpenForm: () => void;
}

const CrackTheCodeFooter = ({ onOpenForm }: CrackTheCodeFooterProps) => (
  <footer className="mt-32 border-t border-border bg-background">
    <div className="max-w-7xl mx-auto py-24 px-6">
      {/* Tagline */}
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight text-foreground flex items-center justify-center gap-4 mb-8">
          <Sparkles className="w-10 h-10 text-muted-foreground" />
          Ready to crack the code?
        </h2>
        <div className="w-32 h-1 bg-foreground mx-auto"></div>
      </div>

      {/* About */}
      <div className="bg-card border border-border rounded-lg p-10 lg:p-12 mb-16">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-muted/50 rounded-lg">
              <Users className="w-8 h-8 text-foreground" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground tracking-tight leading-tight">
              About Crack the Code
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Crack the Code is Intellibus annual codebreaking and cybersecurity
              road tour, designed to challenge, inspire, and unite
              problem-solvers from all backgrounds. Whether you're a first-timer
              or a seasoned pro, you'll find a place to learn, compete, and
              connect.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our mission: Make cybersecurity and creative problem-solving
              accessible, fun, and rewarding for everyone. Join us to break
              barriers, build skills, and crack the code!
            </p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-card border border-border rounded-lg p-10 lg:p-12 mb-16">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-muted/50 rounded-lg">
              <Trophy className="w-8 h-8 text-foreground" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl md:text-3xl font-black mb-6 text-foreground tracking-tight leading-tight">
              Achievements
            </h3>
            <ul className="text-muted-foreground space-y-3 leading-relaxed">
              <li className="flex items-start">
                <span className="text-foreground mr-3 mt-1.5 font-bold flex-shrink-0">
                  ■
                </span>
                <span className="flex-1">
                  Hundreds of participants from around the world
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-foreground mr-3 mt-1.5 font-bold flex-shrink-0">
                  ■
                </span>
                <span className="flex-1">
                  Top participants have solved advanced cryptography and
                  forensics challenges in record time
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-foreground mr-3 mt-1.5 font-bold flex-shrink-0">
                  ■
                </span>
                <span className="flex-1">
                  Workshops led by industry experts and past CTF champions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-foreground mr-3 mt-1.5 font-bold flex-shrink-0">
                  ■
                </span>
                <span className="flex-1">
                  Community awards for creativity, problem-solving, and
                  perseverance
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="bg-card border border-border rounded-lg p-10 lg:p-12 mb-16">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-muted/50 rounded-lg">
              <BookOpen className="w-8 h-8 text-foreground" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl md:text-3xl font-black mb-6 text-foreground tracking-tight leading-tight">
              Learning & Resources
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every participant gets access to exclusive learning resources,
              live workshops, and mentorship from cybersecurity pros. Whether
              you want to level up your skills or just try something new, Crack
              the Code is the place to start.
            </p>
            <a
              href="https://www.youtube.com/watch?v=b8BiMLOauuY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-black transition-all duration-300"
              >
                WATCH INTRO VIDEO
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center">
        <div className="bg-card border border-border rounded-lg p-10 lg:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black mb-6 text-foreground tracking-tight leading-tight">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Join hundreds of participants and test your skills in the ultimate
            codebreaking challenge. Your mission awaits!
          </p>
          <Button
            onClick={onOpenForm}
            className="bg-foreground hover:bg-foreground/90 text-background font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-none transform hover:scale-105 transition-all duration-300 shadow-lg border-2 border-foreground"
          >
            ACCEPT MISSION
          </Button>
        </div>
      </div>
    </div>
  </footer>
);

export default CrackTheCodeFooter;
