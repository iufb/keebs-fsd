import { navlinks } from "src/shared/lib";
import { Navlink } from "./navlink";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-5 ">
        {navlinks.map((navlink) => (
          <Navlink key={navlink.name} name={navlink.name} to={navlink.path} />
        ))}
      </ul>
    </nav>
  );
};
