import { NavLink } from "react-router-dom";
const links = [
  { id: 1, url: "/", text: "home" },
  { id: 3, url: "inequality", text: "Digital Divide" },
  { id: 4, url: "solutions", text: "Solutions To Digital inequality" },
  { id: 5, url: "callToAction", text: "Call To Action" },
  { id: 2, url: "aboutUs", text: "about us" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink to={url} className="capitalize">
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
