import React from "react";
import BannerSection from "../../assets/Banner.png";

export const Banner = () => {
  return (
    <div className="relative mb-10">
      {/* Banner Image */}
      <img
        src={BannerSection}
        alt="Banner Section"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};
