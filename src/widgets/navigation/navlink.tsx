import clsx from "clsx";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface INavlink {
  to: string;
  name: string;
}
export const Navlink: FC<INavlink> = ({ to, name }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "text-lg font-bold hover:underline-offset-[20px] hover:underline ",
          isActive && "text-accent-green",
        )
      }
    >
      {name}
    </NavLink>
  );
};
