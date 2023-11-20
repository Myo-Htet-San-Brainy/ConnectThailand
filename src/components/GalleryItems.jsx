import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7];

function previousIndex(currentIndex, arrayLength) {
  if (currentIndex === 0) {
    return arrayLength - 1;
  } else {
    return currentIndex - 1;
  }
}

function nextIndex(currentIndex, arrayLength) {
  if (currentIndex === arrayLength - 1) {
    return 0;
  } else {
    return currentIndex + 1;
  }
}

const GalleryItems = () => {
  return (
    <>
      {images.map((image, index) => {
        return (
          <div
            key={index}
            id={`${index}`}
            className="carousel-item relative w-full "
          >
            <img src={image} className="w-full object-cover " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#${previousIndex(index, images.length)}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#${nextIndex(index, images.length)}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GalleryItems;
