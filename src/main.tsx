import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SchedulesProvider } from "./hooks/use-schedules.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SchedulesProvider>
      <App />
    </SchedulesProvider>
    <ToastContainer />
  </StrictMode>,
);
