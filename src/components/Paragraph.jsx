import React from "react";

const Paragraph = ({ text }) => {
  return (
    <div className="text-primary-content bg-primary rounded-lg p-5 capitalize font-sans">
      {text}
    </div>
  );
};

export default Paragraph;
