import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "src/shared/lib";
import { RouterProvider } from "./router-provider";
export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RouterProvider />
        {children}
      </BrowserRouter>
    </QueryClientProvider>
  );
};
