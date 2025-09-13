// src/app/about/page.js
"use client";

import { useEffect, useRef } from "react";
import AboutHero from "@/components/about/aboutHero/aboutHero";
import AboutBio from "@/components/about/aboutBio/bioContent";
import AboutLeadership from "@/components/about/aboutLeadership/leadershipGrid";
import AboutStructure from "@/components/about/aboutStructure/orgChart";
import AboutAchievements from "@/components/about/aboutAchievements/timeline";
//import AboutNav from "@/components/about/navigation/";
 import AboutCTA from "@/components/about/aboutCTA/aboutCTA";
import SectionWrapper from "@/components/about/sections/sectionWrapper";
import { useFadeIn } from "@/animation/aboutAnimate";

// Section IDs for hash routing
const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "biography", label: "Biography" },
  { id: "leadership", label: "Leadership" },
  { id: "structure", label: "Structure" },
  { id: "achievements", label: "Achievements" },
];

export default function AboutPage() {
  const [heroRef, heroVisible] = useFadeIn();
  const sectionsRef = useRef({});

  // Handle hash-based navigation and smooth scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && sectionsRef.current[hash]) {
        sectionsRef.current[hash].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Initial load with hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Set section refs
  const setSectionRef = (id) => (el) => {
    sectionsRef.current[id] = el;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* <AboutNav /> */}
      {/* Hero Section */}
      <section
        id="overview"
        ref={(el) => {
          heroRef.current = el;
          setSectionRef("overview")(el);
        }}
        className="pt-24 pb-16 md:pt-32 md:pb-24"
      >
        <AboutHero isVisible={heroVisible} />
      </section>

      {/* Biography Section */}
      <SectionWrapper
        id="biography"
        title="Biography"
        setRef={setSectionRef}
        className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24"
      >
        <AboutBio />
      </SectionWrapper>

      {/* Leadership Section */}
      <SectionWrapper
        id="leadership"
        title="Leadership Team"
        setRef={setSectionRef}
        className="bg-white dark:bg-gray-900 py-16 md:py-24"
      >
        <AboutLeadership />
      </SectionWrapper>

      {/* Structure Section */}
      <SectionWrapper
        id="structure"
        title="Office Structure"
        setRef={setSectionRef}
        className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24"
      >
        <AboutStructure />
      </SectionWrapper>

      {/* Achievements Section */}
      <SectionWrapper
        id="achievements"
        title="Achievements"
        setRef={setSectionRef}
        className="bg-white dark:bg-gray-900 py-16 md:py-24"
      >
        <AboutAchievements />
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper
        id="contact"
        title="Get In Touch"
        setRef={setSectionRef}
        className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 py-16 md:py-24"
      >
        <AboutCTA />
      </SectionWrapper>
    </div>
  );
}
