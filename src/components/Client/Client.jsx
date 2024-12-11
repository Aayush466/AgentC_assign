import React from "react";
import ClientSection from "../../assets/Past_Clients.png";

export const Client = () => {
  return (
    <div className="w-full mb-16 px-4 lg:px-[170px]">
      {/* Client Section */}
      <img
        src={ClientSection}
        alt="Client Section"
        className="w-full h-auto object-contain"
      />
    </div>
  );
};
