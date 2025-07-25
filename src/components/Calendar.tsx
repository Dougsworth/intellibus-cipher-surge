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
      title: "Crack the Code Hackathon",
      time: "48 Hours",
      location: "Virtual + In-Person",
      participants: "500+ Participants",
      description: "Join us for the ultimate codebreaking challenge!",
    },
    {
      date: "March 14, 2024",
      title: "Pre-Hackathon Workshop",
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
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CalendarIcon className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Event Schedule
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mark your calendar for the most exciting codebreaking event of the
            year!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {event.title}
              </h3>

              {/* Event Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{event.participants}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {event.description}
              </p>

              {/* CTA Button */}
              <Button variant="outline" className="w-full" onClick={onOpenForm}>
                Register Now
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Join the Challenge?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't miss out on this incredible opportunity to test your skills,
              learn from experts, and compete with the best codebreakers!
            </p>
            <Button size="lg" className="px-8" onClick={onOpenForm}>
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
