import { AxiosError } from "axios";
const standartMessage = "Unknown error occured.";
export const getErrorMessage = (error: Error | null): string | null => {
  if (error instanceof AxiosError) {
    if (!error.response) {
      return standartMessage;
    }
    return error.response.data.message;
  }
  return null;
};
