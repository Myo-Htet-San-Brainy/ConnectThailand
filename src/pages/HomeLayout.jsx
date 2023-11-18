import { Outlet, useNavigation } from "react-router-dom";
import { Loading } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      {/* <Navbar>
        <NavLinks />
      </Navbar> */}
      {isLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </div>
  );
};

export default HomeLayout;
