import React from "react";

const AboutUsPhotos = ({ images, imageHeight = "h-80" }) => {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box hidden lg:flex">
      {images.map((item) => {
        const { id, image } = item;
        return (
          <div key={id} className="carousel-item">
            <img src={image} className={`rounded-box ${imageHeight}`} />
          </div>
        );
      })}
    </div>
  );
};

export default AboutUsPhotos;
