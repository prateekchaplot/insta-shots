import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development" ? "http://localhost:8001" : "";

axios.defaults.baseURL = baseUrl;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
