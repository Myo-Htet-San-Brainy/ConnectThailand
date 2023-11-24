import { Outlet, useNavigation } from "react-router-dom";
import { Loading, Navbar, NavLinks } from "../components";
import { AnimatePresence } from "framer-motion";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Navbar>
        <NavLinks />
      </Navbar>

      {isLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20 relative">
          <AnimatePresence>
            <Outlet />
          </AnimatePresence>
        </section>
      )}
    </>
  );
};

export default HomeLayout;
