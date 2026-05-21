"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Experience from "@/components/Experience";
import Builders from "@/components/Builders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Experience />
        <Builders />
      </main>
      <Footer />
    </>
  );
}
