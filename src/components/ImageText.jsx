import React from "react";

const ImageText = ({ text, largeVisible = "lg:block" }) => {
  return (
    <h1
      className={`capitalize text-center font-light text-primary mt-5 ${largeVisible} `}
    >
      {text}
    </h1>
  );
};

export default ImageText;
