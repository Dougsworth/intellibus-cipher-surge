// API Configuration
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/api";
const API_TIMEOUT = 10000; // 10 seconds

// Types for API responses
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface RegistrationData {
  fullName: string;
  email: string;
  parish: string;
  event: string;
  age: string;
  professional: string;
  skillLevel: string;
  specialization?: string;
  experience?: string;
  timestamp: string;
}

// Generic API request function
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      signal: controller.signal,
      ...options,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new Error("Request timeout - please try again");
      }
      throw error;
    }

    throw new Error("An unexpected error occurred");
  }
}

// Registration API functions
export const registrationApi = {
  // Submit registration form
  async submitRegistration(
    data: Omit<RegistrationData, "timestamp">
  ): Promise<ApiResponse> {
    const registrationData: RegistrationData = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    return apiRequest("/registrations", {
      method: "POST",
      body: JSON.stringify(registrationData),
    });
  },

  // Get all registrations (admin function)
  async getRegistrations(): Promise<ApiResponse<RegistrationData[]>> {
    return apiRequest<RegistrationData[]>("/registrations");
  },

  // Get registration by email
  async getRegistrationByEmail(
    email: string
  ): Promise<ApiResponse<RegistrationData>> {
    return apiRequest<RegistrationData>(
      `/registrations/${encodeURIComponent(email)}`
    );
  },

  // Update registration
  async updateRegistration(
    email: string,
    data: Partial<RegistrationData>
  ): Promise<ApiResponse> {
    return apiRequest(`/registrations/${encodeURIComponent(email)}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  // Delete registration
  async deleteRegistration(email: string): Promise<ApiResponse> {
    return apiRequest(`/registrations/${encodeURIComponent(email)}`, {
      method: "DELETE",
    });
  },
};

// Health check function
export const healthApi = {
  async checkHealth(): Promise<ApiResponse> {
    return apiRequest("/health");
  },
};

// Export the base API request function for custom calls
export { apiRequest };
