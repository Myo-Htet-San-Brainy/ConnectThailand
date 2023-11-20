import { Gallery, GalleryItems, SectionTitle, Paragraph } from "../components";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* TITLE */}
      <SectionTitle text="natural beauty of rural thailand" />
      {/* GALLERY */}
      <div className="mt-16">
        <Gallery>
          <GalleryItems />
        </Gallery>
      </div>
      {/* INEQUALITY */}
      <div className="mt-16">
        <SectionTitle text="What is Digital inequality?" fontSize="text-2xl" />
        <div className="mt-8">
          <Paragraph text="hi" />
        </div>
      </div>
      {/* BUTTON NAVIGATING TO INEQUALITY */}
      <div className="text-center">
        <NavLink to="inequality" className="btn btn-secondary mt-5">
          Digital Inequality in Thailand
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
