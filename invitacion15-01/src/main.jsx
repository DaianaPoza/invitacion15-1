import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { AudioProvider } from "./context/AudioContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <AudioProvider>
        <App />
      </AudioProvider>
    </HashRouter>
  </React.StrictMode>
);