import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
