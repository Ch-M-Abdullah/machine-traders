import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CategoriesProvider } from "./context/CategoriesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </StrictMode>
);
