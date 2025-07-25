import React from "react";
import { Home, ArrowLeft, Search, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-32 h-32 bg-card border-2 border-border rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-16 h-16 text-muted-foreground" />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold">
              4
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold">
              4
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 text-foreground tracking-tighter">
          PAGE NOT FOUND
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Search Suggestion */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Search className="w-5 h-5 text-muted-foreground" />
            <h3 className="text-lg font-semibold text-foreground">
              Looking for something specific?
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Try navigating to the main page or use the search function to find what you're looking for.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg font-semibold"
            onClick={() => navigate("/")}
          >
            <Home className="mr-2 w-5 h-5" />
            Go Home
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-lg font-semibold"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Popular Pages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate("/")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <span className="text-muted-foreground">•</span>
            <button 
              onClick={() => navigate("/#rules-section")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Rules
            </button>
            <span className="text-muted-foreground">•</span>
            <button 
              onClick={() => navigate("/#prizes")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Prizes
            </button>
            <span className="text-muted-foreground">•</span>
            <button 
              onClick={() => navigate("/#schedule")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
