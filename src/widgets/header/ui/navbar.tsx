import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { navlinks } from "src/shared/lib";
import { Navlink } from "./navlink";
interface INavbar
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }
export const Navbar: FC<INavbar> = ({ className, ...props }) => {
  return (
    <nav className={`${className}`} {...props}>
      <ul className="flex gap-5 ">
        {navlinks.map((navlink) => (
          <Navlink
            key={navlink.name}
            name={navlink.name}
            to={navlink.path}
            variant="base"
          />
        ))}
      </ul>
    </nav>
  );
};
