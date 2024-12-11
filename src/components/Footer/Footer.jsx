import React from "react";
import FooterSection from "../../assets/Footer.png";

export const Footer = () => {
  return (
    <div className="w-full mt-10">
      {/* Footer Section Image */}
      <img
        src={FooterSection}
        alt="Footer Section"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};
