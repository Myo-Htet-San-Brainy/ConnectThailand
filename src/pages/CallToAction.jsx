import { motion } from "framer-motion";
import { SectionTitle, CallToActionCard } from "../components";
import { NavLink } from "react-router-dom";
import { callToActionCards } from "../assets/data";

const CallToAction = () => {
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
      <SectionTitle text="Actions that we can take today" />
      {/* CARDS */}
      <div className="mt-8">
        {callToActionCards.map((card) => {
          const { title, text, learnMoreLink, image, id } = card;
          return (
            <CallToActionCard
              key={id}
              text={text}
              image={image}
              title={title}
              learnMoreLink={learnMoreLink}
            />
          );
        })}
      </div>

      {/* BUTTON NAVIGATING TO INEQUALITY */}
      <div className="text-center">
        <NavLink to="/aboutUs" className="btn btn-secondary mt-5">
          About the creators of this website &#x1F528;&#x1F3E2;
        </NavLink>
      </div>
    </div>
  );
};

export default CallToAction;
