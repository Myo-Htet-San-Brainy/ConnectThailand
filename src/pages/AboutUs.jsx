import { NavLink } from "react-router-dom";
import { AboutUsPhotos, SectionTitle, AboutUsAccordion } from "../components";
import { motion } from "framer-motion";
import { aboutUsPhotos, people } from "../assets/data";

const AboutUs = () => {
  return (
    <div>
      <motion.div
        key={"AboutUs"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
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
        <SectionTitle text="About us" />
        {/* CONTENT */}
        <div className="mt-8 flex gap-x-5 ">
          {/* ABOUT US PHOTOS */}
          <div className="flex-none">
            <AboutUsPhotos images={aboutUsPhotos} />
          </div>
          {/* TEXT */}
          <div className="flex-grow">
            {people.map((person) => {
              const { name, about, id, websiteLink } = person;
              return (
                <AboutUsAccordion
                  key={id}
                  title={name}
                  text={about}
                  websiteLink={websiteLink}
                />
              );
            })}
          </div>
        </div>
        {/* BUTTON NAVIGATING TO INEQUALITY */}
        <div className="text-center">
          <NavLink to="/" className="btn btn-secondary mt-5">
            Back to home &#x1F3E0;
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
