import React from "react";
import OfficeSection from "../../assets/The_Office.png";
export const Office = () => {
  return (
    <>
      {/* <h2>Office Section </h2> */}
      <div className="mx-[75px] mt-[75px] mb-[150px]">
        <img
          src={OfficeSection}
          // className="w-full  md:max-w-2xl lg:max-w-1xl"
          alt="Office Section "
        />
      </div>
    </>
  );
};
