import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import HowItWorks from "@/components/HowItWorks";
import Prizes from "@/components/Prizes";
import Rules from "@/components/Rules";
import Calendar from "@/components/Calendar";
import RegistrationForm from "@/components/RegistrationForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import HackathonInfo from "@/components/HackathonInfo";
import CrackTheCodeFooter from "@/components/CrackTheCodeFooter";
import FloatingBubbles from "@/components/FloatingBubbles";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimalist geometric background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="relative z-10">
        <HeroSection onOpenForm={() => setShowForm(true)} />
        <VideoSection />
        <HackathonInfo />
        <FloatingBubbles />
        <HowItWorks onOpenForm={() => setShowForm(true)} />
        <Prizes />
        <Calendar onOpenForm={() => setShowForm(true)} />
        <Rules />

        {/* Registration Form Modal */}
        <Dialog open={showForm} onOpenChange={setShowForm}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
            <RegistrationForm onClose={() => setShowForm(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <CrackTheCodeFooter onOpenForm={() => setShowForm(true)} />

      {/* Minimalist Grid Background */}
      <style>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
      `}</style>
    </div>
  );
};

export default Index;
