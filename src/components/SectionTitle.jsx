import React from "react";

const SectionTitle = ({ text, fontSize = "text-3xl" }) => {
  return (
    <div className="border-b border-base-300 pb-5">
      <h2 className={`${fontSize} font-medium tracking-wider capitalize`}>
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
