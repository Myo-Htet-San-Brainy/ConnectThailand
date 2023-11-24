import Image1 from "../assets/kid.jpg";
import Image2 from "../assets/grandma.webp";
import Image3 from "../assets/conf.jpg";
import { motion } from "framer-motion";
import { ImageText, Paragraph, SectionTitle } from "../components";
import { NavLink } from "react-router-dom";
import { solutions } from "../assets/data";

const Solutions = () => {
  return (
    <div>
      <motion.div
        key={"Solutions"}
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
        <SectionTitle text="Initiatives and solutions trying to solve the divide" />
        {/* CONTENT */}
        <div className="mt-8 grid gap-y-4 gap-x-6 lg:grid-cols-2">
          {/* SOLUTION 1 */}
          <Paragraph text={solutions.solution1} />
          {/* PIC */}
          <div className="hidden lg:block">
            <img
              src={Image1}
              alt=""
              className="object-cover lg:h-72 w-full rounded-md"
            />
            <ImageText
              text="Kid studying on a laptop"
              largeVisible="lg:hidden"
            />
          </div>
          {/* PIC */}
          <div className="hidden lg:block">
            <img
              src={Image2}
              alt=""
              className="object-cover lg:h-72 w-full rounded-md"
            />
            <ImageText
              text="Kid using laptop with grandma"
              largeVisible="lg:hidden"
            />
          </div>
          {/* SOLUTION 2 */}
          <Paragraph text={solutions.solution2} />

          {/* SOLUTION 3 */}
          <Paragraph text={solutions.solution3} />

          {/* PIC */}
          <div className="hidden lg:block">
            <img
              src={Image3}
              alt=""
              className="object-cover lg:h-72 w-full rounded-md"
            />
            <ImageText
              text="Conf about reducing digital divide"
              largeVisible="lg:hidden"
            />
          </div>
        </div>
        {/* BUTTON NAVIGATING TO INEQUALITY */}
        <div className="text-center">
          <NavLink to="/callToAction" className="btn btn-secondary mt-5">
            Let's see what we can do &#128512;
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default Solutions;
