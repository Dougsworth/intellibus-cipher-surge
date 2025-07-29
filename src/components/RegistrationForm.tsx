import React, { useState } from "react";
import { X, User, Calendar, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RegistrationFormProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    parish: "",
    level: "beginner",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Registration submitted successfully!");
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative">
      {/* Animated Code Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 text-xs font-mono text-foreground animate-pulse">
          &lt;form&gt;
        </div>
        <div
          className="absolute top-20 right-10 text-xs font-mono text-foreground animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          input[type="text"]
        </div>
        <div
          className="absolute bottom-20 left-10 text-xs font-mono text-foreground animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          &lt;/form&gt;
        </div>
      </div>

      <div className="p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-mono font-bold mb-2 text-foreground">
            &lt;Register /&gt;
          </h2>
          <p className="text-muted-foreground font-mono">
            // Join the ultimate codebreaking challenge
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2 font-mono">
              <User className="w-4 h-4" />
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Age Field */}
          <div className="space-y-2">
            <Label htmlFor="age" className="flex items-center gap-2 font-mono">
              <Calendar className="w-4 h-4" />
              Age
            </Label>
            <Input
              id="age"
              name="age"
              type="number"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              required
              min="13"
              max="100"
              className="w-full"
            />
          </div>

          {/* Parish Field */}
          <div className="space-y-2">
            <Label htmlFor="parish" className="flex items-center gap-2 font-mono">
              <MapPin className="w-4 h-4" />
              Parish
            </Label>
            <select
              id="parish"
              name="parish"
              value={formData.parish}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none bg-no-repeat bg-right pr-10"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\")",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="">Select your parish</option>
              <option value="Kingston">Kingston</option>
              <option value="St. Andrew">St. Andrew</option>
              <option value="St. Catherine">St. Catherine</option>
              <option value="Clarendon">Clarendon</option>
              <option value="Manchester">Manchester</option>
              <option value="St. Elizabeth">St. Elizabeth</option>
              <option value="Westmoreland">Westmoreland</option>
              <option value="Hanover">Hanover</option>
              <option value="St. James">St. James</option>
              <option value="Trelawny">Trelawny</option>
              <option value="St. Ann">St. Ann</option>
              <option value="St. Mary">St. Mary</option>
              <option value="Portland">Portland</option>
              <option value="St. Thomas">St. Thomas</option>
            </select>
          </div>

          {/* Level Field */}
          <div className="space-y-2">
            <Label htmlFor="level" className="flex items-center gap-2 font-mono">
              <GraduationCap className="w-4 h-4" />
              Experience Level
            </Label>
            <select
              id="level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none bg-no-repeat bg-right pr-10"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\")",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="beginner">Beginner</option>
              <option value="professional">Professional</option>
            </select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-6 text-lg font-mono font-semibold bg-foreground hover:bg-foreground/90 text-background"
            size="lg"
          >
            submit();
          </Button>
        </form>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm font-mono text-muted-foreground text-center">
            By registering, you agree to participate in the Crack the Code
            hackathon and follow all competition rules and guidelines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
