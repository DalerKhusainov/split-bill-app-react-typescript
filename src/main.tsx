import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import FriendsListProvider from "./context/friensListContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FriendsListProvider>
      <App />
    </FriendsListProvider>
  </StrictMode>
);
