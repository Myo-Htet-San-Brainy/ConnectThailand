import { Gallery, GalleryItems, SectionTitle, Paragraph } from "../components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { digitalInequality } from "../assets/data";

const Landing = () => {
  return (
    <div>
      {/* Animation */}
      {/* <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      /> */}
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
          <Paragraph text={digitalInequality} />
        </div>
      </div>
      {/* BUTTON NAVIGATING TO INEQUALITY */}
      <div className="text-center">
        <NavLink to="/inequality" className="btn btn-secondary mt-5">
          Digital Inequality in Thailand &#x27A1;
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
