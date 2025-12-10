import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import AuthProvider from "./context/AuthContext/AuthProvider.jsx";
import "./index.css";
import { router } from "./routes/router.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
