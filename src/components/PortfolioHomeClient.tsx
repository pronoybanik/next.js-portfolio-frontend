"use client";

import { useEffect, useState } from "react";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Services from "@/components/Service";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import { fetchPortfolioSettings } from "@/services/portfolio";
import { PortfolioSettings } from "@/types/portfolio";

export default function PortfolioHomeClient({
  initialSettings,
}: {
  initialSettings?: PortfolioSettings;
}) {
  const [settings, setSettings] = useState<PortfolioSettings | null>(
    initialSettings ?? null,
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const data = await fetchPortfolioSettings();
        if (mounted) {
          setSettings(data);
        }
      } catch (loadError) {
        if (mounted) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Failed to load portfolio settings",
          );
        }
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return <p className="p-8 text-center text-red-400">{error}</p>;
  }

  if (!settings) {
    return <p className="p-8 text-center text-slate-400">Loading portfolio...</p>;
  }

  return (
    <div>
      <Header id="home" settings={settings} />
      <Education
        id="education"
        data={settings.education}
        variant={settings.sectionStyles.education}
      />
      <Experience
        id="experience"
        data={settings.experience}
        variant={settings.sectionStyles.experience}
      />
      <Services id="services" />
      <Projects id="projects" />
      <Skill
        id="skills"
        data={settings.skills}
        softSkills={settings.softSkills}
        variant={settings.sectionStyles.skills}
      />
      <Blog id="blog" />
      <Contact id="contact" />
    </div>
  );
}
