import React from "react";
import HeroSection from "../../assets/Hero_Section.png";

export const Hero = () => {
  return (
    <div className="relative w-full mb-10">
      {/* Hero Section Image */}
      <img
        src={HeroSection}
        alt="Hero Section"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};
