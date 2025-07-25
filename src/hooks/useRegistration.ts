import { useState } from "react";
import { registrationApi, RegistrationData } from "@/services/api";
import { toast } from "sonner";

interface UseRegistrationReturn {
  isSubmitting: boolean;
  submitRegistration: (
    data: Omit<RegistrationData, "timestamp">
  ) => Promise<boolean>;
  error: string | null;
  clearError: () => void;
}

export const useRegistration = (): UseRegistrationReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitRegistration = async (
    data: Omit<RegistrationData, "timestamp">
  ): Promise<boolean> => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Show loading toast
      const loadingToast = toast.loading(
        "🎯 Processing agent registration...",
        {
          description: "Establishing secure connection...",
        }
      );

      const response = await registrationApi.submitRegistration(data);

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (response.success) {
        // Success toast
        toast.success(
          "🎯 Mission Accepted! Agent profile created successfully.",
          {
            description:
              "Check your email for mission briefing and next steps.",
            duration: 5000,
          }
        );

        return true;
      } else {
        // Error from API
        const errorMessage =
          response.error || response.message || "Registration failed";
        setError(errorMessage);
        toast.error("❌ Registration Failed", {
          description: errorMessage,
        });
        return false;
      }
    } catch (err) {
      // Network or other errors
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);

      toast.error("❌ Connection Error", {
        description: errorMessage,
      });

      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return {
    isSubmitting,
    submitRegistration,
    error,
    clearError,
  };
};
