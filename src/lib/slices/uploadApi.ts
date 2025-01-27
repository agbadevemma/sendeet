import axios, { AxiosProgressEvent } from "axios";
import secureLocalStorage from "react-secure-storage";

// Utility function to get the token
const getAuthToken = () => secureLocalStorage.getItem("userData")?.token??"";

export const uploadFile = (file: FormData, onProgress: (percentage: number) => void) => {
  const token = getAuthToken();

  return axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/upload`, // Replace with your API endpoint
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
          onProgress(percentage); // Call the progress callback
        }
      },
    }
  );
};
