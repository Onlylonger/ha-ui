import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { messageBox, MessageBoxContainer } from "./components/MessageBox";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <MessageBoxContainer />
    <button
      onClick={async () => {
        const action = await messageBox.open({
          title: `${Math.random()}`,
          content: `${Math.random()}`,
          type: "info",
        });
        if (action === "OK") {
          messageBox.open({
            title: `${Math.random()}`,
            content: `${Math.random()}`,
            type: "error",
          });
        }
      }}
    >
      open messageBox
    </button>
  </StrictMode>
);
