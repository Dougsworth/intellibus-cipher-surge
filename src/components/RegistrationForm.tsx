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
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-foreground">
            Register for Crack the Code
          </h2>
          <p className="text-muted-foreground">
            Join the ultimate codebreaking challenge
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
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
            <Label htmlFor="age" className="flex items-center gap-2">
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
            <Label htmlFor="parish" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Parish
            </Label>
            <Input
              id="parish"
              name="parish"
              type="text"
              placeholder="Enter your parish"
              value={formData.parish}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          {/* Level Field */}
          <div className="space-y-2">
            <Label htmlFor="level" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Experience Level
            </Label>
            <select
              id="level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="beginner">Beginner</option>
              <option value="professional">Professional</option>
            </select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-6 text-lg font-semibold"
            size="lg"
          >
            Register Now
          </Button>
        </form>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            By registering, you agree to participate in the Crack the Code
            hackathon and follow all competition rules and guidelines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
