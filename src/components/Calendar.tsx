import React from "react";
import { Calendar as CalendarIcon, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendarProps {
  onOpenForm: () => void;
}

const Calendar = ({ onOpenForm }: CalendarProps) => {
  const events = [
    {
      date: "March 15-17, 2024",
      title: "Crack the Code Road Tour",
      time: "48 Hours",
      location: "Virtual + In-Person",
      participants: "500+ Participants",
      description: "Join us for the ultimate codebreaking challenge!",
    },
    {
      date: "March 14, 2024",
      title: "Pre-Road Tour Workshop",
      time: "2:00 PM - 5:00 PM",
      location: "Online",
      participants: "Open to All",
      description: "Learn the basics of cryptography and cybersecurity.",
    },
    {
      date: "March 18, 2024",
      title: "Awards Ceremony",
      time: "7:00 PM - 9:00 PM",
      location: "Virtual",
      participants: "All Participants",
      description: "Celebrate the winners and share your achievements!",
    },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background to-muted/20 border-b border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <CalendarIcon className="w-10 h-10 text-foreground" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
              Event Schedule
            </h2>
          </div>
          <div className="w-32 h-1 bg-foreground mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Mark your calendar for the most exciting codebreaking event of the
            year!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 lg:p-10 hover:shadow-lg transition-all duration-300 hover:border-foreground/50 flex flex-col h-full"
            >
              {/* Date Badge */}
              <div className="inline-block bg-muted/50 px-4 py-2 rounded-lg mb-6">
                <span className="text-sm font-mono text-foreground">
                  {event.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-black mb-6 text-foreground tracking-tight leading-tight">
                {event.title}
              </h3>

              {/* Event Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-mono">{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-mono">{event.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-mono">
                    {event.participants}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed flex-grow">
                {event.description}
              </p>

              {/* CTA Button */}
              <div className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-black transition-all duration-300"
                  onClick={onOpenForm}
                >
                  REGISTER NOW
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-lg p-10 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black mb-6 text-foreground tracking-tight leading-tight">
              Ready to Join the Challenge?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Don't miss out on this incredible opportunity to test your skills,
              learn from experts, and compete for amazing prizes.
            </p>
            <Button
              onClick={onOpenForm}
              className="bg-foreground hover:bg-foreground/90 text-background font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-none transform hover:scale-105 transition-all duration-300 shadow-lg border-2 border-foreground"
            >
              SECURE YOUR SPOT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
