import { ImageText, Paragraph, SectionTitle } from "../components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Statistics from "../assets/thai_statistics.png";
import {
  digitalInequalityThailand,
  learnMoreThaiDigitalDivideLink,
} from "../assets/data";

const Inequality = () => {
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
      <SectionTitle text="A glance at Thailand's digital divide" />
      {/* Explanation */}
      <div className="mt-8">
        <Paragraph text={digitalInequalityThailand} />
      </div>
      {/* STATISTICS PIC */}
      <div className="mt-16 lg:w-2/3 lg:h-2/3 mx-auto">
        <img
          src={Statistics}
          alt="Thailand's digital divide Statistics"
          className="object-cover"
        />
      </div>
      <ImageText text="Some Statistics showing digital divide between rural and urban Thailand" />
      {/* DOWNLOAD TO LEARN MORE */}
      <h1 className="mt-16 capitalize text-primary-content bg-primary rounded-sm p-4 ">
        To Learn More, please download this{" "}
        <a
          className="uppercase font-bold underline hover:text-white"
          href={learnMoreThaiDigitalDivideLink}
        >
          link
        </a>
      </h1>
      {/* BUTTON NAVIGATING TO INEQUALITY */}
      <div className="text-center">
        <NavLink to="/solutions" className="btn btn-secondary mt-5">
          Solutions to this digital divide &#128512;
        </NavLink>
      </div>
    </div>
  );
};

export default Inequality;
