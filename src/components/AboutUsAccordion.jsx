import React from "react";

const AboutUsAccordion = ({ title, text, websiteLink }) => {
  return (
    <div className="mt-7 collapse bg-base-200">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        <p>{text}</p>
        {websiteLink && (
          <p>
            Learn more about me at{" "}
            <a
              href={websiteLink}
              className="uppercase font-bold underline hover:text-white"
              target="_blank"
            >
              my website.
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AboutUsAccordion;
