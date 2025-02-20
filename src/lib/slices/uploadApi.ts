import axios, { AxiosProgressEvent } from "axios";
import secureLocalStorage from "react-secure-storage";
import useLogout from "@/hooks/useLogout"; // Import useLogout hook

interface UserData {
  token: string;
}

// Utility function to get the token
const getAuthToken = secureLocalStorage.getItem(
  "userData"
) as unknown as UserData | null;

export const uploadFile = async (
  file: FormData,
  handleLogout: () => void,
  onProgress?: (percentage: number) => void,
) => {
  const token = getAuthToken?.token ?? "";

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/upload`,
      file,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token ? `Bearer ${token}` : "",
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (progressEvent.total) {
            const percentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            if (onProgress) {
              onProgress(percentage);
            } // Call the progress callback
          }
        },
      }
    );
    return response.data;
  } catch (error: any) {
    // Check if the error is a 401 Unauthorized
    if (error.response?.status === 401) {
      console.log("Unauthorized! Logging out...");
      handleLogout(); // Call the logout function if 401 is received
    }
    throw error; // Rethrow the error after handling
  }
};
