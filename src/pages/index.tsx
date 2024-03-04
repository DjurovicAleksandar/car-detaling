"use client";
import ProjectSection from "@/components/ProjectSection";
import ThirdSection from "@/components/ThirdSection";
import SecondSection from "@/components/SecondSection";
import FirstSection from "@/components/FirstSection";

export default function Home() {
  return (
    <>
      <div>
        <FirstSection />
        <ProjectSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </>
  );
}
