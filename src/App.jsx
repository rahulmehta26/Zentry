/* eslint-disable no-unused-vars */
import React from "react";

import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutPage from "./pages/AboutPage";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import FeaturePage from "./pages/FeaturePage";
import StoryPage from "./pages/StoryPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <main className=" relative min-h-screen w-screen overflow-x-hidden ">
      <Navbar />

      <HeroSection />

      <AboutPage />

      <FeaturePage />

      <StoryPage />

      <ContactPage />

      <Footer />
    </main>
  );
}

export default App;
