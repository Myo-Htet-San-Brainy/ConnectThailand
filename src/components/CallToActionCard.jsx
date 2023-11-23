import React from "react";

const CallToActionCard = ({ image, text, learnMoreLink, title }) => {
  return (
    <div
      className="mt-7 lg:h-96 card lg:card-side bg-base-100 shadow-xl 
     hover:shadow-2xl duration-300 "
    >
      <figure className="lg:w-7/12">
        <img src={image} />
      </figure>
      <div className="card-body lg:w-5/12">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <a
            href={learnMoreLink}
            target="_blank"
            className="btn btn-primary capitalize"
          >
            learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToActionCard;
