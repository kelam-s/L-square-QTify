import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import SongsSection from "./components/SongsSection/SongsSection"; // ← add this

function App() {
  return (
    <BrowserRouter>
      <Navbar searchData={[]} />
      <Hero />
      <Section title="Top Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/top" />
      <Section title="New Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/new" />
      <SongsSection /> {/* ← add this */}
    </BrowserRouter>
  );
}

export default App;