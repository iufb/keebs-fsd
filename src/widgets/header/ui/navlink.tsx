import clsx from "clsx";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface INavlink {
  to: string;
  name: string;
  variant: "base" | "burger";
}
export const Navlink: FC<INavlink> = ({ to, name, variant }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          {
            base: `text-lg font-bold hover:underline-offset-[20px] hover:underline ${
              isActive && "text-accent-green"
            } `,
            burger:
              "w-full py-1 bg-gray-100 hover:bg-gray-400 text-center hover:text-white px-1 rounded-md",
          }[variant]
        )
      }
    >
      {name}
    </NavLink>
  );
};
