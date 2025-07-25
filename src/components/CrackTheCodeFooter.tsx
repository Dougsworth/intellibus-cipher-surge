import React from "react";
import { Trophy, BookOpen, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CrackTheCodeFooterProps {
  onOpenForm: () => void;
}

const cardBase =
  "flex items-start gap-4 p-6 bg-white border border-border rounded-2xl shadow-md mb-8 hover:shadow-lg transition-shadow duration-300";
const divider = (
  <div className="flex items-center justify-center my-8">
    <span className="h-px w-8 bg-gray-300 mx-1 rounded-full"></span>
    <span className="h-2 w-2 bg-pink-400 rounded-full mx-1"></span>
    <span className="h-px w-8 bg-gray-300 mx-1 rounded-full"></span>
    <span className="h-2 w-2 bg-indigo-400 rounded-full mx-1"></span>
    <span className="h-px w-8 bg-gray-300 mx-1 rounded-full"></span>
    <span className="h-2 w-2 bg-blue-400 rounded-full mx-1"></span>
    <span className="h-px w-8 bg-gray-300 mx-1 rounded-full"></span>
  </div>
);

const CrackTheCodeFooter = ({ onOpenForm }: CrackTheCodeFooterProps) => (
  <footer className="mt-24 border-t border-border bg-background">
    <div className="max-w-5xl mx-auto py-16 px-4">
      {/* Tagline */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <Sparkles className="w-8 h-8 text-gray-400" />
          Ready to crack the code?
        </h2>
      </div>

      {/* About */}
      <div className={cardBase}>
        <Users className="w-8 h-8 text-gray-700 mr-2" />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground tracking-tight flex items-center gap-2">
            About Crack the Code
          </h2>
          <p className="text-lg text-muted-foreground mb-1">
            Crack the Code is Intellibus’s annual codebreaking and cybersecurity
            hackathon, designed to challenge, inspire, and unite problem-solvers
            from all backgrounds. Whether you’re a first-timer or a seasoned
            pro, you’ll find a place to learn, compete, and connect.
          </p>
          <p className="text-base text-muted-foreground">
            Our mission: Make cybersecurity and creative problem-solving
            accessible, fun, and rewarding for everyone. Join us to break
            barriers, build skills, and crack the code!
          </p>
        </div>
      </div>

      {divider}

      {/* Achievements */}
      <div className={cardBase}>
        <Trophy className="w-7 h-7 text-gray-700 mr-2" />
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground tracking-tight flex items-center gap-2">
            Achievements
          </h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Hundreds of participants from around the world</li>
            <li>
              Top participants have solved advanced cryptography and forensics
              challenges in record time
            </li>
            <li>Workshops led by industry experts and past CTF champions</li>
            <li>
              Community awards for creativity, problem-solving, and perseverance
            </li>
          </ul>
        </div>
      </div>

      {divider}

      {/* Education */}
      <div className={cardBase}>
        <BookOpen className="w-7 h-7 text-gray-700 mr-2" />
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground tracking-tight flex items-center gap-2">
            Learning & Resources
          </h3>
          <p className="text-muted-foreground mb-2">
            Every participant gets access to exclusive learning resources, live
            workshops, and mentorship from cybersecurity pros. Whether you want
            to level up your skills or just try something new, Crack the Code is
            the place to start.
          </p>
          <a
            href="https://www.youtube.com/watch?v=b8BiMLOauuY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2"
          >
            <Button
              variant="outline"
              className="border-gray-400 text-gray-700 hover:bg-gray-800 hover:text-white hover:border-gray-800 focus:ring-2 focus:ring-gray-400 focus:outline-none transition-colors duration-200"
              type="button"
            >
              Explore Learning Resources
            </Button>
          </a>
        </div>
      </div>

      {divider}

      {/* Join the Challenge */}
      <div className="text-center mt-20 mb-8">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2 text-foreground">
          Join the Challenge
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Real problems. Real-time solutions. Step up, crack the code, and make
          your mark. Are you ready?
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            className="bg-foreground text-background font-black px-8 py-4 rounded-lg border-2 border-foreground hover:bg-foreground/90"
            onClick={onOpenForm}
          >
            Register Now
          </Button>
          <Button
            variant="outline"
            className="border-2 border-foreground text-foreground font-black px-8 py-4 rounded-lg hover:bg-foreground hover:text-background focus:ring-2 focus:ring-gray-400 focus:outline-none transition-colors duration-200"
            onClick={() => {
              const rules = document.getElementById("rules-section");
              if (rules) rules.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Read the Rules
          </Button>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Sparkles className="w-4 h-4 text-pink-400" />
          &copy; {new Date().getFullYear()} Crack the Code by Intellibus. All
          rights reserved.
        </span>
      </div>
    </div>
  </footer>
);

export default CrackTheCodeFooter;
